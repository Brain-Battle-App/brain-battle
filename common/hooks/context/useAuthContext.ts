// Hook to access Firebase context
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
