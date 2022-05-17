import tw, { css } from 'twin.macro'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/dist/client/image'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { RoundPeople } from '../../../pieces/svgs'

export const YeveGroupItem = ({
  group,
  currentSubGroup,
  setCurrentSubGroup,
}) => {
  const [open, setOpen] = useState(false)
  const [subGroupHeight, setSubGroupHeight] = useState(0)
  const [mounted, setMounted] = useState(false)
  const subGroupRef = useRef(null)

  useEffect(() => {
    setSubGroupHeight(subGroupRef.current.clientHeight)
    setMounted(true)
    console.log(open)
  }, [])

  return (
    <div
      css={css`
        svg {
          cursor: pointer;
        }
      `}
    >
      <div
        tw="flex flex-row items-center justify-between"
        css={css`
          padding-left: 24px;
          padding-right: 16px;
        `}
      >
        <div tw="flex flex-row items-center gap-3">
          <Image src={group.image} width={32} height={32} />
          <p>{group.name}</p>
        </div>
        <div tw="flex flex-row items-center gap-3">
          <MdAdd size="16" color="#de8e0e" />
          <span
            onClick={() => {
              setOpen(!open)
            }}
          >
            <div
              css={css`
                transform: rotate(${open ? '180deg' : '0'});
                transition: transform 0.5s;
              `}
            >
              <BiChevronDown size="24" color="#de8e0e" />
            </div>
          </span>
        </div>
      </div>
      <div
        css={css`
          margin-top: 1rem;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #343434;

          ${mounted ? `height: ${open ? subGroupHeight + 'px' : '0'};` : ``}
          overflow: hidden;
          transition: height 0.5s;

          .time {
            font-weight: 600;
            font-size: 10px;
            line-height: 16px;
            text-align: right;
            color: #767676;
          }
        `}
        ref={subGroupRef}
      >
        {group['sub-groups'].map(subGroup => (
          <div
            tw="flex flex-row items-center justify-between"
            css={css`
              padding: 4px 16px;
              padding-left: 68px;
              cursor: pointer;
              background-color: ${currentSubGroup?.subGroup === subGroup &&
              currentSubGroup?.name === group.name
                ? '#fff9ef'
                : '#ffffff'};
            `}
            onClick={() => {
              setCurrentSubGroup({ ...group, subGroup })
            }}
          >
            <div tw="flex flex-row items-center gap-2">
              <RoundPeople color="#767676" size={24} />
              <p>{subGroup}</p>
            </div>
            <p className="time">30 min ago</p>
          </div>
        ))}
      </div>
    </div>
  )
}
