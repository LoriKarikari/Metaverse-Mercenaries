import { Character } from '@types'
import { Contract } from 'ethers'

export function transformCharacterData(characterData: any) {
  const character: Character = {
    id: characterData.characterIndex?.toNumber(),
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDmg: characterData.attackDamage.toNumber(),
  }
  return character
}

export async function mintCharacterNFT(contract: Contract | undefined, characterId: number) {
  try {
    if (contract) {
      console.log('Minting character in progress...')
      const mintTxn = await contract.mintCharacterNFT(characterId)
      await mintTxn.wait()
    }
  } catch (err) {
    throw err
  }
}

export async function attack(contract: Contract) {
  try {
    const attackTxn = await contract.attackBoss()
    await attackTxn.wait()
    console.log('attackTxn:', attackTxn)
  } catch (err) {
    throw err
  }
}
