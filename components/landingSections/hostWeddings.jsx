import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { Button } from '../../components'
import weddingSide from '../../images/wedding-side.png'
import groupSide from '../../images/group-side.png'
import hostSide from '../../images/shiny-earth.png'
import { FaRegBell } from 'react-icons/fa'
import { BsLightning, BsShop } from 'react-icons/bs'

const weddingList = [
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sit.',
  'Busy sity is not so easy and it required time and skills to make it all easy going  sity is not so easy and it required time.',
]

const hostWeddingsSection = css`
  // min-height: 200vh;
  background-color: #ffffff;
`

const HostWeddings = () => {
  const hostList = [
    [
      <FaRegBell size={20} color="white" />,
      '#111217',
      'Realtime notifications',
    ],
    [
      <BsShop size={20} color="white" />,
      '#5AC192',
      'Top notch event management tools',
    ],
    [
      <BsLightning size={20} color="white" />,
      '#9444fb',
      'Fast and secure streaming',
    ],
  ]
  return (
    <section css={hostWeddingsSection}>
      <div
        css={heroBlock}
        tw="relative items-center gap-8"
        style={{
          flexDirection: 'reverse',
        }}
      >
        <div
          css={css`
            width: clamp(300px, 80vw, 600px);
            position: absolute;
            left: -158px;
            top: 0;
          `}
        >
          <Image src={hostSide} />
        </div>
        <div>
          {hostList.map((item, ind) => (
            <div
              css={css`
                width: clamp(300px, 80vw, 366px);
                height: 84px;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0px 16px 100px rgba(177, 185, 187, 0.23);
                display: flex;
                flex-direction: row;
                align-items: center;
                font-weight: 700;
                column-gap: 1rem;
                margin-bottom: 1.125rem;
              `}
              key={ind}
            >
              <div
                tw={'w-12 h-12 rounded-full grid place-items-center'}
                css={css`
                  background-color: ${item[1]};
                `}
              >
                {item[0]}
              </div>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>

        <div
          css={css`
            @media (max-width: 1140px) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        >
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
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: start;
              gap: 1rem;
              position: relative;
              @media (max-width: 1140px) {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            `}
          >
            <div tw="mt-20">
              <ol>
                {weddingList.map((item, ind) => (
                  <div tw="flex flex-row items-start gap-4" key={ind}>
                    <div
                      tw="w-12 h-12 rounded-full bg-[#FDF9F3] text-gold font-bold grid place-items-center"
                      style={{ minWidth: '48px' }}
                    >
                      {ind + 1}
                    </div>
                    <li key={ind}>{item}</li>
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
                width: clamp(300px, 100%, 600px);
                position: absolute;
                right: -106px;
                @media (max-width: 1140px) {
                  position: relative;
                  right: 0;
                }
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
