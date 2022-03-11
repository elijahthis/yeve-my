import Image from 'next/image'
import tw, { css } from 'twin.macro'
import { Logo, Button } from './../components'
import { GoMail } from 'react-icons/go'
import { FiCalendar } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import profileImg from '../images/profile-img.png'

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
`

const MainNav = () => {
  return (
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
        <BiBell size={25} color="#404040" />
        <Image src={profileImg} alt="" width="40px" height="40px" />
      </div>
    </header>
  )
}

export default MainNav
