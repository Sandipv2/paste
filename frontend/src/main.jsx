import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import VerifyEmail from './pages/VerifyEmail'
import Dashboard from './pages/Dashboard'
import ResetPassword from './pages/ResetPassword'
import ViewPaste from './pages/ViewPaste'

import { Toaster } from 'react-hot-toast'

import RedirectLoggedInUser from './components/RedirectLoggedInUser'
import ProtectedRoute from './components/ProtectedRoute'
import DeleteAccount from './pages/DeleteAccount'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route
        path='/register'
        element={
          <RedirectLoggedInUser>
            <Register />
          </RedirectLoggedInUser>
        }
      />
      <Route
        path='/verify-email'
        element={
          <RedirectLoggedInUser>
            <VerifyEmail />
          </RedirectLoggedInUser>
        }
      />
      <Route
        path='/login'
        element={
          <RedirectLoggedInUser>
            <Login />
          </RedirectLoggedInUser>
        }
      />
      <Route
        path='/forgot-password'
        element={
          <RedirectLoggedInUser>
            <ForgotPassword />
          </RedirectLoggedInUser>
        }
      />
      <Route
        path='/reset-password/:token'
        element={
          <RedirectLoggedInUser>
            <ResetPassword />
          </RedirectLoggedInUser>
        }
      />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path='/delete-account'
        element={
          <ProtectedRoute>
            <DeleteAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path='/paste/:pasteId'
        element={
          <ViewPaste />
        }
      />
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)
