import 'antd/dist/antd.css'
import Image from 'next/image'
import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { YeveGroupLogo1 } from '../../Logos'
import { MenuIcon } from '../../../pieces/svgs'
import { GoMail } from 'react-icons/go'
import { FiCalendar } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import profileImg from '../../../../images/profile-img.png'

const YeveGroupNavbar = ({ sideOpen, setSideOpen }) => {
  const navCSS = css`
    display: grid;
    grid-template-columns: 216px 1fr;
    flex-direction: row;
    align-items: center;
    padding: 1.75rem 24px;

    input {
      font-size: 14px;
      width: 308px;
      background-color: #f8f8f8;
    }

    ul {
      list-style-type: none;
      li {
        cursor: pointer;
      }
    }
    @media (max-width: 1140px) {
      display: none;
    }
  `
  return (
    <>
      <header css={navCSS} tw="border-b border-[#e5e5e5]">
        <div>
          <YeveGroupLogo1 />
        </div>
        <div tw="flex flex-row items-center justify-between gap-24">
          <form
            action=""
            tw="flex flex-row items-center gap-3 py-3 px-5 bg-[#f8f8f8] rounded"
          >
            <FaSearch color="#767676" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search group members"
            />
          </form>
          <div tw="flex flex-row items-center gap-10">
            <ul tw="flex flex-row items-center gap-10">
              <li>Request a service</li>
              <li>Offer a service</li>
            </ul>
            <Image src={profileImg} alt="" width="40px" height="40px" />
          </div>
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
        <MenuIcon
          onClick={() => {
            setSideOpen(!sideOpen)
          }}
        />
        <div tw="flex flex-row items-center gap-6">
          <FaSearch size={24} color="#767676" />
          <BiBell size={24} color="#404040" />
          <Image src={profileImg} alt="" width="24px" height="24px" />
        </div>
      </header>
    </>
  )
}

export default YeveGroupNavbar
