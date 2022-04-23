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

const ViewQuote = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 16px 24px;
        width: 564px;
        text-align: left;
        font-weight: 600;
        position: relative;

        h5 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #343434;
          font-family: Montserrat;
        }
        p {
          width: 100%;
          margin-top: 12px;
          color: #1a1a1a;
          font-size: 14px;
        }
        span {
          color: #343434;
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
      <div>
        <Image src={imgPlaceholder} />
      </div>
      <div tw="flex flex-row items-center gap-2 mt-5 mb-8">
        <div tw="w-8 h-8 relative">
          <Image src={profilePlaceholder} />
          <div tw="w-3 h-3 absolute bottom-0 right-0">
            <Image src={premiumIcon} />
          </div>
        </div>
        <span>by John Smith</span>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Description</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum
          dolor sit.
        </p>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Pricing</h5>
        <p>&#163;120</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Reject"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Accept"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default ViewQuote
