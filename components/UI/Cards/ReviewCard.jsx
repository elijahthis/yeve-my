import 'antd/dist/antd.css'
import Image from 'next/image'
import { HiStar } from 'react-icons/hi'
import tw, { css } from 'twin.macro'

const ReviewCard = ({ cardData }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 20px 16px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
      `}
    >
      <Image src={cardData.avatar} alt="avatar" width="43px" height="43px" />
      <p tw="font-semibold">{cardData.event}</p>
      <div tw="flex flex-row items-center gap-2 mb-4">
        <HiStar />
        <p tw="font-semibold">{cardData.rating}</p>
        {cardData.date}
      </div>
      <p tw="italic">{cardData.comment}</p>
    </div>
  )
}

export default ReviewCard
