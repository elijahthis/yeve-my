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

const WithdrawEarnings = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 40px;
        width: clamp(300px, 80vw, 466px);
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
          width: 348px;
          margin-bottom: 32px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        form {
          width: 100%;
        }
        .form-div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 12px;
          line-height: 18px;
          color: #343434;
        }
        input,
        textarea {
          padding: 12px 16px;
          border-radius: 4px;
          background-color: #fafafa;
          border: 1px solid #d2d2d2;
          font-weight: 600;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
            margin-top: 0;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 24px;
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
      <h4>Withdraw Earnings</h4>
      <p>Enter your withdrawal details</p>
      <form action="">
        <div className="form-div">
          <label htmlFor="">
            Enter amount to withdraw
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter amount to withdraw"
            />
          </label>
          <label htmlFor="">
            Select payment account <DropdownMenu list={[0, 1, 2]} />
          </label>
        </div>
      </form>
      <div tw="w-full mt-10">
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Withdraw"
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default WithdrawEarnings
