import { createBrowserRouter } from 'react-router-dom'

import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import UserTransactions from './pages/UserTransactions/UserTransactions.jsx'
import App from './App.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'

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
        path: "/user",
        element: <ProtectedRoute/>,
        children: [
          {
            index: true,
            element: <UserProfile />
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

export default router;