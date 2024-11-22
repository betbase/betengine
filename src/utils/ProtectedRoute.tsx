import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/utils/AuthContext';
import { authRoutes } from '@/routes';

export const ProtectedRoute = () => {
  const { user, loadingUser } = useAuth();

  if (loadingUser) return <div>Loading...</div>;

  return user?.$id ? (
    <Outlet />
  ) : (
    <Navigate to={authRoutes.signup.path} replace />
  );
};
