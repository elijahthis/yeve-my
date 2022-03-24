import tw, { css } from 'twin.macro'
import MainNav from '../components/mainNav'
import SideBar from '../components/sidebar'
import Home from '../components/vendors/home'
import Account from '../components/clients/account'
import Requests from '../components/vendors/requests'
import { BsShop } from 'react-icons/bs'
import { useState } from 'react'
import { PartContext } from '../contexts/vendorPart'

const Vendors = () => {
  const [sideOpen, setSideOpen] = useState(false)
  const [part, setPart] = useState(2)
  const [requestsPhase, setRequestsPhase] = useState(1)
  const menuItems = [
    { icon: <BsShop />, label: 'Home' },
    { icon: <BsShop />, label: 'My Requests' },
    { icon: <BsShop />, label: 'Plan Event' },
    { icon: <BsShop />, label: 'My Team' },
    { icon: <BsShop />, label: 'Account' },
    { icon: <BsShop />, label: 'Upgrade' },
    { icon: <BsShop />, label: 'Inbox' },
    { icon: <BsShop />, label: 'Calendar' },
  ]

  return (
    <PartContext.Provider value={part}>
      <MainNav
        sideOpen={sideOpen}
        setSideOpen={setSideOpen}
        permissions="vendor"
        setPart={setPart}
        setRequestsPhase={setRequestsPhase}
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
          <Home />
        ) : part === 1 ? (
          <Requests
            requestsPhase={requestsPhase}
            setRequestsPhase={setRequestsPhase}
          />
        ) : part === 2 ? (
          <Home />
        ) : part === 3 ? (
          <Home />
        ) : part === 4 ? (
          <Account />
        ) : part === 5 ? (
          <Home />
        ) : part === 6 ? (
          <Home />
        ) : part === 7 ? (
          <Home />
        ) : (
          <Home />
        )}
      </main>
    </PartContext.Provider>
  )
}

export default Vendors
