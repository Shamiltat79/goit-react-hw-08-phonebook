import {  useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";

import { refreshUser } from 'redux/auth/operations';

import { useAuth } from "hooks";

const HomePage = lazy(() => import('../../pages/HomePage/Home'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../../pages/LoginPage/Login'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();  
  const {isRefreshing} = useAuth();
 
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
 
 
  return isRefreshing ? (
    <b>Refreshing user...</b>)
    : (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<HomePage />} />
      
      <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route>
    </Routes>
   
  );
};



