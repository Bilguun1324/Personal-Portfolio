"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
	className?: string;
	delay?: number;
	as?: "div" | "section" | "article" | "aside" | "main" | "nav";
}>;

export function Reveal({
	children,
	className = "",
	delay = 0,
	as = "div",
}: RevealProps) {
	const prefersReducedMotion = useReducedMotion();
	const Component = motion[as];

	return (
		<Component
			className={className}
			initial={
				prefersReducedMotion
					? false
					: { opacity: 0, y: 28, filter: "blur(8px)" }
			}
			whileInView={
				prefersReducedMotion
					? undefined
					: { opacity: 1, y: 0, filter: "blur(0px)" }
			}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.75,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{children}
		</Component>
	);
}
