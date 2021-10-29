import Card from '@components/Card'
import { Dialog } from '@headlessui/react'
import { Character } from '@types'
import { AnimatePresence } from 'framer-motion'
import { mintCharacterNFT } from '@utils'
import useStore from '../store'

type Props = {
  showModal: boolean
  setShowModal: () => boolean
  hero: Character
}

export default function Modal({ showModal, setShowModal, hero }: Props) {
  const contract = useStore((state) => state.contract)
	const setHero = useStore((state) => state.setHero)

	async function handleMinting() {
		await mintCharacterNFT(contract, hero.id)
		await setHero()
	}

  return (
    <AnimatePresence>
      {showModal && (
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          open={showModal}
          onClose={() => setShowModal(false)}
          initial={{ opacity: 0, y: 60, scale: 0.3 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 300 },
          }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-transparent  overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm xl:max-w-2xl sm:w-full sm:p-6">
              <Card hero={hero} owned={true} />
              <button
                onClick={handleMinting}
                type="button"
                className="inline-flex items-center px-12 py-6 border border-transparent text-4xl font-medium rounded-md shadow-sm text-white bg-[#682D87] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Mint
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
