import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";

export default function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="container mx-auto px-6 py-20 max-w-7xl">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
					<div className="col-span-2 lg:col-span-1">
						<a href="#home" className="flex items-center space-x-2 mb-4">
							<img width={180} src="/logo.svg" className="height-auto" />
						</a>
						<p className="text-sm opacity-80 mb-4">
							Uganda's premier culinary consulting authority.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-white hover:text-accent transition-colors"
							>
								<InstagramIcon className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-accent transition-colors"
							>
								<YoutubeIcon className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-accent transition-colors"
							>
								<FacebookIcon className="h-6 w-6" />
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<h4>Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#about"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#training"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Training
								</a>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h4>Our Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Kitchen Consultation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Chef Training
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Menu Engineering
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
								>
									Event Catering
								</a>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h4>Stay Updated</h4>
						<p className="text-sm opacity-80 mb-4">
							Get culinary insights and updates.
						</p>
						<form className="flex">
							<input
								type="email"
								placeholder="Your email"
								className="w-full px-4 py-2 rounded-l-md border-0 text-foreground focus:ring-0"
							/>
							<button
								type="submit"
								className="bg-secondary px-4 rounded-r-md font-semibold hover:bg-opacity-90"
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
