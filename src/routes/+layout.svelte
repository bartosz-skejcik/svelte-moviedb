<script>
	import '../app.css';
</script>

<main class="container mx-auto max-w-[100rem]">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-neutral-950 text-neutral-100;
	}
</style>
