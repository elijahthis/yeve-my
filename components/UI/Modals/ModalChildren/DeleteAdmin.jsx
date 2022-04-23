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

const DeleteAdmin = ({ setOpenModal, email }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 34px 24px;
        width: clamp(300px, 80vw, 466px);
        text-align: center;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin-top: 24px;
          margin-bottom: 9px;
        }
        p {
          color: #7d849d;
          font-size: 14px;
          margin-bottom: 14px;
        }

        @media (max-width: 1140px) {
          padding: 24px 34px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #7d849d;
            font-weight: 400;
            margin-bottom: 32px;
          }
          > :first-child {
            right: 14px;
          }
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
      <h4>Delete Admin</h4>
      <p>
        Are you sure you want to delete this admin ({email})? Deleting this
        admin removes all access to the platform.
      </p>
      <div tw="flex flex-row items-center gap-9 w-full mt-11">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Cancel"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#E3394D"
          col="white"
          content="Delete"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default DeleteAdmin
