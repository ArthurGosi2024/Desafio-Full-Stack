import "./index.css";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login/page";
import React from "react";
import Register from "./pages/register";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
