import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Reveal } from "../components/reveal";

const experience = [
	{
		company: "Boroo Gold Ltd (Peru)",
		href: "https://www.linkedin.com/company/boroo-pte-ltd/",
		role: "Intern Data Scientist / ML Developer",
		period: "August 2025 - Feb 2026",
		points: [
			"Developed machine learning models for gold recovery optimization in a mining processing plant.",
			"Built a blending ML model using polygon-level geological and chemical data to predict recovery rates and support optimal blending strategies.",
			"Designed a real-time recovery prediction model combining feed composition and plant operational data, including cyanide levels and tank conditions.",
			"Collaborated with Oracle team members to explore advanced AI/ML applications in mining and industrial systems.",
		],
	},
	{
		company: "Edify",
		href: "https://www.edify.study/home",
		role: "Front End Developer",
		period: "August 2024 - March 2025",
		points: [
			"Led development of the platform's mobile version with React.js and Tailwind CSS.",
			"Designed an Instagram Reel and YouTube Shorts-style scrolling feature for video key point cards.",
			"Reengineered video lecture interactions to improve usability for educational content.",
		],
	},
	{
		company: "OpenOnion",
		href: "https://openonion.ai/",
		role: "Front End Developer",
		period: "December 2023 - May 2024",
		points: [
			"Implemented responsive landing pages for desktop and mobile using Next.js, TypeScript, and Tailwind CSS.",
			"Built an authentication flow that lets users authenticate while chatting with a chatbot.",
			"Restructured files and folders around reusable functions, reduced duplication, and consistent formatting.",
		],
	},
	{
		company: "Pinecone Academy",
		href: "https://www.pinecone.academy/",
		role: "Intern Full Stack Developer",
		period: "June 2022 - October 2022",
		points: [
			"Improved Nest Academy landing page performance by hosting on Vercel instead of Firebase, achieving 50% faster page load speed.",
			"Taught HTML, CSS, and JavaScript fundamentals to entry-level students with a 95% satisfaction rating.",
			"Modelled backend infrastructure for a medical-track app using Node.js, GraphQL, and MongoDB.",
			"Built product recommendation features for handy.mn's mobile app using React and MUI.",
		],
	},
	{
		company: "Erxes Inc",
		href: "https://erxes.io/",
		role: "Intern Front End Developer",
		period: "June 2021 - September 2021",
		points: [
			"Created internal get-started documentation for new employees, including local environment setup and common library linking.",
			"Developed user-facing React pages for internal Erxes projects.",
			"Implemented reusable React components including accordion and dashboard patterns for a future frontend library.",
		],
	},
];

const highlights = [
	{
		title: "Gold recovery optimization",
		value: "Mining ML",
		description:
			"Predictive models using geological, chemical, feed, and plant operational data.",
	},
	{
		title: "UNSW Computer Science",
		value: "AI Major",
		description:
			"Computer Science graduate with a Finance minor and quantitative trading exposure.",
	},
	{
		title: "Frontend product delivery",
		value: "React / Next.js",
		description:
			"Responsive product interfaces, chatbot authentication, video UX, and mobile-first education platforms.",
	},
];

const education = [
	["Degree", "Bachelor of Computer Science"],
	["University", "University of New South Wales (UNSW)"],
	["Focus", "AI Major & Finance Minor"],
	["Period", "Sep 2023 - June 2026"],
	["Computer Science", "85 - Higher Distinction"],
	["Mathematics", "79 - Distinction"],
];

const skills = [
	"Python",
	"Machine Learning",
	"Predictive Modelling",
	"Data Analysis",
	"Artificial Intelligence",
	"Data Processing",
	"Data Interpretation",
	"SQL",
	"React",
	"Next.js",
	"TypeScript",
	"JavaScript",
	"Node.js",
	"Tailwind CSS",
	"MongoDB",
	"GraphQL",
	"Firebase",
	"AWS Serverless",
	"Agile SCRUM",
	"MECE",
	"Teaching",
	"GitHub",
];

const extracurricular = [
	{
		name: "DevSoc Blueprint Hackathon / UNSW",
		href: "https://devsoc2024.devpost.com/",
		role: "Team Member",
		period: "October 2024",
		description:
			"Built the complete frontend for Academate, a study partner finder using Next.js, Tailwind CSS, and Shadcn UI with a swipe-based matching experience.",
	},
	{
		name: "Digital Maker Competition / UNSW",
		href: "https://unswfounders.com/digital-makers-competition",
		role: "Team Leader",
		period: "Feb 2024 - March 2024",
		description:
			"Led a team through six rounds, presented a product demonstration, and won a $1,100 cash prize.",
	},
	{
		name: "Openmesh Hackathon",
		href: "https://www.openmesh.network/",
		role: "Guest Speaker",
		period: "December 2023",
		description:
			"Presented SCRUM, Agile methodologies, MECE thinking, and digital transformation concepts at Tank Stream Labs.",
	},
];

export default function AboutPage() {
	return (
		<div className="relative min-h-screen pb-16">
			<Navigation />
			<main className="px-6 pt-24 mx-auto space-y-14 max-w-6xl lg:px-8 lg:pt-32">
				<Reveal
					as="section"
					className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start"
				>
					<div>
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
							About
						</p>
						<h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-5xl">
							Machine learning, data analytics, and software engineering for
							real-world operations.
						</h1>
						<p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
							I am Bilguun Tsolmonbaatar, a Computer Science graduate from UNSW
							with an AI major and Finance minor. My recent work focuses on
							machine learning models and data-driven tools for mining
							operations, including gold recovery optimization using geological,
							chemical, feed, and plant operational data.
						</p>
						<p className="mt-4 max-w-3xl leading-8 text-zinc-400">
							I also have production experience building React, Next.js,
							TypeScript, Tailwind CSS, MongoDB, GraphQL, and Firebase products
							across education, AI, and internal tooling environments.
						</p>
					</div>
					<aside className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-6">
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
							Profile
						</p>
						<dl className="mt-6 space-y-5">
							{[
								["Role", "Data Scientist / ML Developer"],
								["Recent", "Boroo Gold Ltd (Peru)"],
								["Education", "UNSW Computer Science"],
								["Location", "Ulaanbaatar, Mongolia"],
							].map(([label, value]) => (
								<div key={label}>
									<dt className="text-sm text-zinc-500">{label}</dt>
									<dd className="mt-1 text-base font-medium text-zinc-100">
										{value}
									</dd>
								</div>
							))}
						</dl>
						<Link
							href="/contact"
							className="mt-8 inline-flex rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 duration-200 hover:border-zinc-300 hover:text-white"
						>
							Contact
						</Link>
					</aside>
				</Reveal>

				<Reveal as="section" className="grid gap-4 md:grid-cols-3" delay={0.05}>
					{highlights.map((item) => (
						<div
							key={item.title}
							className="rounded-lg border border-zinc-800 bg-zinc-950/30 p-5"
						>
							<p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
								{item.value}
							</p>
							<h2 className="mt-3 text-xl font-bold text-zinc-100 font-display">
								{item.title}
							</h2>
							<p className="mt-4 text-sm leading-7 text-zinc-400">
								{item.description}
							</p>
						</div>
					))}
				</Reveal>

				<div className="w-full h-px bg-zinc-800" />

				<Reveal
					as="section"
					className="grid gap-10 lg:grid-cols-[20rem_1fr]"
					delay={0.08}
				>
					<aside className="lg:sticky lg:top-28 lg:self-start">
						<h2 className="text-2xl font-bold text-zinc-100 font-display">
							Education & skills
						</h2>
						<dl className="mt-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-950/30 p-5">
							{education.map(([label, value]) => (
								<div key={label}>
									<dt className="text-sm text-zinc-500">{label}</dt>
									<dd className="mt-1 text-sm font-medium text-zinc-200">
										{value}
									</dd>
								</div>
							))}
						</dl>
						<div className="mt-6 flex flex-wrap gap-2">
							{skills.map((skill) => (
								<span
									key={skill}
									className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 text-xs text-zinc-300"
								>
									{skill}
								</span>
							))}
						</div>
					</aside>

					<section>
						<h2 className="text-2xl font-bold text-zinc-100 font-display">
							Experience
						</h2>
						<div className="mt-6 space-y-5">
							{experience.map((item) => (
								<article
									key={`${item.company}-${item.role}`}
									className="rounded-lg border border-zinc-800 bg-zinc-950/20 p-5 md:p-6"
								>
									<div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
										<div>
											<p className="text-sm font-medium text-zinc-500">
												{item.role}
											</p>
											<h3 className="mt-2 text-2xl font-bold text-zinc-100 font-display">
												<Link href={item.href} target="_blank">
													{item.company}
												</Link>
											</h3>
										</div>
										<p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 md:text-right">
											{item.period}
										</p>
									</div>
									<ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-400 md:grid-cols-2">
										{item.points.map((point) => (
											<li key={point} className="flex gap-3">
												<span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
												<span>{point}</span>
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</section>
				</Reveal>

				<Reveal as="section" delay={0.08}>
					<h2 className="text-2xl font-bold text-zinc-100 font-display">
						Extracurricular
					</h2>
					<div className="mt-6 grid gap-6 md:grid-cols-3">
						{extracurricular.map((item) => (
							<article
								key={item.name}
								className="rounded-lg border border-zinc-800 bg-zinc-950/20 p-5"
							>
								<p className="text-sm font-medium text-zinc-500">{item.role}</p>
								<h3 className="mt-2 text-xl font-bold text-zinc-100 font-display">
									<Link href={item.href} target="_blank">
										{item.name}
									</Link>
								</h3>
								<p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
									{item.period}
								</p>
								<p className="mt-5 text-sm leading-7 text-zinc-400">
									{item.description}
								</p>
							</article>
						))}
					</div>
				</Reveal>
			</main>
		</div>
	);
}
