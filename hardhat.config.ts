import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

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
      // allowUnlimitedContractSize: true,
      // blockConfirmations: 3
    },
    localhost: {},
    ganache: {},
    sepolia: {},
  },
  etherscan: {},
  gasReporter: {},
  mocha: {},
};

export default config;

