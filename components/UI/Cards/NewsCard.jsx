import 'antd/dist/antd.css'
import Image from 'next/image'
import tw, { css } from 'twin.macro'

const NewsCard = ({ cardData }) => {
  return (
    <div
      css={css`
        color: #767676;
        padding: 16px 14px 21px 12px;
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
      `}
    >
      <div>
        <Image src={cardData.image} />
      </div>
      <div tw="flex flex-row items-center justify-between">
        <p tw="text-black">{cardData.title}</p>
        <span tw="text-xs text-[#8c8c8c]">{cardData.time}</span>
      </div>
      <p tw="text-xs">{cardData.body}</p>
    </div>
  )
}

export default NewsCard
