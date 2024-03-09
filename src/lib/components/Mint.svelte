<script lang="ts">
	import { BrowserProvider, Contract } from 'ethers';
	import { modal, USDTAbi, contractAddresses } from '../web3options';
	import { notify } from '$lib/notify';
	let balance = 0;
	let address = '';
	let USDTContract = null;

	async function mint() {
		try {
			const isConnected = modal.getIsConnected();
			if (!isConnected) await modal.open();

			const walletProvider = modal.getWalletProvider();
			if (!walletProvider) throw Error('Wallet problem');

			const ethersProvider = new BrowserProvider(walletProvider);
			const signer = await ethersProvider.getSigner();
			address = modal.getAddress() as string;

			const contractAddress =
				contractAddresses[modal.getChainId() as keyof typeof contractAddresses];

			USDTContract = new Contract(contractAddress, USDTAbi, signer);
			const mintFee = await USDTContract.mintFee().catch(console.error);

			const options = { value: mintFee };

			await USDTContract.mint(options);

			balance = await USDTContract.balanceOf(address);
		} catch (err) {
			console.error('Wallet:', err);
			notify({
				duration: 5 * 1000,
				text:
					/* @ts-ignore */
					err?.info?.error?.data?.message ||
					/* @ts-ignore */
					err?.info?.error?.message ||
					/* @ts-ignore */
					err?.shortMessage ||
					'Something went wrong'
			});
		}
	}
</script>

<!-- <span style="color: yellow;">Balance: {balance} NFT</span> -->

<button
	on:click={mint}
	type="button"
	class="lg:py-4 py-3 lg:px-6 max-w-64 w-full bg-yellow shadow-btn border-[3px] border-dark font-bold text-dark uppercase leading-[100%] rounded-lg block lg:text-[28px] text-lg hover:-translate-y-2 transition-all ease-linear duration-300"
	>Mint</button
>
