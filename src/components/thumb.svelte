<script lang="ts">
	import { Star } from 'lucide-svelte';

	export let adult: boolean;
	// export let backdrop_path: string;
	// export let genre_ids: number[];
	export let id: number;
	// export let original_language: string;
	// export let original_title: string;
	// export let overview: string;
	// export let popularity: number;
	export let poster_path: string;
	export let release_date: string;
	export let title: string;
	// export let video: boolean;
	export let vote_average: number;
	// export let vote_count: number;
</script>

<a
	href={`/movie/${id}`}
	class="flex flex-col items-center p-3 rounded-lg shadow-lg w-full gap-3 h-full bg-neutral-900 relative hover:shadow-xl hover:shadow-amber-400/10 hover:scale-[1.02] transition-all duration-200"
>
	<img
		src={'https://media.themoviedb.org/t/p/w220_and_h330_face/' + poster_path}
		alt={title}
		class="w-full rounded-lg"
	/>
	<div class="flex flex-col justify-between items-start w-full h-full">
		{#if adult}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 18.75a6 6 0 015.25 0m-7.25 0a6 6 0 015.25 0m-7.25 0a6 6 0 015.25 0m-7.25 0a6 6 0 015.25 0M5.25 5.5a6 6 0 015.25 0m-2.25 0a6 6 0 015.25 0m-2.25 0a6 6 0 015.25 0m-2.25 0a6 6 0 015.25 0m-2.25 0a6 6 0 015.25 0"
				/>
			</svg>
		{/if}
		<div class="flex flex-col">
			<h4 class="text-xl font-bold">
				{title.length > 30 ? title.slice(0, 30) + '...' : title}
			</h4>
		</div>
		<div class="text-amber-400">
			<p class="text-gray-500">{release_date}</p>
			<div class="flex items-center justify-start text-center gap-1">
				<Star class="w-6 h-6" />
				<span class="-mb-0.5">{vote_average.toFixed(1)}</span>
			</div>
		</div>
	</div>
</a>
