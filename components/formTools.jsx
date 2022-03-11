import tw, { css } from 'twin.macro'
import 'antd/dist/antd.css'
import { DatePicker, Radio, Menu, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { useDebugValue, useState } from 'react'

export const DropdownMenu = ({ list, placeholder, onChange }) => {
  const [placeholderVal, setPlaceholderVal] = useState(placeholder)
  const [val, setVal] = useState(list[0])
  const handleMenuClick = ({ key }) => {
    setVal(key)
    onChange(key)
    setPlaceholderVal(null)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {list.map(item => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button
        css={css`
          text-align: left;
          padding: 12px 16px;
          height: 48px;
          font-family: Open Sans, sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #767676;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          :hover,
          :focus {
            color: #de8e0e;
            border-color: #de8e0e;
            box-shadow: 0 0 0 2px rgba(222, 142, 14, 0.2);
          }
        `}
        // key={placeholderVal}
      >
        {placeholderVal ? placeholder : val} <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export const BooleanToggle = ({ list, value, valueList, onChange }) => {
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

export const DatePickerr = () => {
  return (
    <DatePicker
      css={css`
        padding: 0 0.5rem;
        input {
          border: 0;
        }

        :hover,
        :focus,
        :active {
          color: #de8e0e;
          border-color: #de8e0e;
          box-shadow: 0 0 0 2px rgba(222, 142, 14, 0.2);
          *,
          input,
          .ant-picker-focused {
            color: #de8e0e;
            border-color: #de8e0e;
          }
        }
      `}
    />
  )
}
