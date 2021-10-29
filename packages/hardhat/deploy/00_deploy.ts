import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre
  const { deployer } = await getNamedAccounts()

  await deploy('MyEpicGame', {
    from: deployer,
    log: true,
    args: [
      ['Blademaster Samuro', 'Garrosh Hellscream', 'Xyrella'],
      [
        'https://mercenaries-nft-clone.fra1.cdn.digitaloceanspaces.com/blademaster-samuro.webp',
        'https://mercenaries-nft-clone.fra1.cdn.digitaloceanspaces.com/garrosh-hellscream.webp',
        'https://mercenaries-nft-clone.fra1.cdn.digitaloceanspaces.com/xyrella.webp',
      ],
      [66, 79, 68],
      [10, 10, 5],
      'Guldan',
      'https://mercenaries-nft-clone.fra1.cdn.digitaloceanspaces.com/guldan.webp',
      82,
      4,
    ],
  })
}

export default func
func.tags = ['MyEpicGame']
