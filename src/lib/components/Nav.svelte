<script lang="ts">
	import ConnectWallet from './ConnectWallet.svelte';

	import Burger from '$lib/assets/svg/burger.svg?component';

	import { afterNavigate } from '$app/navigation';
	import { clickOutside } from '$lib/clickOutside';
	import { modal, chains, selectedNetwork, isWalletConnected } from '$lib/web3options';
	import Dropdown from './Dropdown.svelte';

	let expanded = true;

	const items = [
		{ text: 'Airdrop', href: '/airdrop', status: 'hot' },
		{ text: 'Mint', href: '/', status: 'new' },
		{ text: 'Refuel', href: '', status: 'soon' },
		{ text: 'Bridge', href: '', status: 'soon' }
	];

	const handleChainSelect = (e: CustomEvent<(typeof chains)[number]>) => {
		if (!e.detail || !e.detail.chainId) return;

		modal.switchNetwork(e.detail.chainId);
	};

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
	<div class="flex items-center justify-end gap-4">
		{#if $isWalletConnected}
			<Dropdown
				bind:selected={$selectedNetwork}
				items={chains}
				on:select={handleChainSelect}
				class="max-lg:hidden"
			>
				<svelte:fragment slot="trigger" let:item>
					{#if item}
						<span class="flex items-center justify-start">
							<img
								src={item.img}
								alt={item.shortName || ''}
								class="w-5 aspect-square object-cover rounded-full"
							/>
							<span class="ml-4">{item.name}</span>
						</span>
					{:else}
						<span>Select network</span>
					{/if}
					<span class="ml-4">▼</span>
				</svelte:fragment>
				<svelte:fragment let:item>
					<img
						src={item.img}
						alt={item.shortName || ''}
						class="w-8 aspect-square object-cover rounded-full"
					/>
					<p>{item.name}</p>
				</svelte:fragment>
			</Dropdown>
		{/if}
		<ConnectWallet class="max-lg:hidden" />
	</div>
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
			<ConnectWallet class="w-full text-center" />
			{#if $isWalletConnected}
				<Dropdown
					bind:selected={$selectedNetwork}
					items={chains}
					on:select={handleChainSelect}
					class="w-full"
				>
					<svelte:fragment slot="trigger" let:item>
						{#if item}
							<span class="flex items-center justify-start">
								<img
									src={item.img}
									alt={item.shortName || ''}
									class="w-5 aspect-square object-cover rounded-full"
								/>
								<span class="ml-4">{item.name}</span>
							</span>
						{:else}
							<span>Select network</span>
						{/if}
						<span class="ml-4">▼</span>
					</svelte:fragment>
					<svelte:fragment let:item>
						<img
							src={item.img}
							alt={item.shortName || ''}
							class="w-8 aspect-square object-cover rounded-full"
						/>
						<p>{item.name}</p>
					</svelte:fragment>
				</Dropdown>
			{/if}
		</div>
	</div>
</div>
