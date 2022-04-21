import tw, { css } from 'twin.macro'
import WeddingNav from '../../UI/NavBars/WeddingNav'
import Hero from './Sections/Hero'
import WhenWhere from './Sections/WhenWhere'
import Host from '../SharedSections/Host'
import GiftsRegistry from './Sections/GiftsRegistry'

const Wedding = () => {
  return (
    <section
      css={css`
        .hero {
          height: 559px;
          background: url(/images/wedding-hero-img.png) no-repeat;
          color: #ffffff;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          position: relative;

          text-align: center;
          > div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 0 196px;
            padding-top: 254px;
            padding-bottom: 56px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            // gap:px;
          }
        }
        h1 {
          font-family: Bellaberry;
          color: white;
          font-size: 145px;
          line-height: 112px;
        }
      `}
    >
      <WeddingNav page={0} />
      <Hero />
      <GiftsRegistry />
      <WhenWhere />
      <Host />
      <section></section>
      <section></section>
    </section>
  )
}

export default Wedding
