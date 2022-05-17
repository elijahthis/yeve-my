import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import tw, { css } from 'twin.macro'
import { YeveGroupLogo1, YeveGroupLogo2 } from '../../Logos'
import { YeveGroupItem } from './sidebarComponents'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { RoundPeople } from '../../../pieces/svgs'

const YeveGroupSidebar = ({
  groups,
  sideOpen,
  setSideOpen,
  currentSubGroup,
  setCurrentSubGroup,
}) => {
  const sideBar = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
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

  return (
    <aside css={sideBar}>
      <div>
        <YeveGroupLogo2 />
      </div>
      <div>
        <div
          tw="flex flex-row items-center justify-between"
          css={css`
            padding: 16px 24px;
            padding-right: 16px;
            border-bottom: 1px solid #e5e5e5;

            svg {
              cursor: pointer;
            }
          `}
        >
          <p tw="flex flex-row items-center gap-3">
            <RoundPeople size={24} color="#de8e0e" />
            GROUPS (2)
          </p>
          <MdAdd size="16" color="#de8e0e" />
        </div>
        <div
          css={css`
            > * {
              padding: 24px 0;
              border-bottom: 1px solid #e5e5e5;
            }
          `}
        >
          {groups.map((group, ind) => (
            <YeveGroupItem
              key={ind}
              group={group}
              currentSubGroup={currentSubGroup}
              setCurrentSubGroup={setCurrentSubGroup}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default YeveGroupSidebar
