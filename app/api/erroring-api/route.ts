export async function GET(): Promise<Response> {
	return new Response(
		JSON.stringify({
			message: `This API route should return an error.`,
		}),
		{ status: 500 }
	);
}
