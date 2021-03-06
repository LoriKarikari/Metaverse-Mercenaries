import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-solhint'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import dotenv from 'dotenv'
import 'hardhat-deploy'
import 'hardhat-watcher'
import { HardhatUserConfig } from 'hardhat/types'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.8.4', settings: {} }],
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.RINKEBY_ALCHEMY_KEY}`,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`],
    },
  },
  paths: {
    artifacts: '../next/artifacts',
  },
  namedAccounts: {
    deployer: 0,
  },
  typechain: {
    outDir: 'types',
  },
}

export default config
