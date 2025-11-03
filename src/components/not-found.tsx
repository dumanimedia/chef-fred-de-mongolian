import { Link } from "@tanstack/react-router";
import { HomeIcon, UtensilsCrossedIcon } from "lucide-react";

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center text-center px-6 py-24">
			<section>
				<div className="flex flex-col items-center">
					<UtensilsCrossedIcon className="h-24 w-24 text-secondary mx-auto mb-8" />
					<h1 className="font-display font-bold text-6xl md:text-8xl text-primary">
						404
					</h1>
					<h2 className="font-display font-semibold text-2xl md:text-4xl text-primary mt-4">
						This Page is Off the Menu
					</h2>
					<p className="max-w-md mx-auto mt-6 text-lg text-slate-gray">
						It seems the recipe for this page has been misplaced. Let's guide
						you back to our main kitchen.
					</p>
					<Link
						to="/"
						className="mt-10 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-6 py-3 font-body text-base bg-secondary text-white hover:bg-opacity-90 focus:ring-secondary"
					>
						<HomeIcon className="h-5 w-5 mr-2" />
						Return to Homepage
					</Link>
				</div>
			</section>
		</main>
	);
}
