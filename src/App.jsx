import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Html from "./components/web-design-components/Html";
import Css from "./components/web-design-components/Css";
import Js from "./components/web-design-components/Js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Html />
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
      }
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;