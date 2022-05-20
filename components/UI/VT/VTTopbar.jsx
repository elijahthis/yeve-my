import tw, { css } from 'twin.macro'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/dist/client/image'
import { HeadSetIcon } from '../../pieces/svgs'
import { AddTalkback } from '../Modals/ModalChildren'
import { BsArrowsAngleExpand } from 'react-icons/bs'

const VTTopbar = ({ minified, setMinified, setShowSide }) => {
  return (
    <div
      css={css`
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        padding: 12px 16px;
        padding-right: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        border-bottom: 1px solid #e5e5e5;

        svg {
          cursor: pointer;
        }
      `}
    >
      <div tw="flex flex-row items-center gap-3">
        <HeadSetIcon color="#de8e0e" size="24" />
        <p>Virtual talkback</p>
      </div>
      <span
        onClick={() => {
          setMinified(true)
          setShowSide(true)
        }}
      >
        <BsArrowsAngleExpand />
      </span>
    </div>
  )
}

export default VTTopbar
