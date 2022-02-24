import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { Button } from './../components'
import groupSide from '../images/group-side.png'
import socialSide from '../images/social-side.png'

const socialList = [
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sit.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
]

const socialSection = css`
  background-color: #ffffff;
`
const socialBlock = css`
  margin: 135px 106px 40px 158px;
  padding: 25px 56px;
  border-radius: 8px;
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
    > p {
      font-size: 1rem;
      max-width: 440px;
      margin-bottom: 38px;
      color: #8c8c8c;
    }
  }
`

const Social = () => {
  return (
    <section css={socialSection}>
      <div css={heroBlock}>
        <div tw="flex flex-col justify-center items-center w-full">
          <div tw="mb-3 text-gold font-semibold">YEVE SOCIAL</div>
          <h1 style={{ textAlign: 'center', maxWidth: '100%' }}>
            A better way to collaborate
          </h1>
          <div tw="w-full flex flex-row justify-end relative">
            <div
              css={css`
                width: 600px;
                position: absolute;
                left: -158px;
              `}
            >
              <Image src={groupSide} />
            </div>
            <div tw="mt-20">
              <ol>
                {socialList.map((item, ind) => (
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
                <Button
                  variant="outline"
                  isSmall={true}
                  tw="border-gold text-gold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={socialBlock} tw="bg-[#191A1F]">
        <div>
          <div tw="mb-3 text-gold font-semibold">YEVE SOCIAL</div>
          <h1 style={{ color: 'white' }}>
            Find and connect with professionals on yeve
          </h1>
        </div>
        <div
          css={css`
            width: 300px;
          `}
        >
          <Image src={socialSide} />
        </div>
      </div>
    </section>
  )
}

export default Social
