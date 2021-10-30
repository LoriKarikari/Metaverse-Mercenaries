import { Character } from '@types'
import { transformCharacterData } from '@utils'
import { Contract, ethers } from 'ethers'
import create from 'zustand'
import Game from '../artifacts/contracts/MyEpicGame.sol/MyEpicGame.json'
import produce from 'immer'

// TODO: proper types
export type StoreProps = {
  address: string | undefined
  //setAddress(): void
  contract: Contract | undefined
  loading: boolean
  abi: any
  account: string
  characters: Character[]
  hero: Character | undefined // TODO: extra => multiple heroes => party
  setAccount(): void
  setContract(): void
  setLoading(loading: boolean): void
  setCharacters(): void
  setHero(): void
  updateHeroHp(hp: number): any
}

const useStore = create<StoreProps>((set, get) => ({
  contract: undefined,
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  abi: Game.abi,
  account: '',
  loading: true,
  characters: [],
  hero: undefined,

  setContract: async () => {
    const { address, abi } = get()
    const { ethereum } = process.browser && (window as any)
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = await provider?.getSigner()
    if (address && signer) {
      const contract = await new ethers.Contract(address, abi, signer)
      set({ contract })
    }
  },

  setAccount: async () => {
    const { setLoading } = get()
    setLoading(true)
    const { ethereum } = process.browser && (window as any)
    const [account] = await ethereum?.request({ method: 'eth_requestAccounts' })
    set({ account: account })
    setLoading(false)
  },

  setLoading: (loading: boolean) => {
    set({ loading })
  },

  setCharacters: async () => {
    const { contract } = get()
    if (contract) {
      try {
        const charactersTxn = await contract.getAllDefaultCharacters()
        const characters = charactersTxn.map((character: any) => {
          return transformCharacterData(character)
        })
        set({ characters })
      } catch (err) {
        console.error(err)
      }
    }
  },

  setHero: async () => {
    const { contract } = get()
    if (contract) {
      try {
        const heroTxn = await contract.checkIfUserHasNFT()
        const hero = transformCharacterData(heroTxn)
        set({ hero })
      } catch (err) {
        console.error(err)
      }
    }
  },

  updateHeroHp: (hp: number) =>
    set(
      produce((state) => {
        state.hero.hp = hp
      })
    ),
}))

export default useStore
