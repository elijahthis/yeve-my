import tw, { css } from 'twin.macro'
import { useState } from 'react'

const TabBar = ({
  dataList,
  switchShapeIcon,
  shape,
  setShape,
  actionButton,
}) => {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div tw="flex flex-row items-center justify-between border-b border-[#e5e5e5]">
        <div
          tw="flex flex-row items-center gap-4 w-full"
          className="titleBar"
          css={css`
            @media (max-width: 1140px) {
              justify-content: space-between;
            }
          `}
        >
          {dataList.map((item, ind) => (
            <div
              key={ind}
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
                color: ${active === ind ? '#000000' : '#767676'};

                > :nth-child(2) {
                  display: none;
                }

                @media (max-width: 1140px) {
                  padding: 16px 6px;
                  > :first-child {
                    display: ${item.mobileTitle ? 'none' : 'inline-block'};
                  }
                  > :nth-child(2) {
                    display: inline-block;
                  }
                }
              `}
              className="title"
              onClick={() => {
                setActive(ind)
              }}
            >
              <span>{item.title}</span>
              {item.mobileTitle ? <span>{item.mobileTitle}</span> : null}

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
        <div
          css={css`
            cursor: pointer;
            svg {
              width: 24px;
              height: 24px;
            }
            @media (max-width: 1140px) {
              display: none;
            }
          `}
          onClick={() => {
            if (switchShapeIcon) {
              setShape(shape => (shape + 1) % 2)
            }
          }}
        >
          {switchShapeIcon ? switchShapeIcon[shape] : null}
          {actionButton ? actionButton : null}
        </div>
      </div>
      <div>{dataList[active].component}</div>
    </div>
  )
}

export default TabBar
