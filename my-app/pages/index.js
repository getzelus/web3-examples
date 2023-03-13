import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Crypto Getz</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Getz
      </footer>
    </div>
  );
}