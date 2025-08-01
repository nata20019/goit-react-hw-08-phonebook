import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/JoinPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ContactsPage = React.lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.contactsBook.isLoading);
  // const isError = useSelector(state => state.contactsBook.isError);

  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const token = useSelector(state => state.auth.token); // Отримуємо токен зі стану

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        margin: 100,
      }}
    >
      <BrowserRouter
        basename="/goit-react-hw-08-phonebook"
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
