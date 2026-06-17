import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { MagneticLink } from "./components/magnetic-link";
import { Reveal } from "./components/reveal";

const navigation = [
	{ name: "About Me", href: "/about" },
	{ name: "Contact", href: "/contact" },
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/bilguun-tsolmonbaatar/",
	},
];

export default function Home() {
	return (
		<div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-6 py-12 text-center">
			<Reveal as="nav" className="mb-14 md:mb-16">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							target={item.href.startsWith("http") ? "_blank" : undefined}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</Reveal>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="kinetic-title z-10 max-w-5xl cursor-default bg-clip-text text-4xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-6xl md:text-7xl">
				Bilguun Tsolmonbaatar
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Reveal className="z-10 mt-6 max-w-3xl" delay={0.25}>
				<p className="font-display text-2xl text-zinc-100 sm:text-3xl">
					Data Scientist / ML Developer
				</p>
				<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
					Computer Science graduate from UNSW with hands-on experience in
					machine learning, data analytics, and software development. I build
					predictive models and analytics tools for operational decision-making,
					including gold recovery optimization for mining operations.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<MagneticLink
						href="/about"
						className="rounded-full border border-zinc-500 px-5 py-3 text-sm font-medium text-zinc-100 shadow-[0_0_32px_rgba(255,255,255,0.06)] duration-300 hover:border-zinc-200 hover:bg-zinc-900 hover:shadow-[0_0_42px_rgba(255,255,255,0.16)]"
					>
						View experience
					</MagneticLink>
					<MagneticLink
						href="https://www.linkedin.com/in/bilguun-tsolmonbaatar/"
						target="_blank"
						className="rounded-full px-5 py-3 text-sm font-medium text-zinc-400 duration-200 hover:text-zinc-100"
					>
						Connect on LinkedIn
					</MagneticLink>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
					{[
						["Recent", "Boroo Gold ML internship"],
						["Focus", "Predictive modelling and analytics"],
						["Location", "Ulaanbaatar, Mongolia"],
					].map(([label, value]) => (
						<div key={label} className="border-l border-zinc-700 pl-4">
							<p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
								{label}
							</p>
							<p className="mt-2 text-sm text-zinc-300">{value}</p>
						</div>
					))}
				</div>
			</Reveal>
		</div>
	);
}
