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

const EditTables = ({ setOpenModal, setModalChild, capacity, setCapacity }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
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
          margin: 0;
        }
        > * {
          width: 100%;
        }
        form {
          margin-top: 20px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <div css={formCoreStyles}>
        <IoClose
          size={24}
          tw="absolute right-6 cursor-pointer"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <h4>Edit Tables</h4>
        <form action="">
          <div className="form-div">
            <label htmlFor="">
              Total Tables
              <input type="number" name="" id="" placeholder="50" />
            </label>
            <label htmlFor="">
              Tables allocated
              <input type="number" name="" id="" placeholder="19" />
            </label>
            <label htmlFor="">
              Seat per table
              <input
                type="text"
                name=""
                id=""
                value={capacity.val}
                onChange={ev => {
                  const newCapacity = { ...capacity }
                  newCapacity.val = ev.target.value
                  setCapacity(newCapacity)
                  console.log(capacity)
                }}
              />
            </label>
          </div>
        </form>
        <div tw="w-full mt-6 flex flex-row items-center gap-4">
          <ProceedButton
            bg="#fafafa"
            col="#767676"
            content="Cancel"
            onClick={() => {
              setOpenModal(false)
            }}
          />
          <ProceedButton
            bg="#de8e0e"
            col="white"
            content="Save"
            onClick={() => {
              setModalChild(
                <InvitationSent setOpenModal={setOpenModal} email={'email'} />,
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default EditTables
