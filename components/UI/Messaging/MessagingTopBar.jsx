import tw, { css } from 'twin.macro'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/dist/client/image'
import { VideoIcon, HeadSetIcon, DetailsIcon } from '../../pieces/svgs'
import { AddTalkback } from '../Modals/ModalChildren'

const MessagingTopBar = ({
  currentSubGroup,
  showSide,
  setShowSide,
  setOpenModal,
  setModalChild,
}) => {
  const members = [
    {
      name: 'Elijah',
      image: '/images/Ellipse 56.png',
      role: 'Admin',
      you: true,
    },
    {
      name: 'John',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Derek',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Mike',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
  ]

  return (
    <div
      css={css`
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        padding: 12px 16px;
        padding-right: 112px;
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
        <Image
          src={currentSubGroup?.image || '/images/WhenWhere-3.png'}
          width={32}
          height={32}
        />
        <p>{currentSubGroup?.subGroup}</p>
      </div>
      <div tw="flex flex-row items-center gap-6">
        <VideoIcon color="#343434" size="24" />
        <span
          onClick={() => {
            setModalChild(
              <AddTalkback setOpenModal={setOpenModal} members={members} />,
            )
            setOpenModal(true)
          }}
        >
          <HeadSetIcon color="#343434" size="24" />
        </span>
        <DetailsIcon
          color="#343434"
          size="24"
          onClick={() => setShowSide(true)}
        />
      </div>
    </div>
  )
}

export default MessagingTopBar
