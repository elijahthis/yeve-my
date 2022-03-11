import tw, { css } from 'twin.macro'
import { useState } from 'react'

const TabBar = ({ dataList }) => {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div tw="flex flex-row items-center border-b border-[#e5e5e5] ">
        {dataList.map((item, ind) => (
          <div
            css={css`
              padding: 16px 50px;
              border-bottom: 2px solid
                ${active === ind ? '#DE8E0E' : 'transparent'};
              cursor: pointer;
              font-weight: ${active === ind ? 600 : 400};
              font-size: 14px;
              line-height: 24px;
              color: #343434;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 30px;
            `}
            onClick={() => {
              setActive(ind)
            }}
          >
            {item.title}
            {item.unread ? (
              <div
                tw="w-5 h-5 grid place-items-center text-xs bg-gold text-white rounded-full"
                css={css`
                  font-size: 9px;
                  font-weight: 600;
                `}
              >
                {item.unread}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div>{dataList[active].component}</div>
    </div>
  )
}

export default TabBar
