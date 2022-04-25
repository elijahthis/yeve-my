import { FiCheck } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import Button from '../../Buttons/Button'

const RequestSubmitted = ({ setOpenModal, setServicePhase }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 30px 25px;
        width: clamp(300px, 80vw, 466px);
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
          max-width: 278px;
          margin-bottom: 97px;
          margin-top: 12px;
          color: #000000;
          font-size: 14px;
        }
        @media (max-width: 1140px) {
          padding: 16px 14px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #767676;
            font-weight: 400;
            margin-bottom: 32px;
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
      <Button
        variant="primary"
        onClick={() => {
          setOpenModal(false)
          setServicePhase(null)
        }}
      >
        Back Home
      </Button>
    </div>
  )
}

export default RequestSubmitted
