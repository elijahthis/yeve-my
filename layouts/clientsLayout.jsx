import tw, { css } from 'twin.macro'
import { useState } from 'react'
import MainNav from '../components/UI/NavBars/MainNav'
import SideBar from '../components/UI/Sidebars/SideBar'
import { BsShop } from 'react-icons/bs'

const ClientsLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false)
  const menuItems = [
    { icon: <BsShop />, label: 'Services', route: 'services' },
    { icon: <BsShop />, label: 'Requests', route: 'requests' },
    { icon: <BsShop />, label: 'My Profile', route: 'my-profile' },
    { icon: <BsShop />, label: 'Messages', route: 'messages' },
    { icon: <BsShop />, label: 'Events', route: 'events' },
    { icon: <BsShop />, label: 'Calendar', route: 'calendar' },
    { icon: <BsShop />, label: 'Account', route: 'account' },
  ]

  return (
    <>
      <MainNav
        sideOpen={sideOpen}
        setSideOpen={setSideOpen}
        permissions="client"
      />
      <main
        css={css`
          display: grid;
          grid-template-columns: clamp(220px, 17vw, 240px) 1fr;
          min-height: 0;
          height: calc(100vh - 102px);
          @media (max-width: 1140px) {
            display: block;
            overflow: ${sideOpen ? 'hidden' : 'visible'};
          }
        `}
      >
        <SideBar
          menuList={menuItems}
          sideOpen={sideOpen}
          setSideOpen={setSideOpen}
        />
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
            position: fixed;
            top: 0;
            left: 0;
            display: ${sideOpen ? 'block' : 'none'};
            z-index: 6;
          `}
          onClick={() => {
            setSideOpen(false)
          }}
        ></div>
        {children}
      </main>
    </>
  )
}

export default ClientsLayout
