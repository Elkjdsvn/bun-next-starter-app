import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
	const delay = request.nextUrl.searchParams.get("delay") || 2000;
	await new Promise((resolve) => setTimeout(resolve, Number(delay)));
	return new Response(
		JSON.stringify({
			message: `This is a mock API that waited ${delay}ms before responding.`,
		}),
		{ status: 200 }
	);
}
