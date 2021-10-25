import { Signer } from 'ethers'
import { useEffect, useState } from 'react'
import { useProvider } from './useProvider'

export function useSigner(): Signer | undefined {
  const [signer, setSigner] = useState<Signer>()
  const provider = useProvider()

  useEffect(() => {
    setSigner(provider?.getSigner())
  }, [provider])

  return signer
}
