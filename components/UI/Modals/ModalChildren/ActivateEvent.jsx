import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { FiCheck, FiMoreVertical, FiLink } from 'react-icons/fi'
import imgPlaceholder from '../../../../images/card-banner.png'
import profilePlaceholder from '../../../../images/profile-placeholder.png'
import premiumIcon from '../../../../images/premium-icon.png'
import { CheckMark } from '../../../pieces/svgs'
import { ProceedButton } from '../../../pieces/Buttons'
import { DropdownMenu, DateFilter } from '../../../formTools'
import ImageUploadPreview from '../../../pieces/imageUploadPreview'
import RatingStars from '../../../pieces/ratingStars'
import { VendorInfoCard2 } from '../../../pieces/cards'
import { CustomTable } from '../../../pieces/customTable'
import { formCoreStyles } from '../../../../styles/GeneralStyles'

export const ActivateEvent = ({
  setOpenModal,
  cardList,
  setCardList,
  vendor,
  cardInd,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 28px;
        }
        p {
          width: 287px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <IoClose
        size={24}
        tw="absolute right-6 cursor-pointer"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <h4>Activate Event?</h4>
      <p>
        Activate event to confirm {vendor ? 'your' : 'vendor'} arrival to the
        event venue
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="No, Cancel"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, activate"
          onClick={() => {
            const newList = [...cardList]
            newList[cardInd].status = 'Activated'
            setCardList(newList)
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default ActivateEvent
