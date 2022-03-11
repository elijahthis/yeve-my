import tw, { css } from 'twin.macro'
import { ProceedButton } from './pieces/Buttons'
import { IoClose } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'

export const RequestSubmitted = ({ setOpenModal, setServicePhase }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: 466px;
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
        p {
          width: 278px;
          margin-bottom: 97px;
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
          setServicePhase(null)
        }}
      />
      <div tw="p-2 bg-white rounded-full text-[#65B02A] border-4 border-[#65B02A] mb-6 mt-10">
        <FiCheck strokeWidth={3} size={33} />
      </div>
      <h4>Request Submitted</h4>
      <p>
        We have submitted your request and it is processing. We will notify you
        when your gig has been accepted
      </p>
      <ProceedButton
        bg="#de8e0e"
        col="white"
        content="Back Home"
        onClick={() => {
          setOpenModal(false)
          setServicePhase(null)
        }}
      />
    </div>
  )
}

export const CancelRecurring = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: 466px;
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
        p {
          width: 278px;
          margin-bottom: 97px;
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
      <h4>Cancel Recurring</h4>
      <p>Once you proceed, this cannot be undone</p>
      <ProceedButton
        bg="white"
        col="#767676"
        content="No"
        onClick={() => {
          setOpenModal(false)
        }}
      />
      <ProceedButton
        bg="#de8e0e"
        col="white"
        content="Yes"
        onClick={() => {
          setOpenModal(false)
        }}
      />
    </div>
  )
}
