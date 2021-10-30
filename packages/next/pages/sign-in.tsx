import { useEffect } from 'react'
import MetamaskLogo from '../public/metamask-fox.svg'
import useStore from '../store'
import { useRouter } from 'next/router'

export default function SignInPage() {
  const setAccount = useStore((state) => state.setAccount)
  const account = useStore((state) => state.account)
  const router = useRouter()

  useEffect(() => {
    account && router.push('/')
  }, [account])

  return (
    <div className="min-h-screen bg-[#07050A] flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h1 className="text-6xl text-[#F2EF66] font-lhf mb-20">Metaverse Mercenaries</h1>
            <h2 className="mt-6 text-3xl font-extrabold text-[#5B5B63]">Sign in</h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <div>
                  <button
                    onClick={() => setAccount()}
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-[#DE7D1E] rounded-md shadow-sm bg-[#DE7D1E] text-xl font-medium text-[#7A4219] hover:bg-[#7A4219] hover:border-[#7A4219] hover:text-[#DE7D1E]"
                  >
                    <span className="sr-only">Connect with Metamask</span>
                    <MetamaskLogo className="w-10 h-12 mr-4" />
                    Connect with Metamask
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://mercenaries-nft-clone.fra1.cdn.digitaloceanspaces.com/login-bg.webp"
          alt=""
        />
      </div>
    </div>
  )
}
