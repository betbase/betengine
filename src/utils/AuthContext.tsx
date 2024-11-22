import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '@/appwrite';
import { Models, OAuthProvider, AppwriteException, ID } from 'appwrite';

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  loadingUser: boolean;
  processing: boolean;
  error: string | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithOAuth: (provider: OAuthProvider) => Promise<void>;
  signUpWithEmail: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [loadingUser, setLoadingUser] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const checkAndRefreshSession = async () => {
      try {
        const isExpired = await isSessionExpired();

        if (isExpired) {
          setLoadingUser(true);
          await refreshSession();
        }
      } catch (e: unknown) {
        console.error('Failed to get session:', e);
      } finally {
        setLoadingUser(false);
      }
    };

    // Run the function immediately once
    checkAndRefreshSession();

    // Set the interval to run the function periodically
    const interval = setInterval(checkAndRefreshSession, 60 * 1000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const isSessionExpired = async () => {
    const session = await account.getSession('current');

    if (session.providerAccessTokenExpiry) {
      const expiryTime = new Date(session.providerAccessTokenExpiry);
      const currentTime = new Date();
      const timeDifference = expiryTime.getTime() - currentTime.getTime();

      // Refresh the session if the token is about to expire in the next 5 minutes
      return timeDifference < 5 * 60 * 1000;
    }

    return false;
  };

  const getUser = async () => {
    try {
      setError(null);
      setLoadingUser(true);

      const user = await account.get();

      setUser(user);
    } catch (e: unknown) {
      console.error(e);
      setUser(null);
      if (e instanceof AppwriteException) {
        setError(
          e.message === 'User (role: guests) missing scope (account)'
            ? null
            : e.message
        );
      }
    } finally {
      setLoadingUser(false);
    }
  };

  const refreshSession = async () => {
    try {
      const session = await account.updateSession('current');
      console.log('Session refreshed:', session);
    } catch (e: unknown) {
      console.error('Failed to refresh session:', e);
    }
  };

  const loginWithOAuth = async (provider: OAuthProvider) => {
    try {
      setError(null);
      setProcessing(true);
      await account.createOAuth2Session(
        provider,
        'http://localhost:3000/',
        'http://localhost:3000/auth/login'
        // getScopes(provider)
      );
      const user = await account.get();
      setUser(user);
      setProcessing(false);
    } catch (e: unknown) {
      console.error(error);
      setProcessing(false);

      if (e instanceof AppwriteException) {
        setError(
          e.message === 'User (role: guests) missing scope (account)'
            ? null
            : e.message
        );
      }
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      setError(null);
      setProcessing(true);
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
      setProcessing(false);
    } catch (e: unknown) {
      console.error(e);
      setProcessing(false);
      if (e instanceof AppwriteException) {
        setError(e.message);
      }
    }
  };

  const signUpWithEmail = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setError(null);
      setProcessing(true);
      const createdUser = await account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (createdUser?.$id) {
        setUser(createdUser);
      }

      setProcessing(false);
    } catch (e: unknown) {
      console.error(e);
      setProcessing(false);
      if (e instanceof AppwriteException) {
        setError(e.message);
      }
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (e: unknown) {
      console.error(e);
      if (e instanceof AppwriteException) {
        setError(e.message);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        processing,
        error,
        loginWithEmail,
        loginWithOAuth,
        signUpWithEmail,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
