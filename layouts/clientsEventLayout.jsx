import tw, { css } from 'twin.macro'
import { useState } from 'react'
import MainNav from '../components/UI/NavBars/MainNav'
import SideBar from '../components/sidebar'
import { BsShop } from 'react-icons/bs'

const ClientsEventLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false)
  const menuItems = [
    {
      icon: <BsShop />,
      label: 'Dashboard',
      route: 'events/view-event/dashboard',
    },
    {
      icon: <BsShop />,
      label: 'Attendees',
      route: 'events/view-event/attendees',
    },
    {
      icon: <BsShop />,
      label: 'Yeve Group',
      route: 'events/view-event/yeve-group',
    },
    { icon: <BsShop />, label: 'RSVP', route: 'events/view-event/rsvp' },
    { icon: <BsShop />, label: 'Tickets', route: 'events/view-event/tickets' },
    {
      icon: <BsShop />,
      label: 'Settings',
      route: 'events/view-event/settings',
    },
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
          child="events/view-event"
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

export default ClientsEventLayout
