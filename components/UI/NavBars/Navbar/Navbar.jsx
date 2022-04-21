import { Button } from '../../.././../components'
// import Button
import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Link from 'next/link'
import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { FeaturesToolTip } from '../../../pieces/Tooltips'
import { YeveLogo1, YeveLogo2 } from '../../Logos'
import { MenuInvertedIcon } from '../../../pieces/svgs'

const linkItem = css`
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 3px;
    background-color: #de8e0e;
    transform: scale(0);
    transition: transform 0.3s;
  }
  :hover {
    ::after {
      transform: scale(1);
    }
  }
`
const active = css`
  color: #de8e0e;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 3px;
    background-color: #de8e0e;
    transform: scale(0);
    transition: transform 0.3s;
  }
  :hover {
    ::after {
      transform: scale(1);
    }
  }
`

const Navbar = ({ page, light }) => {
  const [navOpen, setNavOpen] = useState(false)
  const navItems = [
    { title: 'Home', tooltip: null },
    { title: 'Features', tooltip: <FeaturesToolTip /> },
    { title: 'Resources', tooltip: null },
    { title: 'Discover', tooltip: null },
  ]
  return (
    <>
      <header
        tw="flex flex-row justify-between px-20 py-7 text-sm text-white"
        css={css`
          padding: 28px clamp(21px, 6vw, 80px);

          @media (max-width: 1140px) {
            display: none;
          }
        `}
      >
        <YeveLogo1 />
        <nav>
          <ul tw="w-96 flex flex-row justify-between my-auto mx-0">
            {navItems.map((item, ind) => (
              <Tooltip
                title={item.tooltip ? item.tooltip : null}
                overlayInnerStyle={{
                  backgroundColor: 'rgba(255,255,255,1)',
                  width: 'max-content',
                }}
                arrowPointAtCenter={true}
                key={ind}
              >
                <li
                  css={ind === page ? active : linkItem}
                  tw="hover:cursor-pointer relative"
                  style={{
                    color: ind === page ? '#de8e0e' : light ? 'black' : 'white',
                  }}
                >
                  <span>{item.title}</span>
                </li>
              </Tooltip>
            ))}
          </ul>
        </nav>
        <div>
          <Link href="/login">
            <Button
              variant="round-outline"
              tw="bg-transparent text-white border-white hocus:(text-gold border-gold) mr-4"
              isSmall={true}
              css={css`
                transition: color 0.3s, background-color 0.3s, border-color 0.3s;
              `}
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="round-fill"
              tw="bg-white text-black border-white hocus:(bg-gold border-gold)"
              isSmall={true}
              css={css`
                transition: color 0.3s, background-color 0.3s;
              `}
            >
              Register
            </Button>
          </Link>
        </div>
      </header>
      <header
        tw="flex flex-row justify-between px-20 py-7 text-sm text-black1 bg-white relative"
        css={css`
          padding: 21px clamp(21px, 6vw, 80px);
          display: none;
          @media (max-width: 1140px) {
            display: flex;
          }
        `}
      >
        <YeveLogo2 />
        <div tw="flex flex-col items-end">
          <MenuInvertedIcon
            onClick={() => {
              setNavOpen(!navOpen)
            }}
          />
          <ul
            tw=" text-right mt-4"
            css={css`
              transition: height 0.3s;
              overflow: hidden;
            `}
            style={{ height: navOpen ? '136px' : '0' }}
          >
            {navItems.map((item, ind) => (
              <li
                key={ind}
                css={ind === page ? active : linkItem}
                tw="hover:cursor-pointer my-2"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar
