import 'antd/dist/antd.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import imgPlaceholder from '../../../images/card-banner.png'
import premiumIcon from '../../../images/premium-icon.png'
import profilePlaceholder from '../../../images/profile-placeholder.png'
import { ProceedButton } from '../../pieces/Buttons'
import { EventAccepted } from '../Modals/ModalChildren/'

const ViewGigCard = ({ setOpenModal, setModalChild }) => {
  const router = useRouter()

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
        <div tw="flex flex-col items-start">
          <span tw="text-[#343434]">by John Smith</span>
          <span tw="text-[#767676] text-xs">5m ago</span>
        </div>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Event Details</h5>
        <div
          tw="w-full mt-3"
          css={css`
            > * {
              > :first-child {
                font-size: 12px;
              }
            }
          `}
        >
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Event Type:</span>
            <span>Birthday Party</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Date:</span>
            <span>09 May 2020</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Time:</span>
            <span>13:00</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-2">
            <span>Dress Code:</span>
            <span>Smart Casual</span>
          </div>
          <div tw="flex flex-row items-center justify-between w-full mb-4">
            <span>Price:</span>
            <span>£120</span>
          </div>
        </div>
      </div>
      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>Location</h5>
        <p>1 London Street, London Road, Greater, London SE1 2AB</p>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton bg="#f8f8f8" col="#767676" content="Reject" />
        <div
          css={css`
            width: 150%;
          `}
        >
          <ProceedButton
            bg="#1a1a1a"
            col="#ffffff"
            content="Generate Quote"
            onClick={() => {
              router.push('/vendors/my-requests/generate-quoteA')
            }}
          />
        </div>
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Accept"
          onClick={() => {
            setModalChild(<EventAccepted setOpenModal={setOpenModal} />)
            setOpenModal(true)
          }}
        />
      </div>
    </div>
  )
}

export default ViewGigCard
