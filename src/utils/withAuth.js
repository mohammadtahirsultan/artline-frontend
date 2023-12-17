// utils/withAuth.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from './auth';

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Redirect to login if the user is not authenticated
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
