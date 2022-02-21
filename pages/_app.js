import GlobalStyles from './../styles/GlobalStyles'
import '../App.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Yeve</title>
      <link rel="icon" href="images/logo.svg" type="image/svg+xml" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
