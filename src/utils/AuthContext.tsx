import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '@/appwrite.ts';
import { Models } from 'appwrite';
import { AppwriteException } from 'appwrite/src/client.ts';

interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  loadingUser: boolean;
  processing: boolean;
  error: AppwriteException | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
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
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setError(null);
      setLoadingUser(true);
      const user = await account.get();
      setUser(user);
      setLoadingUser(false);
    } catch (error: AppwriteException) {
      console.error(error);
      setUser(null);
      setError(
        error.message === 'User (role: guests) missing scope (account)'
          ? null
          : error.message
      );
      setLoadingUser(false);
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
    } catch (error: AppwriteException) {
      console.error(error.message);
      setProcessing(false);
      setError(error.message);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error: AppwriteException) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loadingUser, processing, error, loginWithEmail, logout }}>
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
