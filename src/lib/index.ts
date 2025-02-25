// place files you want to import through the `$lib` alias in this folder.
import { SECRET_MOVIEDB_API_KEY } from '$env/static/private';

export type MovieResult = {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
};

export interface Result {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export const getMovies = async () => {
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${SECRET_MOVIEDB_API_KEY}`,
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const data = await res.json();
	return data as MovieResult;
};

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path?: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export const getMovie = async (id: number) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${SECRET_MOVIEDB_API_KEY}`,
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const data = await res.json();
	return data as Movie;
};
