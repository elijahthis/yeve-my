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

const VendorReview = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 38px;
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
          font-size: 12px;
          line-height: 18px;
          max-width: 190px;
          color: #343434;
        }
        .button {
          padding: 6px 20px;
          background-color: #fafafa;
          color: #767676;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          font-weight: 600;
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
      <h4>Vendor Review</h4>
      <div tw="flex flex-col items-start gap-6 w-full">
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Was the vendor on time?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Were you satisfied with the vendor’s performance?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="flex flex-row items-center justify-between w-full">
          <p>Was the vendor professional?</p>
          <div tw="flex flex-row items-center gap-2">
            <button className="button">No</button>
            <button className="button">Yes</button>
          </div>
        </div>
        <div tw="w-full">
          <p tw="mb-1">Rate Vendor</p>
          <div tw="flex flex-row justify-center items-center w-full">
            <RatingStars size={38} active={true} />
          </div>
        </div>
        <div tw="flex flex-col items-start gap-1 w-full">
          <p>Add comments (optional)</p>
          <textarea
            name=""
            id=""
            tw="w-full"
            placeholder="Add comments (optional)"
          ></textarea>
        </div>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content="Report Issue"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, complete"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default VendorReview
