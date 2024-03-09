<script lang="ts">
	import type { EthersStoreUtilState } from '@web3modal/scaffold-utils/ethers';

	import { modal } from '$lib/web3options';

	let walletConnected = false;
	let walletAddress = '';

	function handleChange({ isConnected }: EthersStoreUtilState) {
		if (isConnected) {
			walletConnected = true;
			walletAddress = modal.getAddress() || '';
		}
	}

	modal.subscribeProvider(handleChange);
</script>

<span class={$$restProps.class || ''}>
	{#if walletConnected}
		<span class="text-yellow"
			>{walletAddress.slice(0, 5)}...{walletAddress.slice(
				walletAddress.length - 3,
				walletAddress.length
			)}</span
		>
	{/if}

	{#if !walletConnected}
		<button
			on:click={() => modal.open()}
			type="button"
			class="uppercase border-2 border-yellow text-yellow py-3 px-6 text-sm font-bold rounded-lg bg-dark w-50 hover:-translate-y-2 transition-all ease-linear duration-300 w-full"
			>Connect Wallet
		</button>
	{/if}
</span>
