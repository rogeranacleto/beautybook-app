import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
export const router = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Signup/>,
    path: "/signup"
  },
  {
    element: <Login/>,
    path: "/login"
  }
])