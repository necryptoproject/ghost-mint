import type { EthersStoreUtilState } from '@web3modal/scaffold-utils/ethers';

import { browser } from '$app/environment';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';
import { writable } from 'svelte/store';
import modalChains from './chains';

const projectId = 'c3be550d6803eacd06c124ce7e10d7b1';

const metadata = {
	name: 'Ghost Mint',
	description:
		'GhostMint is a project that allows users to interact with the Blast network via the NFT mint',
	url: browser ? window.location.host : '',
	icons: browser ? [`https://${window.location.host}/favicon-32x32.png`] : []
};

export const isWalletConnected = writable(false);
const walletAddress = writable('');
export const selectedNetwork = writable<(typeof chains)[number]>(undefined);

export const modal = createWeb3Modal({
	ethersConfig: defaultConfig({ metadata }),
	chains: modalChains,
	projectId,
	enableAnalytics: true
});

modal.subscribeProvider(handleChange);
async function handleChange({ isConnected }: EthersStoreUtilState) {
	if (isConnected) {
		isWalletConnected.set(true);
		walletAddress.set(modal.getAddress() || '');

		let currentChainId = modal.getChainId();

		let selectedChain = chains.find((c) => c.chainId === currentChainId);

		selectedNetwork.set(selectedChain as (typeof chains)[number]);
	}
}

export const contractAddresses = {
	42161: '0x03f18BfE1413b2bcF94b7C4D41DDFE3e5e49822d',
	137: '0x03e9044d7e8da61815ebed0a5b265fbc9cbdfa4f',
	56: '0x03e9044d7e8da61815ebed0a5b265fbc9cbdfa4f',
	7777777: '0x03e9044D7E8da61815EbeD0a5B265Fbc9CBDfA4f',
	5000: '0x03e9044D7E8da61815EbeD0a5B265Fbc9CBDfA4f',
	8453: '0x03e9044d7e8da61815ebed0a5b265fbc9cbdfa4f',
	59144: '0x03e9044d7e8da61815ebed0a5b265fbc9cbdfa4f',
	81457: '0xc0F14A9a8d3Bc913E660c473c1932FFBDda71b45',
	534352: '0x03e9044d7e8da61815ebed0a5b265fbc9cbdfa4f'
};
export const USDTAbi = [
	{
		inputs: [],
		name: 'mint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		name: 'mintFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		]
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'claimYields',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	}
];
export const chains = [
	{
		name: 'Blast',
		chainId: 81457,
		shortName: 'blast',
		img: 'https://avatars.githubusercontent.com/u/142361836?s=200&v=4'
	},
	{
		name: 'Scroll',
		chainId: 534352,
		shortName: 'scr',
		img: 'https://avatars.githubusercontent.com/u/87750292?s=200&v=4'
	},
	{
		name: 'Base',
		chainId: 8453,
		shortName: 'base',
		img: 'https://avatars.githubusercontent.com/u/108554348?s=200&v=4'
	},
	{
		name: 'Mantle',
		chainId: 5000,
		shortName: 'mantle',
		img: 'https://cryptologos.cc/logos/mantle-mnt-logo.png?v=029'
	},
	{
		name: 'Zora',
		chainId: 7777777,
		shortName: 'zora',
		img: 'https://avatars.githubusercontent.com/u/60056322?s=200&v=4'
	},
	{
		name: 'BNB',
		chainId: 56,
		shortName: 'bnb',
		img: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029'
	},
	{
		name: 'Polygon',
		chainId: 137,
		shortName: 'matic',
		img: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=029'
	},
	{
		name: 'Arbitrum',
		chainId: 42161,
		shortName: 'arb',
		img: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=029'
	},
	{
		name: 'ZKSYNC (Soon)',
		disabled: true,
		img: 'https://avatars.githubusercontent.com/u/42489169?s=200&v=4'
	},
	{
		name: 'Linea',
		chainId: 59144,
		shortName: 'linea',
		img: 'https://avatars.githubusercontent.com/u/10818037?s=200&v=4'
	}
];
