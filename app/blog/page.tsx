import { SuspenseExample } from "@/components/SuspenseExample";
import { TSQFetchingExample } from "@/components/TSQFetchingExample";
import { Suspense } from "react";

export default function Blog() {
	return (
		<main className="p-12 min-h-svh h-auto flex gap-8">
			<div className="">
				<button
					// anchor-name is not yet supported by tailwind v4
					className="border-solid border-2 cursor-pointer p-2 rounded-lg [anchor-name:--popover-button]"
					// popoverTarget must match the id of the popped element
					popoverTarget="popover-test"
				>
					Click to pop a div
				</button>
				<div
					// popover property must be set in React for now even though it should work without later
					popover="auto"
					id="popover-test"
					// inset must be auto and the display property must be set only when the popover is open using the "open:" prefix
					// anchors only work on positionned elements (absolute/fixed)
					// position-anchor and the anchor() function are not yet supported by tailwind v4
					className="bg-inherit inset-auto text-inherit border-solid border-2 p-2 rounded-2xl open:flex [position-anchor:--popover-button] absolute top-[anchor(bottom)] right-[anchor(right)] mt-4 flex-col gap-2 resize"
				>
					<p>This is a new div</p>
					<button
						className="cursor-pointer"
						popoverTarget="popover-test"
						popoverTargetAction="hide"
					>
						Click to fold
					</button>
				</div>
			</div>
			<TSQFetchingExample />

			{/* SuspenseExample uses TanStack's useSuspenseQuery to let React.Suspense handle loading state and React Error Boundaries handle error states
			React.Suspense must be a parent of the component suspending
			Might try with a Higher Order Component
			*/}
			<Suspense fallback={<div>Loading...</div>}>
				<SuspenseExample />
			</Suspense>
		</main>
	);
}
