import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Route } from "@/utils/types";
import { Navbar } from "@/components/Navbar";
import Providers from "./providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Bun/Next",
	description: "Bun and Next, pushing the limit.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const navbarRoutes: Route[] = [
		{ name: "Home", href: "/" },
		{ name: "Blog", href: "/blog" },
	] as const;

	return (
		<html lang="en">
			<Providers>
				<body
					className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
				>
					<Navbar routes={navbarRoutes} />
					{children}
				</body>
			</Providers>
		</html>
	);
}
