import tw, { css } from 'twin.macro'
import WeddingLayout from '../../../layouts/WeddingLayout'
import WeddingNav from '../../UI/NavBars/WeddingNav'
import Hero from './Sections/Hero'
import WhenWhere from './Sections/WhenWhere'
import GiftsRegistry from './Sections/GiftsRegistry'
import OurStory from './Sections/OurStory'
import Host from '../SharedSections/Host'
import QandA from './Sections/QandA'
import WeddingParty from './Sections/WeddingParty'
import WeddingGallery from './Sections/WeddingGallery'
import Footer from '../SharedSections/Footer'

const Wedding = () => {
  return (
    <WeddingLayout>
      <WhenWhere />
      <GiftsRegistry />
      <OurStory />
      <QandA />
      <WeddingParty />
      <WeddingGallery />
      <Host />
    </WeddingLayout>
  )
}

export default Wedding
