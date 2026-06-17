"use client";
import { Github, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Reveal } from "../components/reveal";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/bilguun-tsolmonbaatar/",
		label: "LinkedIn",
		handle: "bilguun-tsolmonbaatar",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:bilguun.tsolmonbaatar.cs@gmail.com",
		label: "Email",
		handle: "bilguun.tsolmonbaatar.cs@gmail.com",
	},
	{
		icon: <Phone size={20} />,
		href: "tel:+97699995120",
		label: "Phone",
		handle: "+976 99995120",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Bilguun1324",
		label: "Github",
		handle: "@Bilguun1324",
	},
	{
		icon: <MapPin size={20} />,
		href: "https://www.google.com/maps/place/Ulaanbaatar,+Mongolia",
		label: "Location",
		handle: "Ulaanbaatar, Mongolia",
	},
];

export default function Example() {
	return (
		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<main className="container px-6 py-28 mx-auto lg:py-36">
				<Reveal className="max-w-3xl">
					<h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
						Contact
					</h1>
					<p className="mt-4 text-lg leading-8 text-zinc-400">
						Reach me for machine learning, data analytics, software engineering,
						or product work.
					</p>
				</Reveal>

				<Reveal
					className="grid w-full grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3"
					delay={0.08}
				>
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target={s.href.startsWith("http") ? "_blank" : undefined}
								className="relative flex h-full min-h-[12rem] flex-col justify-between gap-6 p-6 duration-700 group md:p-8"
							>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-300 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-600 bg-zinc-950/70 group-hover:border-zinc-200">
									{s.icon}
								</span>
								<div className="z-10">
									<span className="text-sm text-zinc-500">{s.label}</span>
									<span
										className={`mt-2 block max-w-full break-words font-medium leading-snug duration-150 text-zinc-200 group-hover:text-white ${
											s.label === "Email"
												? "text-base sm:text-lg"
												: "text-2xl font-display"
										}`}
									>
										{s.handle}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</Reveal>
			</main>
		</div>
	);
}
