<script lang="ts">
	import Thumb from '../components/thumb.svelte';

	export let data;
</script>

<h1 class="text-5xl font-bold mb-10 mt-5">Welcome to SvelteKit Movies</h1>
<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 items-start justify-start"
>
	{#each data.movies.results as movie}
		<Thumb {...movie} />
	{/each}
</div>
