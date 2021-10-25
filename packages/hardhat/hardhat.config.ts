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
    // mumbai: {
    //   url: 'https://rpc-mumbai.matic.today',
    //   accounts: [process.env.PRIVATE_KEY as string],
    // },
    // rinkeby: {
    //   // url: `https://eth-rinkeby.alchemyapi.io/v2/${}`,
    //   accounts:
    //     '',
    //   ],
    // },
  },
  paths: {
    artifacts: '../next/artifacts',
  },
  namedAccounts: {
    deployer: 0,
  },
}

export default config
