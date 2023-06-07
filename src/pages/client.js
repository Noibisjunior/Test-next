import React from 'react';
import { Router } from 'next/router';
import Login from '../pages/components/login/Login';
import Dashboard from '../pages/components/admin/Dashboard';
import ProtectedRoute from '../pages/components/ProtectedRoute';


const Client = () => (
  <Router>
    <ProtectedRoute path="/clientdashboard/dashboard" component={Dashboard} />
    <Login path="/clientdashboard/login" />
  </Router>
);

export default Client;
