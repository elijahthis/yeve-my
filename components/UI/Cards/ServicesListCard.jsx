import 'antd/dist/antd.css'
import tw, { css } from 'twin.macro'

const ServicesListCard = ({ cardData }) => {
  return (
    <div
      css={css`
        color: #767676;
        background: #fefefe;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        > :first-child {
          padding-top: 28px;
        }
        > :last-child {
          padding-bottom: 28px;
        }
      `}
    >
      {cardData.map((item, ind) => (
        <div
          tw="flex flex-row items-start justify-between border-b border-[#EBEBEB]"
          css={css`
            padding: 18px 20px;
          `}
          key={ind}
        >
          <div>
            <p tw="text-sm">{item}</p>
            <p tw="text-xs">{ind === 0 ? 'Primary' : 'Secondary'} Service</p>
          </div>
          <p tw="text-gold cursor-pointer">Add+</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesListCard
