import { Character } from '../types'
import Card from './Card'

type Props = {
  heroes: Character[]
  owned: string
}

export default function CardGrid({ heroes, owned }: Props) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {heroes.map((hero) => (
        <Card hero={hero} owned={owned} />
      ))}
    </div>
  )
}
