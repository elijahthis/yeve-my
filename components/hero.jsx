import tw, { css } from 'twin.macro'
import Navbar from './navbar'
import Image from 'next/image'
import joseph from '../images/joseph.png'
import clinton from '../images/clinton.png'
import cardBanner from '../images/card-banner.png'
import { Button } from './../components'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
// import { Button } from 'antd'

export const heroBlock = css`
  padding: 135px 106px 40px 158px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      max-width: 440px;
      margin-bottom: 38px;
      color: #8c8c8c;
    }
  }
`
const card1 = css`
  width: 244px;
  height: 78px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  z-index: 1;
`
const card2 = css`
  width: 358px;
  height: 261px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  padding: 10px;
  z-index: 1;
`

const longButton = css`
  width: 172px;
  padding: 12px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
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
          height: '800px',
        }}
      >
        <Navbar page={page} />
        <div css={heroBlock}>
          <div>
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
            <div>
              <Button variant="fill" isSmall={true} tw="mr-3">
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
          <div tw="relative">
            <div css={card1}>
              <div
                css={css`
                  position: absolute;
                  top: -40%;
                  left: -8%;
                `}
              >
                <Image src={joseph} width={72} height={72} />
              </div>
              <div tw="pl-16 py-3.5">
                <p tw="text-black font-bold">Joseph Asher</p>
                <p tw="text-lightgrey2">Needs Guitarist</p>
              </div>
            </div>
            <div
              css={css`
                width: 320px;
                height: 332px;
                border: 1px solid #ffcc66;
                border-radius: 8px;
                position: absolute;
                left: 110px;
                top: 47px;
                opacity: 0.1;
              `}
            ></div>
            <div
              css={css`
                margin: 67px 0 0 154px;
              `}
            >
              <div css={card2}>
                <div style={{ width: '100%', height: '124px' }}>
                  <Image src={cardBanner} />
                </div>
                <div tw="flex flex-row mt-7">
                  <div
                    css={css`
                      width: 72px;
                      height: 72px;
                      position: relative;
                      margin-right: 14px;
                    `}
                  >
                    <Image src={clinton} />
                    <div
                      css={css`
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        border: 1px solid white;
                        background-color: #3e9f4d;
                        position: absolute;
                        bottom: 0;
                        right: 10%;
                      `}
                    ></div>
                  </div>
                  <div>
                    <p tw="text-black font-bold">Clinton Pogg</p>
                    <p tw="text-lightgrey2">Guitarist</p>
                    <p tw="text-xs text-gold py-1 px-3 border border-lightgrey2 rounded-2xl inline-block">
                      $200/2H
                    </p>
                  </div>
                </div>
              </div>
              <div tw="flex flex-row justify-between items-center mt-[18px]">
                <div css={longButton} tw="bg-[#F9D7DB] text-[#E3394D]">
                  Decline
                  <CloseOutlined />
                </div>
                <div css={longButton} tw="bg-[#3E9F4D] text-white">
                  Accept
                  <CheckOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
