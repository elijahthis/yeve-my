import tw, { css } from 'twin.macro'
import WeddingNav from '../components/UI/NavBars/WeddingNav'
import Hero from '../components/EventPages/Wedding/Sections/Hero'
import Footer from '../components/EventPages/SharedSections/Footer'

const WeddingLayout = ({ children }) => {
  return (
    <section
      css={css`
        .hero {
          height: calc(clamp(690px, 100vh, 900px) - 88px);
          background: url(/images/wedding-hero-img.png) no-repeat;
          background-position: center;
          background-size: cover;
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
            padding-top: 42.4vh;
            padding-bottom: 14vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            gap: 9.4vh;
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
      {children}
      <Footer />
    </section>
  )
}

export default WeddingLayout
