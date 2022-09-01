import tw, { css } from 'twin.macro'
import { useState } from 'react'
import 'antd/dist/antd.css'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const DropdownMenu = ({ list, placeholder, onChange }) => {
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
          width: 100%;
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

export default DropdownMenu
