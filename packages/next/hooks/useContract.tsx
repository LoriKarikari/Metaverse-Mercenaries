import { Contract, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useSigner } from './useSigner'
import Todo from '../artifacts/contracts/Todo.sol/Todo.json'

type Props = {
  address?: any
  abi?: any
}

export function useContract({
  address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  abi = Todo.abi,
}: Props): Contract | undefined {
  const [contract, setContract] = useState<Contract>()
  const signer = useSigner()

  useEffect(() => {
    setContract(new ethers.Contract(address, abi, signer))
  }, [signer])

  return contract
}
