import Head from 'next/head'
import { SusbriceButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
        <title>Home | ig.news</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News abaout the <span>React</span> world.</h1>
        <p>
          Get acces to all the publications <br/>
          <span>for $9.90 month</span>
        </p>
        <SusbriceButton />
      </section>
      
      <img src="/images/avatar.svg" alt=""/>
    </main>
    </>
  )
}
