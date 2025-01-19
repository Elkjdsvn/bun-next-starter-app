"use client";
import { Suspense } from "react";
import { SuspendingComponent } from "./SuspendingComponent";

export function SuspenseExample() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SuspendingComponent />
		</Suspense>
	);
}
