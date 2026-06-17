"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
	useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientCursor() {
	const prefersReducedMotion = useReducedMotion();
	const [mounted, setMounted] = useState(false);
	const x = useSpring(useMotionValue(-400), { stiffness: 90, damping: 26 });
	const y = useSpring(useMotionValue(-400), { stiffness: 90, damping: 26 });
	const background = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(255,255,255,0.075), transparent 45%)`;

	useEffect(() => {
		setMounted(true);
		if (prefersReducedMotion) return;

		function onPointerMove(event: PointerEvent) {
			x.set(event.clientX);
			y.set(event.clientY);
		}

		window.addEventListener("pointermove", onPointerMove);
		return () => window.removeEventListener("pointermove", onPointerMove);
	}, [prefersReducedMotion, x, y]);

	if (!mounted || prefersReducedMotion) return null;

	return (
		<motion.div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-[60] opacity-80 mix-blend-screen"
			style={{ background }}
		/>
	);
}
