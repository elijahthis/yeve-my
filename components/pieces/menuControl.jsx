import tw, { css } from 'twin.macro'
import { useState } from 'react'

const MenuControl = ({ dataList }) => {
  const [active, setActive] = useState(0)
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 4fr;
        gap: 10px;
        margin-top: 20px;
        > div:first-of-type {
          max-width: 214px;
        }
        > * > * {
          margin-top: 0;
        }
      `}
    >
      <div tw="bg-white rounded-l overflow-hidden">
        {dataList.map((item, ind) => (
          <div
            tw="cursor-pointer py-4 pl-3 border-b border-[#E5E5E5]"
            css={css`
              background-color: ${active === ind ? '#FDF9F3' : 'transparent'};
              border-right: 4px solid
                ${active === ind ? '#de8e0e' : 'transparent'};
              transition: border-right 0.4s, background-color 0.4s;
            `}
            onClick={() => {
              setActive(ind)
            }}
            key={ind}
          >
            <p tw="text-base text-[#1A1A1A]">{item.title}</p>
            <p tw="text-xs text-[#8C8C8C]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div>{dataList[active].component}</div>
    </div>
  )
}

export default MenuControl
