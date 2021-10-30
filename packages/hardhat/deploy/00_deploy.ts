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
        `Qmbvu6X2V82x5cZuqqU4rZrW5XDEgCGdRmgFeSpB8d8Yb8`,
        `Qmeh6Yz8HCqEeDHik7sEHGLGtrSPxfoJPdQGsmc1G69BrZ`,
				`QmZbSc9wA72dwzG5aDDBtcDGNFcwpwwo5G7a5GVGV7vTtS`,
      ],
      [66, 79, 68],
      [10, 10, 5],
      'Guldan',
			`QmTXFFASjQuH7NLQqQNEqqZFoYs1bAZVt4VhYnYXZujSqg`,
      82,
      4,
    ],
  })
}

export default func
func.tags = ['MyEpicGame']
