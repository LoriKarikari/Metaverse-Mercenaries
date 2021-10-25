import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export function useProvider(): ethers.providers.Web3Provider | undefined {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>()
  const { ethereum } = process.browser && (window as any)

  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(ethereum))
  }, [])

  return provider
}
