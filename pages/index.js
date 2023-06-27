import Title from '@/components/Head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Title title='Home'/>
        <div className='content'>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>HackYourFuture supports refugees, asylum seekers and disadvantaged groups with limited access to further education and the Danish labour market in acquiring the necessary skills to become web developers and entering a very in-demand field.</p>
            <p className={styles.text}>We believe talented newcomers are a great opportunity for society and we are here to give them a helping hand to make use of their potential.</p>
            <Link href='/students' className={styles.btn}>
              See students listing
            </Link>
        </div>
    </>
  )
}
