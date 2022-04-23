import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { ProceedButton } from '../../../pieces/Buttons'

const CompleteEvent = ({ setOpenModal, setModalChild, vendor }) => {
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
          width: 348px;
          margin-bottom: 47px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
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
      <h4>Complete Event?</h4>
      <p>
        Complete event to confirm that the event has been completed.{' '}
        {vendor
          ? null
          : 'Kindly confirm within 48 hours or it will be automatically confirmed in the vendor’s favor'}
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <ProceedButton
          bg="#f8f8f8"
          col="#767676"
          content={vendor ? 'No, Cancel' : 'Report Issue'}
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <ProceedButton
          bg="#de8e0e"
          col="white"
          content="Yes, complete"
          onClick={() => {
            if (vendor)
              setModalChild(<RateClient setOpenModal={setOpenModal} />)
            else setOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}

export default CompleteEvent
