import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "";
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";

const config: HardhatUserConfig = {
  // solidity: "0.8.20",
  solidity: {
    compilers: [{ version: "0.8.20" }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31137,
      // forking: {
      // 	url: MAINNET_RPC_URL,
      // },
    },
    localhost: {
      chainId: 1337,
      url: "http://127.0.0.1:7545",
      // allowUnlimitedContractSize: true,
      // blockConfirmations: 3
    },
    ganache: {
      chainId: 1337,
      url: "http://127.0.0.1:7545",
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      // mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      // polygon: POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    // put it enabled: true -> only when you want to check gas optimizations
    enabled: false,
    noColors: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    excludeContracts: [],
    coinmarketcap: COINMARKETCAP_API_KEY,
    // token: "MATIC", // polygon network
  },
  mocha: {
    timeout: 500000, //500 seconds
  },
};

export default config;

