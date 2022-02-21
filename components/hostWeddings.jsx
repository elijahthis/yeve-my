import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { Button } from './../components'
import weddingSide from '../images/wedding-side.png'
import groupSide from '../images/group-side.png'

const weddingList = [
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sit.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
]

const hostWeddingsSection = css`
  min-height: 200vh;
  background-color: #ffffff;
`

const HostWeddings = () => {
  return (
    <section css={hostWeddingsSection}>
      <div css={heroBlock}>
        <div></div>
        <div>
          <h1>Host and manage your event from anywhere</h1>
          <p>
            Busy sity is not so easy and it required time and skills to make it
            all easy going so easy
          </p>
          <div>
            <Button variant="outline" isSmall={true} tw="border-gold text-gold">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div css={heroBlock}>
        <div tw="flex flex-col justify-center items-center w-full">
          <h1 style={{ textAlign: 'center' }}>Supercharged for weddings</h1>
          <div tw="w-full flex flex-row justify-start relative">
            <div tw="mt-20">
              <ol>
                {weddingList.map((item, ind) => (
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
            <div
              css={css`
                width: 600px;
                position: absolute;
                right: -106px;
              `}
            >
              <Image src={weddingSide} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostWeddings
