import tw, { css } from 'twin.macro'
import MainNav from '../components/mainNav'
import SideBar from '../components/sidebar'
import Profile from '../components/clients/profile'
import Services from '../components/clients/services'
import Requests from '../components/clients/requests'
import Account from '../components/clients/account'
import Events from '../components/clients/events'
import { BsShop } from 'react-icons/bs'
import { useState } from 'react'

const ClientLayout = () => {
  const [part, setPart] = useState(2)
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [sideOpen, setSideOpen] = useState(false)
  const menuItems = [
    { icon: <BsShop />, label: 'Services' },
    { icon: <BsShop />, label: 'Requests' },
    { icon: <BsShop />, label: 'My Profile' },
    { icon: <BsShop />, label: 'Messages' },
    { icon: <BsShop />, label: 'Events' },
    { icon: <BsShop />, label: 'Calendar' },
    { icon: <BsShop />, label: 'Account' },
  ]
  return (
    <>
      <MainNav sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <main
        css={css`
          display: grid;
          grid-template-columns: 240px 1fr;
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
          part={part}
          setPart={setPart}
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
        {part === 0 ? (
          <Services
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalChild={modalChild}
            setModalChild={setModalChild}
          />
        ) : part === 1 ? (
          <Requests
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalChild={modalChild}
            setModalChild={setModalChild}
          />
        ) : part === 2 ? (
          <Profile />
        ) : part === 3 ? (
          <Profile />
        ) : part === 4 ? (
          <Events />
        ) : part === 5 ? (
          <Profile />
        ) : part === 6 ? (
          <Account />
        ) : (
          <Profile />
        )}
      </main>
    </>
  )
}

export default ClientLayout
