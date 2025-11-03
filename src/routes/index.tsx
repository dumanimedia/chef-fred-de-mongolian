import {
	ArrowRightIcon,
	BarChartIcon,
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ClockIcon,
	FlameIcon,
	QuoteIcon,
	StarIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	CONTACT_INFO,
	DIFFERENTIATORS,
	METRICS,
	SERVICES,
	SUCCESS_STORIES,
	TESTIMONIALS,
	TRAINING_PROGRAMS,
	TRUST_INDICATORS,
} from "@/data";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
	component: App,
});

// Custom Hook for detecting when an element is in view
const useInView = (options?: IntersectionObserverInit) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			}
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(ref.current);
			}
		};
	}, [options]);

	return [ref, isInView] as const;
};

// Animated Counter Component
interface AnimatedCounterProps {
	target: number;
	duration?: number;
	className?: string;
	isInView: boolean;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
	target,
	duration = 2000,
	className,
	isInView,
}) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		let start = 0;
		const end = target;
		const increment = end / (duration / 16); // 60fps

		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.ceil(start));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [target, duration, isInView]);

	return <span className={className}>{count.toLocaleString()}</span>;
};

const AnimatedSection: React.FC<{
	children: React.ReactNode;
	className?: string;
	threshold?: number;
}> = ({ children, className, threshold = 0.1 }) => {
	const [ref, isInView] = useInView({ threshold });
	return (
		<div
			ref={ref}
			className={`${className} ${isInView ? "fade-in-up" : "opacity-0"}`}
		>
			{children}
		</div>
	);
};

const Hero = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=65')",
			}}
		>
			<div className="absolute inset-0 bg-black/80" />
			<div className="relative z-10 text-center text-white px-6">
				<AnimatedSection>
					<h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
						Transform Your Kitchen Into a Profit Center
					</h1>
					<p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-6">
						Uganda's premier culinary consultant specializing in hotel
						operations, professional training, and authentic international
						cuisine expertise.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button variant="secondary" className="w-full sm:w-auto">
							Book Free Consultation
						</Button>
						<Button className="text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
							Explore Services
						</Button>
					</div>
				</AnimatedSection>
			</div>
			<div className="absolute bottom-0 left-0 right-0 p-6 z-10">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
						{TRUST_INDICATORS.map((item) => (
							<div key={item.label} className="flex flex-col items-center">
								<span className="font-bold text-xl lg:text-2xl text-accent">
									{item.value}
								</span>
								<span className="text-sm lg:text-base opacity-90">
									{item.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// 3. The Mongolian Legacy Story
const LegacyStory: React.FC = () => (
	<section id="about" className="py-20 lg:py-28 bg-white">
		<div className="container mx-auto px-6 max-w-7xl">
			<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<AnimatedSection>
					<div className="flex items-center space-x-3 mb-4">
						<FlameIcon className="h-8 w-8 text-accent" />
						<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
							The Mongolian Legacy
						</h2>
					</div>
					<p className="font-body text-lg leading-relaxed text-foreground mb-6">
						Chef Fred earned his distinctive 'Mongolian' title through a
						remarkable culinary achievement—creating an authentic Mongolian
						cuisine that captivated Uganda's dining scene and left diners
						talking for months. Today, that same passion for authenticity and
						innovation drives every aspect of Chef Fred De Mongolian Ltd, from
						intimate cooking sessions to large-scale hotel transformations.
					</p>
					<a
						href="/"
						className="font-semibold text-secondary hover:underline inline-flex items-center"
					>
						Read Full Story <ArrowRightIcon className="ml-2 h-5 w-5" />
					</a>
				</AnimatedSection>
				<AnimatedSection>
					<img
						src="https://picsum.photos/seed/chef/600/700"
						alt="Chef Fred De Mongolian"
						className="rounded-xl shadow-lg w-full h-auto object-cover"
					/>
				</AnimatedSection>
			</div>
		</div>
	</section>
);

// 4. Services Showcase
const ServicesShowcase: React.FC = () => (
	<section id="services" className="py-20 lg:py-28 bg-background">
		<div className="container mx-auto px-6 max-w-[1400px]">
			<AnimatedSection className="text-center mb-16">
				<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
					Comprehensive Culinary Solutions
				</h2>
				<p className="font-body text-lg text-foreground max-w-3xl mx-auto mt-4">
					From consultation to implementation, we transform every aspect of your
					culinary operations.
				</p>
			</AnimatedSection>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{SERVICES.slice(0, 8).map((service) => {
					const ServiceIcon = service.icon;
					return (
						<AnimatedSection key={service.title} className="flex">
							<div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-secondary hover:shadow-xl transition-all duration-300 flex flex-col">
								<div className="text-accent mb-4">
									<ServiceIcon className="h-12 w-12" />
								</div>
								<h3 className="font-display font-semibold text-2xl text-primary mb-3">
									{service.title}
								</h3>
								<p className="text-foreground grow">{service.description}</p>
								<a
									href="/"
									className="font-semibold text-secondary mt-6 inline-flex items-center group"
								>
									Learn More{" "}
									<ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</a>
							</div>
						</AnimatedSection>
					);
				})}
			</div>
		</div>
	</section>
);

// 5. Results & Impact Metrics
const ResultsMetrics: React.FC = () => {
	const [ref, isInView] = useInView({ threshold: 0.5 });

	return (
		<section ref={ref} className="py-20 lg:py-24 bg-primary text-white">
			<div className="container mx-auto px-6 max-w-7xl text-center">
				<AnimatedSection>
					<h2 className="font-display font-semibold text-3xl md:text-4xl">
						Proven Results That Transform Businesses
					</h2>
					<p className="font-body text-lg opacity-90 max-w-3xl mx-auto mt-4">
						Our data-driven approach delivers measurable improvements to your
						bottom line.
					</p>
				</AnimatedSection>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
					{METRICS.map((metric) => {
						const ItemIcon = metric.icon;
						return (
							<AnimatedSection
								key={metric.label}
								className="flex flex-col items-center"
							>
								<div className="mb-2">
									<ItemIcon className="h-10 w-10 text-white opacity-80" />
								</div>
								<AnimatedCounter
									target={metric.value}
									isInView={isInView}
									className="font-display font-bold text-4xl md:text-5xl text-accent"
								/>
								<span className="font-body font-medium text-lg mt-2 opacity-90">
									{metric.label}
								</span>
							</AnimatedSection>
						);
					})}
				</div>
			</div>
		</section>
	);
};

// 6. Featured Success Stories
const SuccessStories: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextStory = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % SUCCESS_STORIES.length);
	}, []);

	useEffect(() => {
		const timer = setInterval(nextStory, 5000);
		return () => clearInterval(timer);
	}, [nextStory]);

	return (
		<section id="portfolio" className="py-20 lg:py-28 bg-white">
			<div className="container mx-auto px-6 max-w-7xl">
				<AnimatedSection className="text-center mb-16">
					<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
						Client Success Stories
					</h2>
					<p className="font-body text-lg text-foreground max-w-3xl mx-auto mt-4">
						Real transformations from Uganda's leading hospitality
						establishments.
					</p>
				</AnimatedSection>
				<div className="relative h-[600px] md:h-[500px]">
					{SUCCESS_STORIES.map((story, index) => (
						<div
							key={story.client}
							className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
						>
							<div className="grid lg:grid-cols-2 gap-12 items-center h-full">
								<img
									src={story.image}
									alt={story.client}
									className="w-full h-64 lg:h-full object-cover rounded-2xl shadow-lg"
								/>
								<div className="p-4">
									<span className="font-semibold text-secondary">
										{story.client}
									</span>
									<h3 className="font-display font-semibold text-2xl text-primary mt-2 mb-4">
										{story.challenge}
									</h3>
									<p className="text-foreground mb-4">
										<strong className="text-primary">Solution:</strong>{" "}
										{story.solution}
									</p>
									<div className="bg-background p-4 rounded-lg mb-4">
										<p className="text-foreground">
											<strong className="text-primary">Results:</strong>{" "}
											{story.results}
										</p>
									</div>
									<p className="text-foreground italic relative pl-8">
										<QuoteIcon className="absolute left-0 top-0 h-6 w-6 text-accent opacity-50" />
										{story.testimonial}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center space-x-3 mt-8">
					{SUCCESS_STORIES.map((story, index) => (
						<button
							key={story.client}
							type="button"
							onClick={() => setCurrentIndex(index)}
							className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? "bg-secondary" : "bg-primary opacity-30"}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

// 7. Expertise Highlights
const ExpertiseHighlights: React.FC = () => (
	<section className="py-20 lg:py-28 bg-background">
		<div className="container mx-auto px-6 max-w-7xl">
			<AnimatedSection className="text-center mb-16">
				<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
					Why Choose Chef Fred De Mongolian Ltd?
				</h2>
			</AnimatedSection>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{DIFFERENTIATORS.map((item) => {
					const DiffIcon = item.icon;
					return (
						<AnimatedSection key={item.title} className="text-center p-6 group">
							<div className="inline-block p-4 bg-secondary text-white rounded-full mb-5 transition-transform duration-300 group-hover:scale-110">
								<DiffIcon className="h-10 w-10" />
							</div>
							<h3 className="font-display font-semibold text-2xl text-primary mb-3">
								{item.title}
							</h3>
							<p className="text-foreground">{item.text}</p>
						</AnimatedSection>
					);
				})}
			</div>
		</div>
	</section>
);

// 8. Training Programs Preview
const TrainingPrograms: React.FC = () => (
	<section id="training" className="py-20 lg:py-28 bg-white">
		<div className="container mx-auto px-6 max-w-7xl">
			<AnimatedSection className="text-center mb-16">
				<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
					Upcoming Training Programs
				</h2>
				<p className="font-body text-lg text-foreground max-w-3xl mx-auto mt-4">
					Elevate your culinary skills with hands-on workshops and certification
					programs.
				</p>
			</AnimatedSection>
			<div className="grid lg:grid-cols-3 gap-8">
				{TRAINING_PROGRAMS.map((program) => (
					<AnimatedSection key={program.title} className="flex">
						<div className="border-2 border-primary rounded-2xl p-8 flex flex-col w-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
							<span className="absolute top-4 -right-10 bg-accent text-white text-sm font-semibold px-12 py-1 transform rotate-45">
								HOT
							</span>
							<h3 className="font-display font-semibold text-2xl text-primary mb-4">
								{program.title}
							</h3>
							<div className="space-y-3 text-foreground mb-6 grow">
								<p className="flex items-center">
									<CalendarIcon className="h-5 w-5 mr-3 text-secondary" />{" "}
									{program.date}
								</p>

								<p className="flex items-center">
									<ClockIcon className="h-5 w-5 mr-3 text-secondary" />{" "}
									{program.duration}
								</p>
								<p className="flex items-center">
									<BarChartIcon className="h-5 w-5 mr-3 text-secondary" />{" "}
									{program.level}
								</p>
							</div>
							<p className="font-semibold text-secondary mb-4">
								{program.spots}
							</p>
							<p className="font-display font-bold text-3xl text-primary mb-6">
								{program.price}
							</p>
							<Button className="w-full mt-auto">Register Now</Button>
						</div>
					</AnimatedSection>
				))}
			</div>
			<div className="text-center mt-12">
				<a
					href="/"
					className="font-semibold text-secondary hover:underline inline-flex items-center text-lg"
				>
					View Full Schedule <ArrowRightIcon className="ml-2 h-5 w-5" />
				</a>
			</div>
		</div>
	</section>
);

// 10. Client Testimonials Carousel
const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// const goToSlide = (index: number) => {
	// 	setCurrentIndex(index);
	// };

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
	}, []);

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
		);
	};

	useEffect(() => {
		const slider = setInterval(nextSlide, 6000);
		return () => clearInterval(slider);
	}, [nextSlide]);

	return (
		<section className="py-20 lg:py-28 bg-background">
			<div className="container mx-auto px-6 max-w-4xl text-center">
				<AnimatedSection className="mb-12">
					<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
						What Our Clients Say
					</h2>
				</AnimatedSection>
				<div className="relative">
					<div className="overflow-hidden relative h-[420px] md:h-80">
						{TESTIMONIALS.map((testimonial, index) => (
							<div
								key={testimonial.name}
								className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
							>
								<div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg h-full flex flex-col justify-center relative">
									<QuoteIcon className="absolute top-8 left-8 h-12 w-12 text-accent opacity-20" />
									<p className="font-display italic text-xl md:text-2xl text-secondary mb-6">{`"${testimonial.quote}"`}</p>
									<div className="flex items-center justify-center">
										<img
											src={testimonial.photo}
											alt={testimonial.name}
											className="h-16 w-16 rounded-full object-cover mr-4"
										/>
										<div>
											<p className="font-body font-bold text-primary text-left">
												{testimonial.name}
											</p>
											<p className="font-body text-foreground text-left">
												{testimonial.title}
											</p>
											<div className="flex mt-1">
												{[1, 2, 3, 4, 5].map((num) => (
													<StarIcon key={num} className="h-5 w-5 text-accent" />
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<button
						onClick={prevSlide}
						type="button"
						className="absolute top-1/2 -left-5 md:left-[-50px] -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-secondary hover:text-white transition-colors text-primary"
					>
						<ChevronLeftIcon className="h-6 w-6" />
					</button>
					<button
						onClick={nextSlide}
						type="button"
						className="absolute top-1/2 right-5 md:right-[-50px] -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-secondary hover:text-white transition-colors text-primary"
					>
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
		</section>
	);
};

// 12. Contact Information Section
const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-20 lg:py-28 bg-white">
			<div className="container mx-auto px-6 max-w-7xl">
				<AnimatedSection className="text-center mb-16">
					<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary">
						Get In Touch
					</h2>
				</AnimatedSection>
				<div className="grid lg:grid-cols-5 gap-10">
					<div className="lg:col-span-2">
						<AnimatedSection>
							<div className="space-y-8">
								{CONTACT_INFO.map((info) => {
									const ContactIcon = info.icon;
									return (
										<div key={info.label} className="flex items-start">
											<div className="shrink-0 bg-secondary/10 p-3 rounded-lg mr-4">
												<ContactIcon className="h-6 w-6 text-secondary" />
											</div>
											<div>
												<h3 className="font-body font-bold text-primary text-lg">
													{info.label}
												</h3>
												<div
													className="text-foreground"
													dangerouslySetInnerHTML={{ __html: info.info }}
												/>
												<p className="text-sm text-foreground/70 mt-1">
													{info.note}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</AnimatedSection>
					</div>
					<div className="lg:col-span-3 bg-background p-8 rounded-2xl">
						<AnimatedSection>
							<form className="space-y-6">
								<div className="grid sm:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-foreground mb-2"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full px-4 py-3 rounded-lg border-border focus:ring-secondary focus:border-secondary"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-foreground mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full px-4 py-3 rounded-lg border-border focus:ring-secondary focus:border-secondary"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="service"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Service of Interest
									</label>
									<select
										id="service"
										className="w-full px-4 py-3 rounded-lg border-border focus:ring-secondary focus:border-secondary"
									>
										<option>Hotel/Restaurant Consultation</option>
										<option>Professional Chef Training</option>
										<option>Menu Development</option>
										<option>Premium Event Catering</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-foreground mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										className="w-full px-4 py-3 rounded-lg border-border focus:ring-secondary focus:border-secondary"
									/>
								</div>
								<div>
									<Button size="lg" type="submit" className="w-full">
										Send Message
									</Button>
								</div>
							</form>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	);
};

function App() {
	return (
		<main>
			<Hero />
			<LegacyStory />
			<ServicesShowcase />
			<ResultsMetrics />
			<SuccessStories />
			<ExpertiseHighlights />
			<TrainingPrograms />
			{/* Skipping Social Proof section as it requires complex embeds */}
			<Testimonials />
			{/* Skipping CTA section as it repeats elements */}
			<Contact />{" "}
		</main>
	);
}
