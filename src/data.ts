import * as Icons from "@/components/icons";

export const NAV_LINKS = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#services", label: "Services" },
	{ href: "#portfolio", label: "Portfolio" },
	{ href: "#training", label: "Training" },
	{ href: "#contact", label: "Contact" },
];

export const TRUST_INDICATORS = [
	{ value: "10+ Years", label: "Experience" },
	{ value: "500+", label: "Chefs Trained" },
	{ value: "50+", label: "Hotels Transformed" },
	{ value: "98%", label: "Client Satisfaction" },
];

export const SERVICES = [
	{
		icon: Icons.HotelIcon,
		title: "Hotel/Restaurant Kitchen Consultation",
		description:
			"Complete kitchen assessment and operational efficiency optimization.",
	},
	{
		icon: Icons.ChefHatIcon,
		title: "Professional Chef Training Programs",
		description:
			"Skill development workshops covering techniques and service standards.",
	},
	{
		icon: Icons.ClipboardListIcon,
		title: "Menu Development & Engineering",
		description:
			"Custom menu creation with pricing strategy and profitability analysis.",
	},
	{
		icon: Icons.UtensilsIcon,
		title: "Premium Event Catering",
		description: "High-end catering with signature Mongolian specialties.",
	},
	{
		icon: Icons.DollarSignIcon,
		title: "Food Cost Analysis & Optimization",
		description: "Detailed cost breakdowns and profit margin improvement.",
	},
	{
		icon: Icons.StarIcon,
		title: "Private Chef Services",
		description: "In-home dining experiences and personal cooking sessions.",
	},
	{
		icon: Icons.TrendingUpIcon,
		title: "Kitchen Staff Performance Coaching",
		description: "One-on-one coaching to improve skills and teamwork.",
	},
	{
		icon: Icons.LightbulbIcon,
		title: "Restaurant Concept Development",
		description: "Complete planning from concept to launch.",
	},
];

export const METRICS = [
	{ value: 15, label: "Years of Excellence", icon: Icons.AwardIcon },
	{ value: 500, label: "Chefs Trained", icon: Icons.UsersIcon },
	{ value: 50, label: "Hotels Transformed", icon: Icons.HotelIcon },
	{
		value: 2000000,
		label: "Revenue Increases Generated",
		icon: Icons.DollarSignIcon,
	},
];

export const SUCCESS_STORIES = [
	{
		client: "5-Star Hotel, Kampala",
		challenge: "Luxury Hotel F&B Turnaround",
		solution: "Complete menu engineering and staff training program.",
		results: "Revenue increased 47%, guest satisfaction up 35%.",
		testimonial:
			"Chef Fred transformed our entire F&B operation. His expertise is unmatched.",
		image: "https://picsum.photos/seed/hotel/800/600",
	},
	{
		client: "New Restaurant Concept, Kampala",
		challenge: "Restaurant Launch Success",
		solution: "Concept development, menu creation, staff training.",
		results: "Profitable within 3 months, 4.8-star reviews.",
		testimonial:
			"From concept to opening, Chef Fred was instrumental in our success.",
		image: "https://picsum.photos/seed/restaurant/800/600",
	},
	{
		client: "Aspiring Head Chef",
		challenge: "Chef Professional Development",
		solution: "Intensive coaching and specialty technique workshops.",
		results: "Promoted to Head Chef role, salary increased 60%.",
		testimonial:
			"The training I received opened doors I never thought possible.",
		image: "https://picsum.photos/seed/chefdev/800/600",
	},
];

export const DIFFERENTIATORS = [
	{
		icon: Icons.FlameIcon,
		title: "International Cuisine Mastery",
		text: "The only consultant in Uganda with proven authentic Mongolian cuisine expertise and international specializations.",
	},
	{
		icon: Icons.BarChartIcon,
		title: "Measurable ROI Focus",
		text: "Every service is designed to increase profitability and operational efficiency with documented results.",
	},
	{
		icon: Icons.TargetIcon,
		title: "Complete Solutions",
		text: "Training, consultation, and implementation support—everything you need under one roof.",
	},
	{
		icon: Icons.StarIcon,
		title: "Industry Recognition",
		text: "Strong social media presence and recognition across Uganda's hospitality community.",
	},
	{
		icon: Icons.HandshakeIcon,
		title: "Long-Term Relationships",
		text: "We build lasting partnerships focused on your sustained success, not just project completion.",
	},
	{
		icon: Icons.WrenchIcon,
		title: "Practical Execution",
		text: "Not just recommendations—we work alongside your team to ensure successful implementation.",
	},
];

export const TRAINING_PROGRAMS = [
	{
		title: "Professional Kitchen Management",
		date: "March 15-17, 2025",
		duration: "3-Day Intensive",
		level: "Intermediate to Advanced",
		spots: "8 spots remaining",
		price: "UGX 1,500,000",
	},
	{
		title: "Mongolian Cuisine Masterclass",
		date: "April 5-6, 2025",
		duration: "Weekend Workshop",
		level: "All Levels Welcome",
		spots: "12 spots remaining",
		price: "UGX 800,000",
	},
	{
		title: "Menu Engineering Bootcamp",
		date: "April 20-21, 2025",
		duration: "2-Day Workshop",
		level: "Restaurant Owners & Managers",
		spots: "Limited to 10 participants",
		price: "UGX 1,200,000",
	},
];

export const TESTIMONIALS = [
	{
		quote:
			"Chef Fred transformed our hotel's F&B department completely. Revenue is up 50% and our guest satisfaction scores have never been higher.",
		name: "David Mukasa",
		title: "F&B Director, Kampala Luxury Hotel",
		photo: "https://picsum.photos/seed/person1/100/100",
	},
	{
		quote:
			"The training program was exceptional. My team's skills improved dramatically, and our kitchen efficiency increased by 40%.",
		name: "Sarah Nalongo",
		title: "Restaurant Owner, Wandegeya",
		photo: "https://picsum.photos/seed/person2/100/100",
	},
	{
		quote:
			"His menu engineering expertise saved our restaurant. We went from losing money to profitable in just 3 months.",
		name: "James Okello",
		title: "Restaurant Manager",
		photo: "https://picsum.photos/seed/person3/100/100",
	},
];

export const CONTACT_INFO = [
	{
		icon: Icons.MapPinIcon,
		label: "Location",
		info: "Kampala, Uganda",
		note: "Serving all of Uganda",
	},
	{
		icon: Icons.PhoneIcon,
		label: "Call Us",
		info: '<a href="tel:+256773945719" class="hover:underline">+256 773 945 719</a><br/><a href="tel:+256759269109" class="hover:underline">+256 759 269 109</a>',
		note: "Mon-Sat: 8am-8pm EAT",
	},
	{
		icon: Icons.MailIcon,
		label: "Email",
		info: '<a href="mailto:fredwandela100@gmail.com" class="hover:underline">fredwandela100@gmail.com</a>',
		note: "Response within 24 hours",
	},
];
