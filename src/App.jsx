import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const DefaultRouter = () => {
  const data = JSON.parse(localStorage.getItem("blog_rdata"));
  if (data) {
    return <Navigate to="/login" replace />;
  } else {
    <Navigate to="/register" replace />;
  }
}
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRouter />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
  ])
  return <RouterProvider router={route} />;
}

export default App
