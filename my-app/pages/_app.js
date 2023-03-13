import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (<div>

    <div className={styles.menu}>
    <Link href='Whitelist'>Whitelist</Link>
      <Link href='NFT'>NFT</Link>
      <Link href='ICO'>ICO</Link>
    </div>
  <Component {...pageProps} />
  </div>);
}

export default MyApp
