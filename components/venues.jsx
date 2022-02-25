import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { BsLightning } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import venueSide from '../images/venue-side.png'
import venueSideMobile from '../images/venue-side-mobile.png'

const venuesSection = css`
  min-height: 200vh;
  background-color: #ffffff;
  background-color: #111217;
  min-height: 100vh;
`
const card = css`
  width: clamp(300px, 80vw, 357px);
  height: 178px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 28px 24px;
  margin-bottom: 40px;
  text-align: left;
`

const Venues = () => {
  return (
    <section css={venuesSection}>
      <div css={heroBlock} tw="justify-center">
        <div tw="flex flex-col justify-center items-center w-full">
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Let's take care of your venues
          </h1>
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: start;
              position: relative;
              @media (max-width: 1140px) {
                flex-direction: column-reverse;
                align-items: center;
              }
            `}
          >
            <div
              css={css`
                margin-top: 5rem;
                @media (max-width: 1140px) {
                  margin-top: 2rem;
                }
              `}
            >
              <div css={card}>
                <p tw="text-white flex flex-row items-center">
                  <FaSearch tw="mr-4" />
                  Rent Venues
                </p>
                <p tw="text-lightgrey2">
                  Busy sity is not so easy and it required time and skills to
                  make it all easy so easy and it required
                </p>
              </div>
              <div css={card}>
                <p tw="text-white flex flex-row items-center">
                  <BsLightning tw="mr-4" />
                  Provide Venues
                </p>
                <p tw="text-lightgrey2">
                  Busy sity is not so easy and it required time and skills to
                  make it all easy so easy and it required
                </p>
              </div>
            </div>
            <div
              css={css`
                width: clamp(300px, 80vw, 600px);
                position: absolute;
                right: -106px;
                @media (max-width: 1140px) {
                  display: none;
                }
              `}
            >
              <Image src={venueSide} />
            </div>
            <div
              css={css`
                display: none;
                @media (max-width: 1140px) {
                  display: block;
                  position: relative;
                  right: 0;
                }
              `}
            >
              <Image src={venueSideMobile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venues
