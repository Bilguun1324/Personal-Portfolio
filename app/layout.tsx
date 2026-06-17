import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Bilguun Tsolmonbaatar",
		template: "%s | bilguun.com",
	},
	description:
		"Bilguun Tsolmonbaatar is a UNSW Computer Science graduate focused on machine learning, data analytics, and software engineering.",
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body className="bg-black">{children}</body>
		</html>
	);
}
