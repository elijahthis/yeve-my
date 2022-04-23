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

const CreatePostPhase0 = ({
  setOpenModal,
  setPhase,
  formData,
  setFormData,
}) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (formData.imageURL !== '') {
      setActive(true)
      console.log('its: ' + formData.imageURL)
    } else setActive(false)
  }, [formData])
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
          width: 278px;
          margin-top: 6px;
          color: #000000;
          font-size: 14px;
        }
        span {
          margin-bottom: 13px;
          font-weight: 600;
          font-size: 12px;
          color: #8c8c8c;
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
          setPhase(0)
          setOpenModal(false)
        }}
      />
      <h4>Create Post</h4>
      <p>Upload photos or videos</p>
      <div
        tw="w-full"
        css={css`
          margin-top: 48px;
          margin-bottom: 24px;
        `}
      >
        <ImageUploadPreview
          limit={1}
          onChangeFunc={val => {
            const newData = { ...formData }
            newData.imageURL = val
            setFormData(newData)
          }}
        />
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg={active ? '#de8e0e' : '#D2D2D2'}
          col={active ? 'white' : '#8C8C8C'}
          content="Upload"
          onClick={() => {
            active ? setPhase(1) : null
          }}
        />
      </div>
    </div>
  )
}

export default CreatePostPhase0
