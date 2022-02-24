import Image from 'next/image'
import SearchBar from './searchbar'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { Button } from './../components'
import { FaRegBell } from 'react-icons/fa'
import cardBanner from '../images/card-banner.png'
import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'
import service4 from '../images/service4.png'
import service5 from '../images/service5.png'
import service6 from '../images/service6.png'

const clientList = [
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sit.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
]
const vendorList = [
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sit.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
]

const servicesSection = css`
  min-height: 200vh;
  background-color: #ffffff;
  position: relative;
`
const card = css`
  position: relative;
  width: 366px;
  height: 106px;
  padding: 14px 0 0 64px;
  background-color: #ffffff;
  box-shadow: 0px 16px 100px rgba(177, 185, 187, 0.23);
  border-radius: 8px;
`
const card2 = css`
  width: 366px;
  height: 261px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  padding: 10px;
  z-index: 1;
  margin-top: 24px;
`

const Services = () => {
  return (
    <section css={servicesSection}>
      <SearchBar />
      <div css={heroBlock}>
        <div>
          <div tw="mb-3 text-gold font-semibold">FOR CLIENTS</div>
          <h1>Find service providers</h1>
          <ol>
            {clientList.map((item, ind) => (
              <div key={ind} tw="flex flex-row items-start">
                <div tw="w-12 h-12 rounded-full bg-[#FDF9F3] text-gold font-bold grid place-items-center">
                  {ind + 1}
                </div>
                <li tw="ml-4">{item}</li>
              </div>
            ))}
          </ol>
          <div>
            <Button variant="fill" isSmall={true} tw="mr-3">
              Find Services
            </Button>
            <Button variant="outline" isSmall={true} tw="border-gold text-gold">
              Learn More
            </Button>
          </div>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 186px 186px 186px;
            column-gap: 1rem;
            place-items: center;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-template-rows: 114px 165px;
              row-gap: 1.125rem;
            `}
          >
            <div>
              <Image src={service1} />
            </div>
            <div>
              <Image src={service2} />
            </div>
          </div>
          <div
            css={css`
              display: grid;
              grid-template-rows: 205px 160px;
              row-gap: 1.125rem;
            `}
          >
            <div>
              <Image src={service3} />
            </div>
            <div>
              <Image src={service4} />
            </div>
          </div>
          <div
            css={css`
              display: grid;
              grid-template-rows: 114px 165px;
              row-gap: 1.125rem;
            `}
          >
            <div>
              <Image src={service5} />
            </div>
            <div>
              <Image src={service6} />
            </div>
          </div>
        </div>
      </div>
      <div css={heroBlock} style={{ alignItems: 'center' }}>
        <div>
          <div css={card}>
            <div
              css={css`
                position: absolute;
                top: -20%;
                left: -4%;
              `}
              tw="w-16 h-16 bg-black rounded-full grid place-items-center"
            >
              <FaRegBell color="white" size="24" />
            </div>
            <p tw="font-bold">EVENT AVAILABLE!</p>
            <p tw="text-sm">
              Victor Smith is looking for a bass guitarist around your area.
            </p>
          </div>
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
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div tw="mb-3 text-gold font-semibold">FOR VENDORS</div>
          <h1>Provide services for events</h1>
          <ol>
            {vendorList.map((item, ind) => (
              <div tw="flex flex-row items-start">
                <div tw="w-12 h-12 rounded-full bg-[#FDF9F3] text-gold font-bold grid place-items-center">
                  {ind + 1}
                </div>
                <li key={ind} tw="ml-4">
                  {item}
                </li>
              </div>
            ))}
          </ol>
          <div>
            <Button variant="fill" isSmall={true} tw="mr-3">
              Provide Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
