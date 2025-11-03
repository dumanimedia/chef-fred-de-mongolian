import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "@/components/header";
import Footer from "@/components/footer";

import NotFoundPage from "@/components/not-found";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
			<Footer />
			{import.meta.env.NODE_ENV !== "production" && (
				<TanStackRouterDevtools position="bottom-right" />
			)}
		</>
	),

	notFoundComponent: () => {
		return <NotFoundPage />;
	},
});
