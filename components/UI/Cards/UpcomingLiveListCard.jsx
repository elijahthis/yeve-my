import 'antd/dist/antd.css'
import tw, { css } from 'twin.macro'

const UpcomingLiveListCard = ({ cardData }) => {
  return (
    <div
      css={css`
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        padding-bottom: 12px;
      `}
    >
      <ul tw="font-semibold text-sm text-[#767676]">
        {cardData.map((card, ind) => (
          <div
            css={css`
              padding: 22px 32px;
              border-bottom: 1px solid #ebebeb;
              > * {
                list-style-type: disc;
              }
            `}
            key={ind}
          >
            <li>
              <p tw="text-black">{card.gig}</p>
              <p>{card.clientName}</p>
              <div tw="text-gold text-xs flex flex-row items-center gap-2 my-1">
                <span>{card.date}</span>
                <span>{card.time}</span>
              </div>
              <p tw="text-xs">{card.address}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default UpcomingLiveListCard
