import { useRouter } from 'next/router'
import { useEffect } from 'react'
import tw, { css } from 'twin.macro'
import { YeveLogo2 } from '../../../Logo'
import SidebarItem from './SidebarItem'
import { getCurrentUser } from '../../../../services/requests/users'

const SideBar = ({ menuList, sideOpen, setSideOpen, child }) => {
  const router = useRouter()

  let childRoute = child ? child + '/' : ''

  let basePath = router.pathname.startsWith(`/vendors`)
    ? '/vendors/'
    : router.pathname.startsWith(`/clients`)
    ? '/clients/'
    : router.pathname.startsWith(`/admin`)
    ? '/admin/'
    : '/clients/'

  const sideBar = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
    border-right: 1px solid #e5e5e5;
    font-weight: 600;
    background-color: #ffffff;
    > :first-child {
      display: none;
    }
    @media (max-width: 1140px) {
      position: fixed;
      transition: left 0.3s;
      z-index: 7;
      left: ${sideOpen ? '0' : '-240px'};
      top: 0;
      width: 240px;
      height: 100vh;
      > :first-child {
        display: block;
        margin-top: 8px;
        margin-bottom: 17px;
        margin-left: 24px;
      }
    }
  `
  useEffect(() => {
    console.log(router.pathname, basePath)
    console.log(menuList)
  }, [])

  

  return (
    <aside css={sideBar}>
      <div>
        <YeveLogo2 />
      </div>
      {menuList.map((item, ind) => (
        <SidebarItem item={item} key={ind} setSideOpen={setSideOpen} />
      ))}
    </aside>
  )
}

export default SideBar
