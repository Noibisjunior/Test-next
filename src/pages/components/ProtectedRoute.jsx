import React from 'react';
import { useRouter } from 'next/router';
import { isLoggedIn } from '../../utils/auth';

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  const router = useRouter();
  console.log('in protected route', location.pathname);

  if (!isLoggedIn() && location.pathname !== '/app/login') {
    // If we’re not logged in, redirect to the home page.
    router.push('/clientdashboard/login');
    return null;
  }

  return <Component {...rest} />;
}

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
}


