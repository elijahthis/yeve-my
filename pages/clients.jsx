import tw, { css } from 'twin.macro'
import MainNav from '../components/mainNav'
import SideBar from '../components/sidebar'
import Profile from '../components/clients/profile'
import Services from '../components/clients/services'
import Requests from '../components/clients/requests'
import { BsShop } from 'react-icons/bs'
import { useState } from 'react'

const ClientLayout = () => {
  const [part, setPart] = useState(2)
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
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
      <MainNav />
      <main
        css={css`
          display: grid;
          grid-template-columns: 240px 1fr;
          min-height: 0;
          height: calc(100vh - 102px);
        `}
      >
        <SideBar menuList={menuItems} part={part} setPart={setPart} />
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
          <Profile />
        ) : part === 5 ? (
          <Profile />
        ) : part === 6 ? (
          <Profile />
        ) : (
          <Profile />
        )}
      </main>
    </>
  )
}

export default ClientLayout
