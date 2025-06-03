import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvidor from "./AuthProvidor.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyReviews from "./MyReviews.jsx";
import AddService from "./AddService.jsx";
import Error from "./Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "myreviews",
        element: <PrivateRoute><MyReviews /></PrivateRoute>
      },
      {
        path: "addservice",
        element: <PrivateRoute><AddService /></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvidor>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvidor>
  </StrictMode>
);
