import tw, { css } from 'twin.macro'
import MainNav from '../components/UI/NavBars/MainNav'
import SideBar from '../components/UI/Sidebars/SideBar'
import { BsShop } from 'react-icons/bs'
import { useState } from 'react'

const AdminLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false)
  const menuItems = [
    {
      icon: <BsShop />,
      label: 'Dashboard',
      route: 'dashboard',
      extensible: true,
      list: [
        // { label: 'root', route: '/' },
        { icon: <BsShop />, label: 'Services', route: 'services' },
        { icon: <BsShop />, label: 'Dresscodes', route: 'dresscodes' },
        { icon: <BsShop />, label: 'Events', route: 'events' },
      ],
    },
    { icon: <BsShop />, label: 'Suppliers', route: 'suppliers' },
    { icon: <BsShop />, label: 'Customers', route: 'customers' },
    { icon: <BsShop />, label: 'Orders', route: 'orders' },
    { icon: <BsShop />, label: 'Messaging', route: 'messaging' },
    { icon: <BsShop />, label: 'Admins', route: 'admins' },
    { icon: <BsShop />, label: 'CMS', route: 'cms' },
    { icon: <BsShop />, label: 'Help & Support', route: 'help-and-support' },
  ]

  return (
    <>
      <MainNav
        sideOpen={sideOpen}
        setSideOpen={setSideOpen}
        permissions="vendor"
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

export default AdminLayout
