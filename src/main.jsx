import { StrictMode, Suspense } from "react";
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
import ServiceDetails from "./ServiceDetails.jsx";
import MyServices from "./MyServices.jsx";

const limitedServices=fetch("https://b11a11-server-side-akib-dev1.vercel.app/services/limited")
  .then((response) => response.json())

const partners=fetch("/partners.json").then((response) => response.json())

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>}><Home limitedServices={limitedServices} partners={partners} /></Suspense>,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "myservices",
        element: <PrivateRoute><MyServices /></PrivateRoute>,
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
        path: "servicedetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`https://b11a11-server-side-akib-dev1.vercel.app/services/${params.id}`),
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
