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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<Layout>
					<Login />
				</Layout>
			}
		></Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
