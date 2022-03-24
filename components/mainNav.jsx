import Image from 'next/image'
import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { Logo, Button } from './../components'
import { GoMail } from 'react-icons/go'
import { FiCalendar } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import profileImg from '../images/profile-img.png'
import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { FeaturesToolTip, NotificationsToolTip } from './pieces/Tooltips'

const navCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 5rem;

  input {
    font-size: 14px;
    width: 308px;
    background-color: #f8f8f8;
  }
  @media (max-width: 1140px) {
    display: none;
  }
`

const MainNav = ({ sideOpen, setSideOpen, permissions, setPart }) => {
  const [showNotif, setShowNotif] = useState(false)
  useEffect(() => {
    document.body.addEventListener('click', () => {
      setShowNotif(false)
    })
  }, [])

  return (
    <>
      <header css={navCSS} tw="border-b border-[#e5e5e5]">
        <div tw="flex flex-row items-center gap-24">
          <Logo />
          <form
            action=""
            tw="flex flex-row items-center gap-3 py-3 px-5 bg-[#f8f8f8] rounded"
          >
            <FaSearch color="#767676" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for a vendor eg. “Drummer” “Decorator” "
            />
          </form>
        </div>
        <div tw="flex flex-row items-center gap-10">
          <GoMail size={25} color="#404040" />
          <FiCalendar size={25} color="#404040" />
          <div tw="relative">
            <BiBell
              size={25}
              color="#404040"
              onClick={ev => {
                ev.stopPropagation()
                setShowNotif(!showNotif)
              }}
              tw="cursor-pointer"
            />
            <div
              css={css`
                position: absolute;
                transform: translate3d(-80%, 15%, 0);
                background-color: #ffffff;
                border-radius: 4px;
                box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
                z-index: 4;
                display: ${showNotif ? 'block' : 'none'};
              `}
              className="notifications"
              onClick={ev => {
                ev.stopPropagation()
              }}
            >
              <NotificationsToolTip />
            </div>
          </div>

          <Image src={profileImg} alt="" width="40px" height="40px" />
        </div>
      </header>
      <header
        css={css`
          padding: 21px clamp(21px, 6vw, 80px);
          display: none;
          @media (max-width: 1140px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            svg {
              width: 24px;
              height: 24px;
            }
          }
        `}
      >
        <svg
          width="22"
          height="7"
          viewBox="0 0 22 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          tw="cursor-pointer"
          onClick={() => {
            setSideOpen(!sideOpen)
          }}
        >
          <rect
            width="22"
            height="2"
            rx="1"
            transform="matrix(-1 0 0 1 22 0)"
            fill="#404040"
          />
          <rect
            width="16"
            height="2"
            rx="1"
            transform="matrix(-1 0 0 1 22 5)"
            fill="#404040"
          />
        </svg>
        <div tw="flex flex-row items-center gap-6">
          <FaSearch size={24} color="#767676" />
          <BiBell size={24} color="#404040" />
          <Image src={profileImg} alt="" width="24px" height="24px" />
        </div>
      </header>
    </>
  )
}

export default MainNav
