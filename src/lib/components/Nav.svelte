<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Burger from '$lib/assets/svg/burger.svg?component';
	import { clickOutside } from '$lib/clickOutside';
	import ConnectWallet from './ConnectWallet.svelte';

	let expanded = false;

	const items = [
		{ text: 'Airdrop', href: '/airdrop', status: 'hot' },
		{ text: 'Mint', href: '/', status: 'new' },
		{ text: 'Refuel', href: '', status: 'soon' },
		{ text: 'Bridge', href: '', status: 'soon' }
	];

	afterNavigate(() => (expanded = false));
</script>

<div
	use:clickOutside={() => (expanded = false)}
	class="container py-3.5 flex items-center justify-between relative z-40"
>
	<!-- <div class="w-[163px] h-[62px] bg-yellow relative z-10"></div> -->
	<a href="/" class="relative z-10">
		<img src="/img/logo.webp" alt="" class="lg:h-[70px] h-12" />
	</a>
	<div class="flex items-center justify-center space-x-16 max-lg:hidden">
		{#each items as { text, href, status }}
			<svelte:element
				this={href ? 'a' : 'div'}
				{href}
				class="uppercase font-black relative text-white"
				class:cursor-not-allowed={!href}
			>
				{text}
				<span
					class="uppercase font-bold text-[9px] absolute left-full bottom-full translate-y-1/2"
					class:text-red={status === 'hot'}
					class:text-green={status === 'new'}
					class:text-blue={status === 'soon'}>{status}</span
				>
			</svelte:element>
		{/each}
	</div>
	<ConnectWallet />
	<button on:click={() => (expanded = !expanded)} class="lg:hidden relative z-10">
		<Burger class="w-8 aspect-square text-white" />
	</button>

	<div
		class="lg:hidden bg-[#080026] pt-28 absolute top-0 left-0 w-full pb-8 px-4 transition-all ease-linear duration-200"
		class:opacity-0={!expanded}
		class:pointer-events-none={!expanded}
	>
		<div class="flex items-center justify-start flex-col gap-4">
			{#each items as { text, href, status }}
				<svelte:element
					this={href ? 'a' : 'div'}
					{href}
					class="uppercase font-black relative text-white"
					class:cursor-not-allowed={!href}
				>
					{text}
					<span
						class="uppercase font-bold text-[9px] absolute left-full bottom-full translate-y-1/2"
						class:text-red={status === 'hot'}
						class:text-green={status === 'new'}
						class:text-blue={status === 'soon'}>{status}</span
					>
				</svelte:element>
			{/each}
			<ConnectWallet />
		</div>
	</div>
</div>
