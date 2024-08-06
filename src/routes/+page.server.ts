import { getMovies } from '$lib';

export async function load() {
	const movies = await getMovies();
	return {
		movies
	};
}
