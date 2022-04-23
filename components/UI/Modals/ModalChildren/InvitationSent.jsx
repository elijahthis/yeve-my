import { useRouter } from 'next/router'
import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { CheckMark } from '../../../pieces/svgs'

const InvitationSent = ({ setOpenModal, email }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 34px 24px;
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
          margin-top: 24px;
          margin-bottom: 9px;
        }
        p {
          max-width: 206px;
          color: #7d849d;
          font-size: 14px;
          margin-bottom: 14px;
        }
        svg:nth-of-type(2) {
          margin-top: 48px;
        }
        @media (max-width: 1140px) {
          padding: 24px 34px;
          h4 {
            font-size: 16px;
            line-height: 24px;
          }
          p {
            color: #7d849d;
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
        }}
      />
      <CheckMark size={56} />
      <h4>Invitation Sent</h4>
      <p>An admin invitation has been sent to {email}</p>
    </div>
  )
}

export default InvitationSent
