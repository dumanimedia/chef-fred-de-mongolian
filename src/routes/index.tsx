import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main>
			<h1 className="text-3xl font-bold underline">This is the main website</h1>
			<Button>Book A Table</Button>
		</main>
	);
}
