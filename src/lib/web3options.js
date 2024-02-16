import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";

 const projectId = 'c3be550d6803eacd06c124ce7e10d7b1';
 const mainnet = {
    chainId: 168587773,
    name: 'Blast Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://testnet.blastscan.io',
    rpcUrl: 'https://sepolia.blast.io'
};
 const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
};

export const modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
});

export const USDTAddress = "0xB251F8c3D5BCF08CCb0bdfF346Cf304b8f1eC0a7"
export const USDTAbi = [
    {
        "inputs": [],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "name": "mintFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ]
      },{
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
      
];
