import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import Gallery from '../Components/Gallery'

const WeddingGallery = () => {
  const imageList = [
    '/images/wedding-loc-1.png',
    '/images/wedding-loc-1.png',
    '/images/wedding-loc-1.png',
    '/images/art2.png',
    '/images/wedding-loc-1.png',
    '/images/wedding-loc-1.png',
    '/images/wedding-loc-1.png',
  ]
  return (
    <section css={weddingSection}>
      <h4>OUR MEMORIES</h4>
      <h2>Wedding Gallery</h2>
      <p className="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
        lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A mag
      </p>
      <Gallery imageList={imageList} />
    </section>
  )
}

export default WeddingGallery
