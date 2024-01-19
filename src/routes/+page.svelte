<script lang="ts">
	import { register } from 'swiper/element/bundle';

	const nfts = new Array(14).fill('/img/nft-sample.webp');

	let sectionWidth = 0;
	let containerWidth = 0;

	register();
</script>

<div bind:clientWidth={containerWidth} class="container"></div>

<div bind:clientWidth={sectionWidth} class="w-screen overflow-hidden pt-52 pb-2">
	<swiper-container
		slides-per-view="auto"
		space-between={36}
		slides-offset-before={(sectionWidth - containerWidth) / 2}
		class="w-full"
	>
		{#each nfts as nft}
			<swiper-slide class="w-[260px]">
				<img src={nft} />
			</swiper-slide>
		{/each}
	</swiper-container>
	<button
		type="button"
		class="mt-16 py-4 px-6 max-w-64 mx-auto w-full bg-yellow shadow-btn border-[3px] border-dark font-bold text-dark uppercase leading-[100%] rounded-lg block text-[28px]"
		>Mint</button
	>
</div>
