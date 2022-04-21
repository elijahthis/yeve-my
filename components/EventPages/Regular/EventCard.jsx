import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineShareAlt } from 'react-icons/ai'

const EventCard = ({ cardData }) => {
  const { image, date, time, title, location, attendees } = cardData

  return (
    <div
      css={css`
        width: 306px;
        height: 380px;
        font-weight: 600;
        background: #ffffff;
        box-shadow: 0px 6px 18px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        display: grid;
        grid-template-rows: 10fr 9fr;

        > :nth-child(2) {
          padding: 16px;
        }
      `}
    >
      <div
        css={css`
          letter-spacing: 0;
          word-spacing: 0;
          font-size: 0;
        `}
      >
        <Image src={image} />
      </div>
      <div tw="flex flex-col items-start justify-between">
        <div tw="flex flex-col items-start gap-2 w-full">
          <p tw="text-sm font-bold text-gold">
            {date} • {time}
          </p>
          <p
            css={css`
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 24px;
              color: #1a1a1a;
            `}
          >
            {title}
          </p>
          <p>{location}</p>
        </div>
        <div tw="flex flex-row items-center justify-between w-full">
          <div tw="flex flex-row items-center gap-2">
            <BsPeople size="24" /> <p>{attendees} Attendees</p>
          </div>
          <AiOutlineShareAlt size="24" />
        </div>
      </div>
    </div>
  )
}

export default EventCard
