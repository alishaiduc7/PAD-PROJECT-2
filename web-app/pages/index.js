import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import HomeOverview from '../components/HomeOverview';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';
import Menu from './menu';
import axios from "axios"

export default function Home({productList}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Soft Coffee online shop</title>
        <meta name="description" content="Best coffee in town! Try it out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeOverview/>
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,

    },
  };
};
