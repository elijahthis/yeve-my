import tw, { css } from 'twin.macro'
import { useRouter } from 'next/router'
import { IoClose } from 'react-icons/io5'
import Button from '../../Buttons/Button'

const CancelEvent = ({ setOpenModal }) => {
  const router = useRouter()

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
      <h4>Cancel Event?</h4>
      <p>
        Note that three cancellations in a row can lead to suspension. Once you
        proceed with this action, it cannot be undone.
      </p>
      <label htmlFor="">
        Give reason for cancellation
        <textarea
          name=""
          id=""
          placeholder="Give reason for cancellation"
        ></textarea>
      </label>
      <div tw="flex flex-row items-center gap-9 w-full">
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          No
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setOpenModal(false)
            router.push('/vendors/my-requests')
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}

export default CancelEvent
