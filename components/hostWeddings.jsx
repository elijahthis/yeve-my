import Image from 'next/image'
import { heroBlock } from './hero'
import tw, { css } from 'twin.macro'
import { Button } from './../components'
import weddingSide from '../images/wedding-side.png'
import groupSide from '../images/group-side.png'
import hostSide from '../images/shiny-earth.png'
import { FaRegBell } from 'react-icons/fa'
import { BsLightning } from 'react-icons/bs'

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
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 20.5V13.375C13 13.0766 13.1185 12.7905 13.3295 12.5795C13.5405 12.3685 13.8266 12.25 14.125 12.25H17.125C17.4234 12.25 17.7095 12.3685 17.9205 12.5795C18.1315 12.7905 18.25 13.0766 18.25 13.375V20.5M20.5 19.75V10V19.75ZM2.5 10V19.75V10ZM17.4283 1H5.57172C4.55031 1 3.62781 1.5625 3.23125 2.42781L1.20156 6.85938C0.518125 8.35047 1.65297 10.0398 3.41359 10.0938H3.50734C4.97922 10.0938 6.17219 8.91344 6.17219 7.64547C6.17219 8.91109 7.36562 10.0938 8.8375 10.0938C10.3094 10.0938 11.5 8.99781 11.5 7.64547C11.5 8.91109 12.693 10.0938 14.1648 10.0938C15.6367 10.0938 16.8302 8.99781 16.8302 7.64547C16.8302 8.99781 18.0231 10.0938 19.495 10.0938H19.5864C21.347 10.0389 22.4819 8.34953 21.7984 6.85938L19.7687 2.42781C19.3722 1.5625 18.4497 1 17.4283 1ZM1 20.5H22H1ZM5.875 12.25H9.625C9.92337 12.25 10.2095 12.3685 10.4205 12.5795C10.6315 12.7905 10.75 13.0766 10.75 13.375V17.5H4.75V13.375C4.75 13.0766 4.86853 12.7905 5.0795 12.5795C5.29048 12.3685 5.57663 12.25 5.875 12.25Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>,
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
