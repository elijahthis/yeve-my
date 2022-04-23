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

const CreatePostPhase2 = ({
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

        width: clamp(300px, 80vw, 902px);
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
      {/* <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            > * {
              height: 490px;
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
          <div>
            <div
              tw="flex flex-row items-center gap-2"
              css={css`
                padding: 20px;
                width: 100%;
                border-bottom: 1px solid #e5e5e5;
              `}
            >
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
            <div>
              <div>
                <span>{formData.time}</span>
                <p>{formData.body}</p>
              </div>
              <div>
                <div
                  css={css`
                    margin-left: 8px;
                  `}
                >
                  <p tw="font-semibold">Mike Jay</p>
                  <p tw="text-xs flex flex-row items-center gap-2">
                    <span>5 Min</span>
                    <span>Reply</span>
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div> */}

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: white;
          border-radius: 4px;
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
        <div>
          <div tw="flex flex-row justify-between items-center p-5 border-b border-[#e5e5e5]">
            <div tw="flex flex-row items-center gap-2">
              <Image
                src={profilePlaceholder}
                alt=""
                width="32px"
                height="32px"
              />
              <p>John Smith</p>
            </div>
            <div tw="flex flex-row items-center gap-5">
              Follow <FiMoreVertical />
            </div>
          </div>
          <div
            tw="px-5"
            css={css`
              > * {
                padding: 12px 0;
                border-bottom: 1px solid #e5e5e5;
              }
            `}
          >
            <div>
              <p tw="text-xs">5 Min</p>
              <p tw="text-xs font-semibold">{formData.body}</p>
            </div>
            <div tw="flex flex-col gap-4" style={{ padding: '16px 0' }}>
              <div tw="flex flex-row items-start">
                <Image
                  src={profilePlaceholder}
                  alt=""
                  width="32px"
                  height="32px"
                />
                <div
                  css={css`
                    margin-left: 8px;
                  `}
                >
                  <p tw="font-semibold">Mike Jay</p>
                  <p tw="text-xs flex flex-row items-center gap-2">
                    <span>5 Min</span>
                    <span>Reply</span>
                  </p>
                </div>
                <span
                  css={css`
                    margin-left: 25px;
                    font-size: 12px;
                  `}
                >
                  Brilliant!
                </span>
              </div>
              <div tw="flex flex-row items-start">
                <Image
                  src={profilePlaceholder}
                  alt=""
                  width="32px"
                  height="32px"
                />
                <div
                  css={css`
                    margin-left: 8px;
                  `}
                >
                  <p tw="font-semibold">Mike Jay</p>
                  <p tw="text-xs flex flex-row items-center gap-2">
                    <span>5 Min</span>
                    <span>Reply</span>
                  </p>
                </div>
                <span
                  css={css`
                    margin-left: 25px;
                    font-size: 12px;
                  `}
                >
                  Brilliant!
                </span>
              </div>
            </div>
            <div
              tw="flex flex-col gap-6"
              css={css`
                font-weight: 600;
              `}
            >
              <div tw="flex flex-row items-center justify-between">
                <div tw="flex flex-row items-center gap-7">
                  <AiOutlineHeart size={20} />
                  <AiOutlineShareAlt size={20} />
                </div>
                <span>32 likes</span>
              </div>
              <div tw="flex flex-row items-center justify-between">
                <span>Add Comment</span>
                <span tw="text-gold">Post</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePostPhase2
