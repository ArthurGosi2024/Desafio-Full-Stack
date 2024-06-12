import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login/page";
import Register from "./pages/register/page";
import { useContextApi } from "./context/useAuth";

export default function Router() {
	const { token } = useContextApi();
	return (
		<RouterProvider
			router={createBrowserRouter(
				createRoutesFromElements(
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						{token !== "" && (
							<>
								<Route path="/dashboard" element={<></>} />
							</>
						)}
					</Route>
				)
			)}
		/>
	);
}
