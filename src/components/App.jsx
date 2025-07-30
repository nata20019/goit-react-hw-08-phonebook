import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsSearch from './ContactsSearch';
import ContactsList from './ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
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

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
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
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
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

          {/* <Route
            path="/login"
            element={
              <React.Suspense fallback={<Loader />}>
                <LoginPage />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            path="/join"
            element={
              <React.Suspense fallback={<Loader />}>
                <JoinPage />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            path="/contacts"
            element={
              <Section title="Phonebook">
                <ContactForm />
              </Section>
            }
          /> */}
          {/* {isLoading && <Loader />}
          {isError && <p>Error loading contacts. Please try again later.</p>}
          <Section title="Contacts">
            <ContactsSearch />
            <ContactsList />
          </Section> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
