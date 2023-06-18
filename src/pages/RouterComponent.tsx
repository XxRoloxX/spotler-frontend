import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import { Home } from './Home/Home'
import { Login } from './Login/Login'
import { ErrorPage } from './ErrorPage/ErrorPage'
import React from 'react';
import { Welcome } from './Welcome/Welcome';
import { AuthProvider, ProtectedRoute } from '../components/Authentication/AuthProvider';
import { RedirectFromSpotify } from './RedirectPages/RedirectFromSpotify';
import { InfoPage } from './InfoPage/InfoPage';

export enum ROUTES {
  WELCOME = "/",
  HOME = "/home",
  LOGIN = "/login",
  REDIRECT = "/spotify-redirect",
  INFO = '/info'
}


export const RouterComponent = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.WELCOME} element={<Welcome />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REDIRECT} element={<RedirectFromSpotify/>} />
          <Route path={ROUTES.INFO} element={<InfoPage/>}/>
          <Route path={ROUTES.HOME} element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}