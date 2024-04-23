import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "@/styles/globals.css";

import Layout from "@/layout";
import Profile from "@/pages/profile";
import Intheft from "@/pages/intheft";
import Devices from "@/pages/devices";
import Vehicles from "@/pages/vehicles";
import Customers from "@/pages/customers";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="intheft" element={<Intheft />} />
      <Route path="devices" element={<Devices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="mycustomer" element={<Customers />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
