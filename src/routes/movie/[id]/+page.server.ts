import { getMovie } from '$lib';

export async function load({ params }) {
	const data = await getMovie(Number(params.id));
	return {
		movie: data
	};
}
