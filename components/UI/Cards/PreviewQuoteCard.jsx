import 'antd/dist/antd.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import imgPlaceholder from '../../../images/card-banner.png'
import premiumIcon from '../../../images/premium-icon.png'
import profilePlaceholder from '../../../images/profile-placeholder.png'
import Button from '../Buttons/Button'
import { QuoteSent } from '../Modals/ModalChildren/'

const PreviewQuoteCard = ({ setOpenModal, setModalChild }) => {
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
        <span tw="text-[#343434]">by John Smith</span>
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
        <Button
          variant="primary"
          onClick={() => {
            setModalChild(<QuoteSent setOpenModal={setOpenModal} />)
            setOpenModal(true)
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  )
}

export default PreviewQuoteCard
