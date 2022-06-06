import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import tw, { css } from 'twin.macro'

const SidebarItem = ({ item, setSideOpen }) => {
  const router = useRouter()
  const [openShelf, setOpenShelf] = useState(false)

  //   let childRoute = child ? child + '/' : ''

  let basePath = router.pathname.startsWith(`/vendors`)
    ? '/vendors/'
    : router.pathname.startsWith(`/clients`)
    ? '/clients/'
    : router.pathname.startsWith(`/admin`)
    ? '/admin/'
    : '/clients/'

  return (
    <div>
      <div
        css={css`
          background-color: ${router.pathname.startsWith(basePath + item.route)
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
          setOpenShelf(!openShelf)
          setSideOpen(false)
        }}
      >
        {item.icon}
        {item.label}
      </div>
      <div
        css={css`
          height: ${openShelf ? 'auto' : 0};
          transition: height 0.5s;
          overflow: hidden;
        `}
      >
        {item.extensible ? (
          item.list.map(subItem => (
            <div
              tw="flex flex-row items-center gap-5 text-sm py-4 px-6 pl-14 cursor-pointer"
              onClick={() => {
                router.push(
                  basePath + item.route + `/${subItem.route}`,
                  undefined,
                  {
                    shallow: true,
                  },
                )
              }}
              css={css`
                color: ${router.pathname.startsWith(basePath + item.route + `/${subItem.route}`)
                  ? '#de8e0e'
                  : ''};
              `}
            >
              {subItem.icon}
              {subItem.label}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
