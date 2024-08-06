<script lang="ts">
	// https://media.themoviedb.org/t/p/w220_and_h330_face/
	export let data;
	$: console.log(data.movie);

	function formatDuration(duration: number) {
		const hours = Math.floor(duration / 60);
		const minutes = Math.floor(duration % 60);

		// return like 2h 30m 45s
		return `${hours}h ${minutes}m`;
	}

	function formatMoney(amount: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}
</script>

<section class="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm py-12 lg:py-24">
	<div class="flex items-start justify-start w-full max-w-[120rem] mx-auto gap-10">
		<img
			src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.movie.poster_path}`}
			alt={data.movie.title}
			class="rounded-lg max-h-[40rem]"
		/>
		<div class="w-full flex flex-col items-start justify-start gap-5">
			<a href={data.movie.homepage} class="text-4xl font-bold">
				{data.movie.title}
				<span class="text-neutral-300 font-normal"
					>({new Date(data.movie.release_date).getFullYear()})</span
				>
			</a>
			<div class="flex gap-2 items-center justify-center">
				<p class="flex gap-2">
					{new Date(data.movie.release_date).toLocaleDateString('en-PL', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>

				<p
					class="flex gap-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-neutral-300 before:self-center before:mb-0.5"
				>
					{#each data.movie.genres as genre}
						<span>{genre.name}</span>
					{/each}
				</p>
				<p
					class="flex gap-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-neutral-300 before:self-center before:mb-0.5"
				>
					{formatDuration(data.movie.runtime)}
				</p>
			</div>
			{#if data.movie.tagline}
				<em class="text-neutral-300 font-normal">{data.movie.tagline}</em>
			{/if}
			<div class="flex items-center gap-5">
				{#if data.movie.budget}<div class="flex flex-col items-start justify-start gap-2">
						<h3 class="text-xl font-semibold">Budget</h3>
						<p class="text-lg">{formatMoney(data.movie.budget)}</p>
					</div>
				{/if}

				{#if data.movie.revenue}
					<div class="flex flex-col items-start justify-start gap-2">
						<h3 class="text-xl font-semibold">Revenue</h3>
						<p class="text-lg">{formatMoney(data.movie.revenue)}</p>
					</div>
				{/if}
			</div>
			<div class="flex flex-col items-start justify-start gap-2">
				<h3 class="text-2xl font-semibold">Overview</h3>
				<p class="text-lg font-medium">{data.movie.overview}</p>
			</div>
			{#if data.movie.production_companies.length > 0}
				<div class="flex flex-col items-start justify-start gap-3">
					<h3 class="text-xl font-semibold">Production Companies</h3>
					<div class="w-full flex gap-3">
						{#each data.movie.production_companies as company}
							{#if company.logo_path}
								<div
									class="flex flex-col items-center justify-center gap-1 bg-neutral-600 p-2 rounded-lg bg-opacity-20 backdrop-blur-xl"
								>
									<img
										src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
										alt={company.name}
										class="h-10 bg-neutral-800 rounded-lg p-1"
									/>
									<p class="font-medium">{company.name}</p>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
<img
	src={`	https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.movie.backdrop_path}`}
	alt={data.movie.title}
	class="absolute inset-0 z-0 w-full h-full object-cover"
/>
