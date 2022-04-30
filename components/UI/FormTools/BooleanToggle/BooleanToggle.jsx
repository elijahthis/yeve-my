import tw, { css } from 'twin.macro'
import { useState } from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.css'

const BooleanToggle = ({ list, value, valueList, onChange }) => {
  const [active, setActive] = useState(value)
  const activeStyles = css`
    background-color: #fdf9f3;
    color: #de8e0e;
    border-radius: 4px;
  `
  return (
    <div
      tw="grid rounded border border-[#D2D2D2] text-sm text-[#8c8c8c]"
      css={css`
        grid-template-columns: repeat(${list.length}, minmax(0, 1fr));
      `}
    >
      {list.map((item, ind) => (
        <div
          tw="py-3 grid place-items-center cursor-pointer"
          key={ind}
          css={
            valueList
              ? active === valueList[ind]
                ? activeStyles
                : css`
                    :hover {
                      color: #de8e0e;
                    }
                  `
              : active === item
              ? activeStyles
              : css`
                  :hover {
                    color: #de8e0e;
                  }
                `
          }
          onClick={() => {
            if (valueList) {
              onChange(valueList[ind])
              setActive(valueList[ind])
            } else {
              onChange(item)
              setActive(item)
            }
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default BooleanToggle
