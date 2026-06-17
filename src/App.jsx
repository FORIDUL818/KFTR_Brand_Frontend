

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import DashboardLayout from "./Component/ManuLaout/DashboardLayout";
import Landing from "./pages/Landing";
const Dashboard = lazy(() => import("./pages/DashBoard"));
const Users = lazy(() => import("./pages/Users"));
const Products = lazy(() => import("./pages/Products"));
const Orders = lazy(() => import("./pages/Orders"));

const router = createBrowserRouter([
   {
    path: "/",element: <Landing/>
  },
  {
    path: "/home",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-full">Loading...</div>}>
            <Orders />
          </Suspense>
        ),
      },
    ],
  },
 
]);

function App() {
  return <RouterProvider router={router} />;
  
}

export default App;