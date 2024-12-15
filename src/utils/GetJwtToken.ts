import { account } from '@/appwrite';
import { jwtDecode } from 'jwt-decode';
import { AppwriteException } from 'appwrite';

export const getJwtToken = async () => {
  try {
    const storedJwtToken = localStorage.getItem('jwtToken');

    if (!storedJwtToken) {
      const newToken = await account.createJWT();
      localStorage.setItem('jwtToken', newToken.jwt);
      return newToken.jwt;
    } else {
      const { exp } = jwtDecode(storedJwtToken);

      const currentTime = new Date().getTime() / 1000;

      if (!exp || exp < currentTime) {
        const newToken = await account.createJWT();
        localStorage.setItem('jwtToken', newToken.jwt);
        return newToken.jwt;
      }

      return storedJwtToken;
    }
  } catch (e: unknown) {
    if (e instanceof AppwriteException) {
      console.error('Appwrite error:', e);
    }
  }
};
