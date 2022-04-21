import tw, { css } from 'twin.macro'
import Navbar from '../UI/NavBars/Navbar'
import Image from 'next/image'
import heroSide from '../../images/hero-side.png'
import { Button } from '../../components'

export const heroBlock = css`
  padding: 135px 106px 40px 158px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #111217;
  > div {
    > h1 {
      font-family: Montserrat;
      font-size: 48px;
      line-height: 64px;
      font-weight: 800;
      max-width: 526px;
      margin-bottom: 20px;
      color: #1d2124;
    }
    > p,
    li {
      font-size: 1rem;
      width: 100%;
      max-width: 440px;
      margin-bottom: 38px;
      text-align: left;
      color: #8c8c8c;
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    padding: 100px 106px 114px 158px;
    text-align: center;

    > :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1024px) {
    padding: clamp(50px, 14vw, 135px) 6vw 40px 6vw;
    > div {
      h1 {
        font-size: 1.5rem;
        line-height: 32px;
      }
      > p,
      li {
        font-size: 0.875rem;
      }
      p {
        text-align: center;
      }
      > li {
        text-align: left;
      }
    }
  }
`

const Hero = ({ page }) => {
  return (
    <section
      style={{
        backgroundImage: 'url(images/hero-image.png)',
        // height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(17, 18, 23, 0.9)',
          minHeight: '800px',
        }}
      >
        <Navbar page={page} />
        <div css={heroBlock}>
          <div
            css={css`
              margin-right: 36px;
              @media (max-width: 1140px) {
                margin-right: 0;
              }
            `}
          >
            <h1
              style={{
                color: 'white',
              }}
            >
              One Stop Platform for Your Events
            </h1>
            <p
              style={{
                color: '#D2D2D2',
              }}
            >
              Planning a Concert, Festival, Wedding, Corporate Events etc in our
              busy sity is not so easy and it required time and skills to make
              it all easy going
            </p>
            <div tw="flex flex-row gap-3">
              <Button variant="fill" isSmall={true}>
                Find Services
              </Button>
              <Button
                variant="outline"
                isSmall={true}
                tw="border-white text-white"
              >
                Provide Services
              </Button>
            </div>
          </div>
          <div
            tw="relative"
            css={css`
              margin-top: 0;
              @media (max-width: 1140px) {
                margin-top: 80px;
              }
            `}
          >
            <Image src={heroSide} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
