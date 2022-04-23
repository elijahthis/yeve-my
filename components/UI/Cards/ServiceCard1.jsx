import 'antd/dist/antd.css'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import tw, { css } from 'twin.macro'

const ServiceCard1 = ({ cardData, clickFunc }) => {
  return (
    <div
      css={css`
        background-color: #fefefe;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        padding: 14px 12px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        @media (max-width: 1140px) {
          padding: 9px 8px;
        }
      `}
      onClick={clickFunc}
    >
      <div
        css={css`
          width: 100%;
          height: 78%;
          overflow: hidden;
          border-radius: 8px;
          @media (max-width: 1140px) {
            width: 137px;
            height: 84px;
          }
        `}
      >
        <Image src={cardData.image} alt={cardData.name} />
      </div>
      <div
        tw="flex flex-row justify-between items-center"
        css={css`
          margin-top: 8px;

          @media (max-width: 1140px) {
            margin-top: 6px;
          }
        `}
      >
        <h5 style={{ marginBottom: '0' }}>{cardData.name}</h5>
        <BiChevronRight size={18} />
      </div>
    </div>
  )
}

export default ServiceCard1
