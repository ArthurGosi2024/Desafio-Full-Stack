import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	BrowserRouter,
	Routes,
} from "react-router-dom";
import Layout from "./pages/layout";
import Login from "./pages/login/page";
import Register from "./pages/register/page";
import { useContextApi } from "./context/useAuth";
import LayoutDashboard from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard/page";
import GetEmblems from "./pages/dashboard/getEmblems/page";

export default function Router() {
	const { token } = useContextApi();

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				{token !== "" && (
					<Route path="/dashboard" element={<LayoutDashboard />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/dashboard/getEmblems" element={<GetEmblems />} />
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	);
}
