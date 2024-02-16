<script>
	import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';
	// import { setContext, getContext } from '$lib/svelte';

	import { modal } from '../web3options';
	let walletConnected = false;
	let walletAddress = '';

	function handleChange({ provider, providerType, address, error, chainId, isConnected }) {
		if (isConnected) {
			walletConnected = true;
			walletAddress = modal.getAddress();
		}
	}

	modal.subscribeProvider(handleChange);
</script>

{#if walletConnected}
	<span style="color:yellow"
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
		class="uppercase border-2 border-yellow text-yellow py-3 px-6 text-sm font-bold rounded-lg bg-dark mx-auto mt-6 w-50 hover:-mt-2 transition-all ease-linear duration-300"
		>Connect Wallet
	</button>
{/if}
