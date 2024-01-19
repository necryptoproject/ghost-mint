<script lang="ts">
	const items = [
		{ text: 'Airdrop', href: '/airdrop', status: 'hot' },
		{ text: 'Mint', href: '/', status: 'new' },
		{ text: 'Refuel', href: '', status: 'soon' },
		{ text: 'Bridge', href: '', status: 'soon' }
	];
</script>

<div class="container py-3.5 flex items-center justify-between">
	<div class="w-[163px] h-[62px] bg-yellow"></div>
	<div class="flex items-center justify-center space-x-16">
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
	<button
		type="button"
		class="uppercase border-2 border-yellow text-yellow py-3 px-6 text-sm font-bold rounded-lg bg-dark"
		>connect wallet</button
	>
</div>
