"use client";

import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
} from "framer-motion";
import Link from "next/link";
import { AnchorHTMLAttributes, MouseEvent, PropsWithChildren } from "react";

type MagneticLinkProps = PropsWithChildren<
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
		className?: string;
	}
>;

export function MagneticLink({
	children,
	className = "",
	href,
	...props
}: MagneticLinkProps) {
	const prefersReducedMotion = useReducedMotion();
	const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
	const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

	function onMouseMove(event: MouseEvent<HTMLAnchorElement>) {
		if (prefersReducedMotion) return;
		const rect = event.currentTarget.getBoundingClientRect();
		x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
		y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
	}

	function reset() {
		x.set(0);
		y.set(0);
	}

	return (
		<motion.span
			style={{ x, y }}
			className="inline-flex"
			whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
			whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
		>
			<Link
				href={href}
				className={className}
				onMouseMove={onMouseMove}
				onMouseLeave={reset}
				{...props}
			>
				{children}
			</Link>
		</motion.span>
	);
}
