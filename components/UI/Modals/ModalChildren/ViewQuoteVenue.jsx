import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import tw, { css } from 'twin.macro'
import imgPlaceholder from '../../../../images/card-banner.png'
import premiumIcon from '../../../../images/premium-icon.png'
import profilePlaceholder from '../../../../images/profile-placeholder.png'
import Button from '../../Buttons/Button'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const ViewQuoteVenue = ({ setOpenModal }) => {
  const images = ['/images/wedding-loc-2.png', '/images/wedding-loc-3.png']
  const [imgInd, setImgInd] = useState(0)
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

        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin: 1rem 0;
          margin-bottom: 1.5rem;
        }

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
      <h4>Venue Details</h4>
      <div
        tw="relative"
        css={css`
          svg {
            cursor: pointer;
            position: absolute;
            top: 50%;
            z-index: 1;
            transform: translateY(-50%);
            color: white;
          }
          > :first-child {
            left: 0;
          }
          > :nth-child(3) {
            right: 0;
          }
        `}
      >
        <FiChevronLeft
          size="40"
          onClick={() => {
            if (imgInd === 0) setImgInd(images.length - 1)
            else setImgInd((imgInd - 1) % images.length)
          }}
        />
        <Image src={images[imgInd]} width="516" height="190" />
        <FiChevronRight
          size="40"
          onClick={() => {
            setImgInd((imgInd + 1) % images.length)
          }}
        />
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
        <h5>Location</h5>
        <p>1 London Street, London Road, Greater, London SE1 2AB</p>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Proposed Pricing</h5>
        <p>&#163;120</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Reject
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  )
}

export default ViewQuoteVenue
