import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { Checkbox } from 'antd'
import { useState, useEffect } from 'react'

const MemberPerson = ({ member, selectable, selectAll, setSelectAll }) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (selectAll) {
      setChecked(selectAll)
    }
  }, [selectAll])

  useEffect(() => {
    if (!checked && setSelectAll) {
      setSelectAll(false)
    }
  }, [checked])

  return (
    <div tw="flex flex-row items-center gap-4 mb-4 w-full">
      <div tw="w-8 h-8 relative">
        <Image src={member.image} layout="fill" />
      </div>
      <div
        tw="flex flex-row items-center justify-between"
        css={css`
          width: 82%;
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          color: #1a1a1a;
        `}
      >
        <p>{member.name + (member.you ? ' (You)' : '')}</p>
        {selectable ? (
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
          />
        ) : member.role === 'Admin' ? (
          <p tw="text-xs text-gold font-semibold">Admin</p>
        ) : null}
      </div>
    </div>
  )
}

export default MemberPerson
