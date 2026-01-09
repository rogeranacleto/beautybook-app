import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Layout } from "./layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { Dashboard } from "./pages/Admin/Dashboard";
import { History } from "./pages/Admin/History";
import { Appointments } from "./pages/Admin/Appointments";
import { Clients } from "./pages/Admin/Clients";
import { Notfound } from "./pages/Notfound";
export const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Signup />,
    path: "/signup",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <Dashboard />,
            path: "admin/dashboard",
          },
          {
            element: <Clients />,
            path: "admin/clients",
          },
          {
            element: <Appointments />,
            path: "admin/appointments",
          },
          {
            element: <History />,
            path: "admin/history",
          },
        ],
      },
    ],
  },
  {
    element: <Notfound/>,
    path: "*"
  }
]);