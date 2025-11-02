import { useEffect, useState } from "react";
import { FlameLogo, MenuIcon, XIcon } from "./icons";
import { Button } from "./ui/button";

import { NAV_LINKS } from "@/data";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
		>
			<div className="container mx-auto px-6 py-3 flex justify-between items-center max-w-7xl">
				<a href="#home" className="flex items-center space-x-2">
					<FlameLogo className="h-12 w-12 text-deep-forest-green" />
					<span className="font-display font-bold text-lg text-deep-forest-green hidden sm:block">
						Chef Fred De Mongolian
					</span>
				</a>
				<nav className="hidden lg:flex space-x-8">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-slate-gray font-medium hover:text-warm-terracotta relative group"
						>
							{link.label}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-terracotta transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>
				<div className="hidden lg:block">
					<Button variant="secondary" type="button">
						Book Consultation
					</Button>
				</div>
				<div className="lg:hidden">
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="text-deep-forest-green"
					>
						<MenuIcon className="h-8 w-8" />
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="p-6">
					<button
						onClick={() => setMobileMenuOpen(false)}
						className="absolute top-4 right-4 text-slate-gray"
					>
						<XIcon className="h-8 w-8" />
					</button>
					<nav className="flex flex-col space-y-6 mt-16">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="text-slate-gray font-semibold text-lg hover:text-warm-terracotta"
							>
								{link.label}
							</a>
						))}
					</nav>
					<Button type="button" className="w-full mt-8">
						Book Consultation
					</Button>
				</div>
			</div>
		</header>
	);
}
