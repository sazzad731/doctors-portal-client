import { createBrowserRouter } from "react-router-dom";
import Index from "../Layout/Index";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment/>
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;