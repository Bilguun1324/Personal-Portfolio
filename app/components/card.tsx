"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
	const rotateX = useTransform(mouseY, [0, 360], [2.5, -2.5]);
	const rotateY = useTransform(mouseX, [0, 520], [-2.5, 2.5]);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top, width, height } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
		currentTarget.style.setProperty("--card-x", `${clientX - left}px`);
		currentTarget.style.setProperty("--card-y", `${clientY - top}px`);
		currentTarget.style.setProperty("--card-w", `${width}px`);
		currentTarget.style.setProperty("--card-h", `${height}px`);
	}
	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<motion.div
			onMouseMove={onMouseMove}
			whileHover={{ y: -4, scale: 1.01 }}
			transition={{ type: "spring", stiffness: 260, damping: 24 }}
			style={{ rotateX, rotateY, transformPerspective: 900 }}
			className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-300/60 border-zinc-700/80 will-change-transform"
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-60"
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
				<div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
			</div>

			{children}
		</motion.div>
	);
};
