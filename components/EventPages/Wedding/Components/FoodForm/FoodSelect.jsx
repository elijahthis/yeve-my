import { BsFillCheckCircleFill } from 'react-icons/bs'
import { useState } from 'react/cjs/react.production.min'
import tw, { css } from 'twin.macro'

const FoodSelect = ({ info, onClick, active }) => {
  return (
    <div
      css={css`
        svg {
          color: ${active ? '#3E9F4D' : '#e8e8e8'};
        }
        width: 100%;
        padding: 8px 16px;
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      <div>
        <p tw="text-[#1a1a1a]">{info.title}</p>
        <p tw="text-[#8c8c8c] text-xs">{info.fullName}</p>
      </div>
      <BsFillCheckCircleFill size="20" />
    </div>
  )
}

export default FoodSelect
