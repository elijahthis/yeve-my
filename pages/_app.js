import GlobalStyles from './../styles/GlobalStyles'
import '../App.css'
import Head from 'next/head'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    document.getElementById('__next').className = 'edit-next'
  }, [])
  return (
    <>
      <Head>
        <title>Yeve</title>
        <link rel="icon" href="images/logo.svg" type="image/svg+xml" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
