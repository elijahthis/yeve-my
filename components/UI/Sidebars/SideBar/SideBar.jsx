import { useRouter } from 'next/router'
import { useEffect } from 'react'
import tw, { css } from 'twin.macro'
import { YeveLogo2 } from '../../../Logo'

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
        <div
          key={ind}
          css={css`
            background-color: ${router.pathname.startsWith(
              basePath + item.route,
            )
              ? 'rgba(222, 142, 14, 0.05)'
              : 'transparent'};
            color: ${router.pathname.startsWith(basePath + item.route)
              ? '#1A1A1A'
              : '#767676'};
            border-right: ${router.pathname.startsWith(basePath + item.route)
              ? '4px solid #de8e0e'
              : '0'};
            cursor: pointer;
          `}
          tw="flex flex-row items-center gap-5 text-sm py-4 px-6"
          onClick={() => {
            router.push(basePath + item.route, undefined, { shallow: true })
            setSideOpen(false)
          }}
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </aside>
  )
}

export default SideBar
