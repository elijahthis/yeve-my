import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Checkbox } from 'antd'
import { MuteMic } from '../../../pieces/svgs'
import { MdOutlineMoreVert } from 'react-icons/md'
import { AddPersonIcon } from '../../../pieces/svgs'

const AttendeePerson = ({ attendee }) => {
  return (
    <div tw="flex flex-row items-center gap-4 mb-4 w-full relative">
      <div tw="w-8 h-8 relative">
        <Image src={attendee.image} layout="fill" />
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
        <p>{attendee.name + (attendee.you ? ' (You)' : '')}</p>
        <div tw="flex flex-row items-center gap-4">
          <MuteMic size={22} color="#343434" />
          <MdOutlineMoreVert size={18} />
        </div>
      </div>
    </div>
  )
}

export default AttendeePerson
