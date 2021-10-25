import { useState } from 'react'

export function useAccount(): any {
  const [account, setAccount] = useState<any>()
  const { ethereum } = process.browser && (window as any)

  async function updateAccount() {
    const [account] = await ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(account)
  }

  return [account, updateAccount]
}
