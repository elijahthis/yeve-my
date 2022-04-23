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

const CreatePost = ({ setOpenModal }) => {
  const [phase, setPhase] = useState(0)
  const [formData, setFormData] = useState({
    imageURL: '',
    body: '',
    time: '5min',
  })
  switch (phase) {
    case 0:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 1:
      return (
        <CreatePostPhase1
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 2:
      return (
        <CreatePostPhase2
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )

    default:
      return (
        <CreatePostPhase0
          setOpenModal={setOpenModal}
          setPhase={setPhase}
          formData={formData}
          setFormData={setFormData}
        />
      )
  }
}

export default CreatePost
