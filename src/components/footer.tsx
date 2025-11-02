import { FacebookIcon, FlameLogo, InstagramIcon, YoutubeIcon } from "./icons";

export default function Footer() {
	return (
		<footer className="bg-deep-forest-green text-white">
			<div className="container mx-auto px-6 py-20 max-w-7xl">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
					<div className="col-span-2 lg:col-span-1">
						<a href="#home" className="flex items-center space-x-2 mb-4">
							<FlameLogo className="h-12 w-12" />
							<span className="font-display font-bold text-lg">Chef Fred</span>
						</a>
						<p className="text-sm opacity-80 mb-4">
							Uganda's premier culinary consulting authority.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-white hover:text-gold-accent transition-colors"
							>
								<InstagramIcon className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gold-accent transition-colors"
							>
								<YoutubeIcon className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gold-accent transition-colors"
							>
								<FacebookIcon className="h-6 w-6" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-bold mb-4 font-body">Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#about"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#training"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Training
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-4 font-body">Our Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Kitchen Consultation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Chef Training
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Menu Engineering
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-warm-terracotta transition-colors"
								>
									Event Catering
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1">
						<h4 className="font-bold mb-4 font-body">Stay Updated</h4>
						<p className="text-sm opacity-80 mb-4">
							Get culinary insights and updates.
						</p>
						<form className="flex">
							<input
								type="email"
								placeholder="Your email"
								className="w-full px-4 py-2 rounded-l-md border-0 text-slate-gray focus:ring-0"
							/>
							<button
								type="submit"
								className="bg-warm-terracotta px-4 rounded-r-md font-semibold hover:bg-opacity-90"
							>
								Go
							</button>
						</form>
					</div>
				</div>
				<div className="mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-70">
					<p>
						&copy; {new Date().getFullYear()} Chef Fred De Mongolian Ltd. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
