import 'antd/dist/antd.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import tw, { css } from 'twin.macro'
import { ProgressBar } from '../../formTools'

const EventCard = ({ cardData, clickFunc }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        width: 247px;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        padding: 12px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: #767676;
        height: max-content;
        cursor: pointer;
      `}
      onClick={() => {
        router.push('/clients/events/view-event/attendees')
      }}
    >
      <div>
        <Image src={cardData.image} />
        <div tw="flex flex-col items-start justify-between w-full">
          <p tw="text-black">{cardData.gig}</p>
          <div tw="flex flex-row items-start justify-between h-12 w-full">
            <p>{cardData.day}</p>
            <p
              css={css`
                color: ${cardData.live === 'Live' ? '#3E9F4D' : '#DE8E0E'};
              `}
            >
              {cardData.live}
            </p>
          </div>
        </div>
      </div>
      <div tw="mt-5">
        <ProgressBar percent={cardData.percent} />
      </div>
    </div>
  )
}

export default EventCard
