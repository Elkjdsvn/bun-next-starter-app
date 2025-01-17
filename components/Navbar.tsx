"use client";
import { Route } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar({ routes }: { routes: Route[] }) {
	const currentPathname = usePathname();
	return (
		<nav className="w-full h-12 flex gap-4 p-4 fixed">
			{routes.map((route) =>
				currentPathname === route.href ? (
					<Link
						href={route.href}
						key={route.name}
						className="data-active:font-bold data-active:text-blue-400"
						data-active
					>
						{route.name}
					</Link>
				) : (
					<Link
						href={route.href}
						key={route.name}
						className="data-active:font-bold data-active:text-blue-400"
					>
						{route.name}
					</Link>
				)
			)}
		</nav>
	);
}
