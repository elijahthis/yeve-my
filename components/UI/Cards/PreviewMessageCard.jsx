import 'antd/dist/antd.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import imgPlaceholder from '../../../images/card-banner.png'
import { ProceedButton } from '../../pieces/Buttons'
import { MessageSent } from '../Modals/ModalChildren/'

const PreviewMessageCard = ({ setOpenModal, setModalChild }) => {
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

      <div tw="border-b border-[#E5E5E5] w-full py-4">
        <h5>The Future of Events: No one knows</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum
          dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
          magna ut loremconsequat. Lorem ipsum dolor sit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem
          ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. A magna ut lorem consequat. Lorem ipsum dolor sit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. A magna ut lorem
          consequat. Lorem ipsum dolor sit.
        </p>
      </div>

      <div tw="flex flex-row items-center gap-9 w-full mt-4">
        <ProceedButton bg="white" col="#1a1a1a" content="Cancel" />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Send Message"
          onClick={() => {
            setModalChild(<MessageSent setOpenModal={setOpenModal} />)
            setOpenModal(true)
          }}
        />
      </div>
    </div>
  )
}

export default PreviewMessageCard
