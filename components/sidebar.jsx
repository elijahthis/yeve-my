import tw, { css } from 'twin.macro'

const sideBar = css`
  // font-size
`

const SideBar = ({ menuList, part, setPart }) => {
  return (
    <aside tw="flex flex-col gap-2 py-4 border-r border-[#e5e5e5] font-semibold">
      {menuList.map((item, ind) => (
        <div
          key={ind}
          css={css`
            background-color: ${part === ind
              ? 'rgba(222, 142, 14, 0.05)'
              : 'transparent'};
            color: ${part === ind ? '#1A1A1A' : '#767676'};
            border-right: ${part === ind ? '4px solid #de8e0e' : '0'};
            cursor: pointer;
          `}
          tw="flex flex-row items-center gap-5 text-sm py-4 px-6"
          onClick={() => {
            setPart(ind)
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
