import MintCardModal from '@components/MintCardModal'
import { Character } from '@types'
import { useState } from 'react'

type Props = {
  hero: Character
  owned: string | boolean
}

export default function Card({ hero, owned }: Props) {
  const [showModal, setShowModal] = useState(false)

  function handleCardClick() {
    owned !== hero.name || false && setShowModal(!showModal)
  }

  return (
    <>
      <div className="group relative" onClick={handleCardClick}>
        <div
          className={`w-full aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:aspect-none ${
            owned !== hero.name || false && 'opacity-40'
          }`}
        >
          <img
            src={hero.imageURI}
            alt={hero.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <MintCardModal showModal={showModal} setShowModal={setShowModal} hero={hero} />
      </div>
    </>
  )
}
