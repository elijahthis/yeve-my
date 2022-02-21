import GlobalStyles from './../styles/GlobalStyles'
import '../App.css'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
