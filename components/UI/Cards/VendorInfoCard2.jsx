import 'antd/dist/antd.css'
import tw, { css } from 'twin.macro'

const VendorInfoCard2 = ({ cardData }) => {
  return (
    <div
      css={css`
        padding-top: 26px;
        padding-bottom: 30px;
        padding-left: 14px;
        width: 202px;
        min-width: 170px;
        height: 81px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: #ffffff;
        font-weight: 600;

        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
      `}
    >
      <div
        css={css`
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background-color: #fdf9f3;
          color: #de8e0e;
          border-radius: 50%;
        `}
      >
        {cardData.icon}
      </div>
      <div>
        <h5>
          {cardData.money ? <span>&#163;</span> : ''}
          {cardData.value}
        </h5>
        <p tw="text-xs text-[#767676]">{cardData.title}</p>
      </div>
    </div>
  )
}

export default VendorInfoCard2
