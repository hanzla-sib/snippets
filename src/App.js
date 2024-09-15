import "./App.css";
import NavBar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Routes/Protected";
import LoginPage from "./Components/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    // Protect the NavBar and its children
    element: <ProtectedRoute element={<NavBar />} />,
    children: [
      {
        index: true,
        element: <div>This is home</div>,
      },
      {
        path: "/profile",
        element: <div>This is my profile</div>,
      },
      {
        path: "/about",
        element: (
          <div style={{ fontSize: "clamp(16px, 4vw, 24px)" }}>
            This is my about
          </div>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, // Public login page
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
