"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";

export function SuspenseExample() {
	const [apiDelayTime, setApiDelayTime] = useState<number | undefined>(
		undefined
	);
	const { data, refetch } = useSuspenseQuery({
		queryKey: ["suspense-delayed-api"],
		queryFn: async () => {
			const response = await fetch(
				"http://localhost:3000/api/delayed-api" +
					(apiDelayTime ? `?delay=${apiDelayTime}` : "")
			);
			return await response.json();
		},
	});

	return (
		<div className="flex flex-col gap-4 items-center border-2 h-fit p-2 rounded-xl">
			<h2>
				Loading and errors handled by{" "}
				<code className="bg-gray-600 p-1 rounded-sm">React.Suspense</code>
			</h2>
			<div className="flex gap-2 items-center">
				<input
					type="number"
					value={
						apiDelayTime === undefined || isNaN(apiDelayTime)
							? ""
							: apiDelayTime
					}
					onChange={(e) => setApiDelayTime(e.target.valueAsNumber)}
					placeholder="API delay time in ms"
					className="border border-solid border-transparent rounded px-2 py-1"
				/>
				<button
					onClick={async () =>
						await refetch({
							cancelRefetch: true,
						})
					}
					className="cursor-pointer rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] dark:hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
				>
					Retrieve
				</button>
			</div>
			<div>{data ? data.message : "No data yet"}</div>
		</div>
	);
}
