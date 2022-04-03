import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { DatePicker, Radio, Menu, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { FaSearch } from 'react-icons/fa'
import 'antd/dist/antd.css'
import { Switch } from 'antd'
import {
  MdOutlineModeEdit,
  MdDeleteOutline,
  MdOutlineMoreVert,
} from 'react-icons/md'
import { FiCalendar } from 'react-icons/fi'

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

export const ProgressBar = ({ percent }) => (
  <div
    css={css`
      width: 100%;
      border-radius: 20px;
      .bar {
        background-color: #de8e0e;
        height: 8px;
        width: ${percent}%;
        border-radius: 20px;
      }
    `}
  >
    <div tw="w-full">
      <div className="bar"></div>
    </div>
    <p>{percent}% complete</p>
  </div>
)

export const SearchBar = ({ placeholder }) => (
  <div tw="flex flex-row items-center gap-3 px-4 py-3 bg-[#FEFEFE] text-[#767676] rounded border border-[#E5E5E5]">
    <FaSearch />
    <input type="search" name="" id="" placeholder={placeholder} />
  </div>
)

export const ToggleText = ({
  checkedChildren,
  unCheckedChildren,
  changeFunc,
}) => {
  return (
    <div
      css={css`
        button {
          height: 32px;
          width: 92px;
          > * {
            padding: 5px 0;
          }
          .ant-switch-handle {
            width: 25px;
            height: 25px;
            top: 3px;
            ::before {
              border-radius: 50%;
            }
          }
        }
        .ant-switch-checked > div {
          left: calc(100% - 25px - 2px);
        }
      `}
    >
      <Switch
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        defaultChecked
        size="default"
        onClick={ev => {
          changeFunc(ev)
        }}
      />
    </div>
  )
}

export const DateFilter = () => {
  const filters = ['1D', '30D', '1Y', 'All']
  const [active, setActive] = useState(0)
  return (
    <div
      tw="flex flex-row items-center gap-3"
      css={css`
        background: #ffffff;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 8px;
        max-width: 213px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          span {
            padding: 6px 12px;
            border-radius: 5px;
            cursor: pointer;
            color: #767676;
            :hover {
              color: #de8e0e;
            }
          }
        `}
      >
        {filters.map((filter, ind) => (
          <span
            css={
              active === ind
                ? css`
                    background: #fdf9f3;
                    color: #de8e0e;
                  `
                : null
            }
            onClick={() => setActive(ind)}
            key={ind}
          >
            {filter}
          </span>
        ))}
      </div>
      <FiCalendar size={16} />
    </div>
  )
}

export const CrudOptions = ({ more, moreList }) => {
  const [openPopUp, setOpenPopUp] = useState(false)
  useEffect(() => {
    document.body.addEventListener('click', () => setOpenPopUp(false))
  }, [])

  return (
    <div
      tw="flex flex-row items-center gap-12"
      css={css`
        svg {
          cursor: pointer;
        }
      `}
    >
      <div tw="flex flex-row items-center gap-6">
        <MdOutlineModeEdit size={18} />
        <MdDeleteOutline size={18} />
      </div>
      {more ? (
        <div
          tw="relative"
          onClick={ev => {
            ev.stopPropagation()
          }}
        >
          <div onClick={() => setOpenPopUp(!openPopUp)}>
            <MdOutlineMoreVert size={18} />
          </div>
          {openPopUp ? moreList : null}
        </div>
      ) : null}
    </div>
  )
}
