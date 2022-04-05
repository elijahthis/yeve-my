import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import GlobalStyles from './../styles/GlobalStyles'
import '../App.css'
import Loader from '../components/loader'

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.getElementById('__next').className = 'edit-next'
    Router.onRouteChangeStart = url => {
      setLoading(true)
    }
    Router.onRouteChangeComplete = url => {
      setLoading(false)
    }
    Router.onRouteChangeError = url => {
      setLoading(false)
      console.log('Error: Route Change error!!!')
    }
  }, [])
  return (
    <>
      <Head>
        <title>Yeve</title>
        <link rel="icon" href="images/logo.svg" type="image/svg+xml" />
      </Head>
      <GlobalStyles />
      {loading ? <Loader loading={loading} /> : <Component {...pageProps} />}
    </>
  )
}

export default App
