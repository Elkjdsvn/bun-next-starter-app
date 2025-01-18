"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function TSQFetchingExample() {
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ["delayed-api"],
		queryFn: async () => {
			const response = await fetch(
				"/api/delayed-api" + (apiDelayTime ? `?delay=${apiDelayTime}` : "")
			);
			const data = await response.json();
			return data;
		},
	});
	const [apiDelayTime, setApiDelayTime] = useState<number | undefined>(2000);

	if (isLoading) return <div>Loading...</div>;

	// error leaks the error message to the client, potentially exposing sensitive information about the server's internals
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col gap-4 items-center border-2 h-fit p-2 rounded-xl">
			<input
				type="number"
				value={
					apiDelayTime === undefined || isNaN(apiDelayTime) ? "" : apiDelayTime
				}
				onChange={(e) => setApiDelayTime(e.target.valueAsNumber)}
				placeholder="API delay time in ms"
				className="border border-solid border-transparent rounded px-2 py-1"
			/>
			<button
				onClick={async () => await refetch()}
				className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] dark:hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
			>
				Retrieve API data using TanStackQuery
			</button>
			<div>{data ? data.message : "No data yet"}</div>
		</div>
	);
}
