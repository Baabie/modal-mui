import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutes />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
