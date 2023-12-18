import { createHashRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";

export const routers = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
  },
]);
