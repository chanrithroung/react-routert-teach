import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Html from "./components/web-design-components/Html";
import Css from "./components/web-design-components/Css";
import Js from "./components/web-design-components/Js";
import NotFound from "./components/NotFoundPage";
import UserLayout from "./components/UserLayout";
import User from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            index: true,
            element: <Html />,
          },
          {
            path: "/css",
            element: <Css />
          },
          {
           path: "js",
           element: <Js />
          }
        ]
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/users",
        element: <UserLayout />,
        children: [
          {
            path: ':id',
            element: <User></User>
          }
        ]
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;