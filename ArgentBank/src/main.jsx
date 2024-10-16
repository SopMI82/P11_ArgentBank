import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import UserEdit from './pages/UserEdit/UserEdit.jsx'
import UserTransactions from './pages/UserTransactions/UserTransactions.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/user/:id",
        children: [
          {
            index: true,
            element: <UserProfile />
          },
          {
            path: "edit",
            element: <UserEdit />,
          },
          {
            path: "transactions",
            element: <UserTransactions />,
          },
        ]
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
