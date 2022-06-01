import Head from 'next/head';
import Image from 'next/image';
import HomeOverview from '../components/HomeOverview';
import styles from '../styles/Home.module.css';
import Menu from './menu';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soft Coffee online shop</title>
        <meta name="description" content="Best coffee in town! Try it out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeOverview/>

    </div>
  )
}
