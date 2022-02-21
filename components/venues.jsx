import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { BsLightning } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import venueSide from '../images/venue-side.png'

const venuesSection = css`
  min-height: 200vh;
  background-color: #ffffff;
  background-color: #111217;
  min-height: 100vh;
`
const card = css`
  width: 357px;
  height: 178px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 28px 24px;
  margin-bottom: 40px;
`

const Venues = () => {
  return (
    <section css={venuesSection}>
      <div css={heroBlock} tw="justify-center">
        <div tw="flex flex-col justify-center items-center w-full">
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Let's take care of your venues
          </h1>
          <div tw="w-full flex flex-row justify-start relative">
            <div tw="mt-20">
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
                width: 600px;
                position: absolute;
                right: -106px;
              `}
            >
              <Image src={venueSide} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venues
