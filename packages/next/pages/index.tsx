import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/collection">Collection</Link>
				<Link href="/arena">Battle</Link>
      </main>
    </div>
  )
}
