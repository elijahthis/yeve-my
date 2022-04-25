import tw, { css } from 'twin.macro'
import { IoClose } from 'react-icons/io5'
import Button from '../../Buttons/Button'

export const ActivateEvent = ({
  setOpenModal,
  cardList,
  setCardList,
  vendor,
  cardInd,
}) => {
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
          width: 287px;
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
      <h4>Activate Event?</h4>
      <p>
        Activate event to confirm {vendor ? 'your' : 'vendor'} arrival to the
        event venue
      </p>
      <div tw="flex flex-row items-center gap-9 w-full">
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          No, Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            const newList = [...cardList]
            newList[cardInd].status = 'Activated'
            setCardList(newList)
            setOpenModal(false)
          }}
        >
          Yes, activate
        </Button>
      </div>
    </div>
  )
}

export default ActivateEvent
