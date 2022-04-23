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

const CreatePostPhase1 = ({
  setOpenModal,
  setPhase,
  formData,
  setFormData,
}) => {
  return (
    <div
      css={css`
        background-color: #ffffff;
        border-radius: 4px;

        width: clamp(300px, 80vw, 825px);
        text-align: center;
        font-weight: 600;
        position: relative;

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 4px;

          width: 100%;
          textarea {
            width: 100%;
            height: 180px;
            resize: none;
            background: #fafafa;
            border: 1px solid #d2d2d2;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
          }
          span {
            font-size: 12px;
            line-height: 18px;
            color: #343434;
          }
        }

        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
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
        tw="absolute right-6 cursor-pointer top-6"
        onClick={() => {
          setPhase(0)
          setOpenModal(false)
        }}
      />
      <div
        css={css`
          padding: 20px 0;
          border-bottom: 1px solid #e5e5e5;
        `}
      >
        <h4>Create Post</h4>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 21px;
          width: 100%;
          padding: 24px;
          > * {
            height: 370px;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            position: relative;
          `}
        >
          <Image src={formData.imageURL} alt="" layout="fill" />
        </div>
        <div tw="flex flex-col items-start justify-between">
          <div tw="flex flex-row items-center gap-2">
            <div
              css={css`
                width: 32px;
                height: 32px;
              `}
            >
              <Image src={profilePlaceholder} alt="" />
            </div>
            <p>John Smith</p>
          </div>
          <label htmlFor="">
            <span>Add Caption</span>
            <textarea
              name=""
              id=""
              placeholder="Add Caption"
              value={formData.body}
              onChange={ev => {
                const newData = { ...formData }
                newData.body = ev.target.value
                setFormData(newData)
              }}
            ></textarea>
            <span>0/60</span>
          </label>
          <ProceedButton
            bg="#de8e0e"
            col="white"
            content="Upload"
            onClick={() => {
              setPhase(2)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CreatePostPhase1
