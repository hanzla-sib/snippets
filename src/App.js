import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    // eslint-disable-next-line no-sparse-arrays
    children: [
      {
        index: true,
        element: <div>This is home</div>,
      },
      ,
      {
        path: "/profile",
        element: <div>This is my profile</div>,
      },
      {
        path: "/about",
        element: <div>This is my about</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
