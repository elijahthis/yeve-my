import tw, { css } from 'twin.macro'
import { FiCheck } from 'react-icons/fi'
import 'antd/dist/antd.css'
import { ToggleText } from '../formTools'
import { useState } from 'react/cjs/react.development'

const UpgradeCard = ({ cardData, current, setCurrent, ind, setPhase }) => {
  const [cycle, setCycle] = useState(true)
  return (
    <div
      css={css`
        font-size: 14px;
        font-weight: 400;
        background: #ffffff;
        border: 1px solid #3e9f4d;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
        width: 278px;
        > * {
          padding: 24px 28px;
        }
      `}
    >
      <div tw="text-center border-b border-[#EBEBEB]">
        <h4>{cardData.plan}</h4>
        <p tw="text-gold">
          $
          {cycle
            ? cardData.monthlyFee + '/ Month'
            : cardData.yearlyFee + '/ Year'}
        </p>
        {cardData.yearlyFee ? (
          <div tw="mt-4">
            <ToggleText
              checkedChildren="Monthly"
              unCheckedChildren="Annually"
              changeFunc={val => setCycle(val)}
            />
          </div>
        ) : null}
      </div>
      <div tw="border-b border-[#EBEBEB] py-8">
        <p
          css={css`
            font-weight: 600;
          `}
        >
          What's included:
        </p>
        <ol tw="mt-4">
          {cardData.features.map(feature => (
            <li tw="flex flex-row items-center gap-4 mb-3">
              <div tw="p-1 bg-white rounded-full text-[#65B02A] border-2 border-[#65B02A]">
                <FiCheck strokeWidth={3} size={12} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <button
          tw="text-center font-semibold"
          css={css`
            border-radius: 32px;
            padding: 10px 0;
            width: 100%;
            border: 1px solid ${current ? '#de8e0e' : '#e5e5e5'};
            color: ${current ? '#ffffff' : '#8c8c8c'};
            background-color: ${current ? '#de8e0e' : '#fafafa'};
          `}
          onClick={() => {
            setCurrent(ind)
            setPhase(1)
          }}
        >
          {current ? 'Your Current Plan' : 'Select'}
        </button>
      </div>
    </div>
  )
}

export default UpgradeCard
