<script lang="ts">
	import { BrowserProvider, Contract } from 'ethers';
	import { modal, USDTAbi, contractAddresses } from '../web3options';
	let address = '';
	let USDTContract = null;

	async function claim() {
		const isConnected = modal.getIsConnected();
		if (!isConnected) await modal.open();

		const walletProvider = modal.getWalletProvider();
		if (!walletProvider) throw Error('Wallet problem');

		const ethersProvider = new BrowserProvider(walletProvider);
		const signer = await ethersProvider.getSigner();
		address = modal.getAddress() as string;

		const contractAddress = contractAddresses[modal.getChainId() as keyof typeof contractAddresses];

		USDTContract = new Contract(contractAddress, USDTAbi, signer);
		try {
			await USDTContract.claimYields();
		} catch (ex) {
			alert('Nothing to claim');
		}
	}
</script>

<!-- <span style="color: yellow;">Balance: {balance} NFT</span> -->

<button
	on:click={claim}
	type="button"
	class="lg:py-4 py-3 lg:px-6 max-w-64 w-full bg-yellow shadow-btn border-[3px] border-dark font-bold text-dark uppercase leading-[100%] rounded-lg block lg:text-[28px] text-lg hover:-translate-y-2 transition-all ease-linear duration-300"
	>Claim</button
>
