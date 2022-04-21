import tw, { css } from 'twin.macro'
import Navbar from '../../UI/NavBars/Navbar'
import Hero from './Sections/Hero'
import AboutInfo from './Sections/AboutInfo'
import Host from '../SharedSections/Host'
import NearbyEvents from './Sections/NearbyEvents'
import Footer from '../SharedSections/Footer'
import { regularSection } from './styles'

const Regular = () => {
  return (
    <div css={regularSection}>
      <Navbar page={0} light="true" />
      <section
        css={css`
          border-top: 1px solid #e5e5e5;
        `}
      >
        <Hero />
        <AboutInfo />
        <Host />
        <NearbyEvents />
        <Footer />
      </section>
    </div>
  )
}

export default Regular
