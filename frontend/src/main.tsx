import "./index.css";
import { createRoot } from "react-dom/client";

import React from "react";

import AuthProvider from "./context/useAuth";
import Router from "./router";
import NotifyProvider from "./context/useNotify";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<NotifyProvider>
				<Router />
			</NotifyProvider>
		</AuthProvider>
	</React.StrictMode>
);
