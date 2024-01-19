<script lang="ts">
	import '$lib/css/fonts.css';
	import '$lib/css/app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="z-0 background fixed h-screen w-screen top-0 left-0"></div>

<div class="relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
	<Nav />
	<div>
		<slot />
	</div>
	<Footer />
</div>

<style lang="postcss">
	.background {
		background: url('/img/bg.webp');
		background-repeat: repeat-x;
		background-position: center;
		background-size: auto 100%;
		mask-image: radial-gradient(
			49.3% 50.26% at 50% 50%,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.08) 67%,
			#fff 100%
		);
	}
</style>
