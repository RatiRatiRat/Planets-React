import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/pages/landing-page/App.tsx";
import Mercury from "./components/pages/mercury/mercury.tsx";
import Saturn from "./components/pages/saturn/saturn.tsx";
import Neptune from "./components/pages/Neptune/neptune.tsx";
import Uranus from "./components/pages/uranus/uranus.tsx";
import Mars from "./components/pages/mars/mars.tsx";
import Venus from "./components/pages/Venus/venus.tsx";
import Jupiter from "./components/pages/Jupiter/jupiter.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Mercury",
    element: <Mercury />,
  },
  {
    path: "/Saturn",
    element: <Saturn />,
  },
  {
    path: "/Neptune",
    element: <Neptune />,
  },
  {
    path: "/Uranus",
    element: <Uranus />,
  },
  {
    path: "/Mars",
    element: <Mars />,
  },
  {
    path: "/Venus",
    element: <Venus />,
  },
  {
    path: "/Jupiter",
    element: <Jupiter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
