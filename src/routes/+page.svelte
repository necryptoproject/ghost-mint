<script lang="ts">
	import Mint from '$lib/components/Mint.svelte';
	import Claim from '$lib/components/Claim.svelte';
	const nfts = new Array(14).fill('/img/nft-sample.webp');

	let sectionWidth = 0;
	let containerWidth = 0;
</script>

<div bind:clientWidth={containerWidth} class="container"></div>

<div bind:clientWidth={sectionWidth} class="w-screen pb-2">
	<div class="container max-lg:pt-24 relative -mt-[98px] pb-20">
		<img
			src="/img/eyes.gif"
			alt=""
			class="absolute lg:top-20 top-28 lg:left-1/3 left-4 -rotate-12 lg:w-[90px] w-16"
		/>
		<img
			src="/img/eyes.gif"
			alt=""
			class="absolute top-36 lg:right-1/4 right-6 rotate-12 -scale-x-100 lg:w-[70px] w-12"
		/>
		<img
			src="/img/orange.webp"
			alt=""
			class="absolute left-12 top-48 w-9 aspect-square -rotate-45 max-lg:hidden"
		/>
		<img
			src="/img/orange.webp"
			alt=""
			class="w-16 aspect-square top-1/2 lg:left-full max-lg:right-4 absolute"
		/>
		<img
			src="/img/strawberry.webp"
			alt=""
			class="absolute bottom-12 left-0 w-12 aspect-square rotate-[65deg]"
		/>
		<img
			src="/img/pacman_lg.gif"
			alt=""
			class="lg:h-[600px] h-[150px] max-lg:max-w-[800px] lg:object-contain lg:object-bottom max-lg:mt-24 max-lg:mb-28 mx-auto object-cover object-left max-lg:-mx-4 max-lg:w-[calc(100%+2rem)] relative"
		/>
		<div class="flex items-center justify-center max-lg:flex-col gap-6 relative z-10 mt-8">
			<img
				src="/img/cherry.webp"
				alt=""
				class="absolute top-full w-20 aspect-square left-1/2 -translate-x-96"
			/>
			<img
				src="/img/strawberry.webp"
				alt=""
				class="absolute lg:top-full top-[calc(100%+2rem)] right-12 w-12 aspect-square"
			/>
			<Mint />
			<Claim />
		</div>
	</div>
</div>
