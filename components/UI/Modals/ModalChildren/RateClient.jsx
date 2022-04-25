import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import Button from '../../Buttons/Button'
import RatingStars from '../../../pieces/ratingStars'

const RateClient = ({ setOpenModal }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 38px;
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
          font-size: 12px;
          line-height: 18px;
          max-width: 190px;
          color: #343434;
        }
        .button {
          padding: 6px 20px;
          background-color: #fafafa;
          color: #767676;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          font-weight: 600;
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
      <h4>Rate your client</h4>
      <div tw="flex flex-col items-start gap-11 w-full mt-12 mb-3">
        <div tw="w-full">
          <div tw="flex flex-row justify-center items-center w-full">
            <RatingStars size={38} active={true} />
          </div>
        </div>
        <div tw="flex flex-col items-start gap-1 w-full">
          <p>Add comments (optional)</p>
          <textarea
            name=""
            id=""
            tw="w-full"
            placeholder="Add comments (optional)"
          ></textarea>
        </div>
      </div>
      <div tw="flex flex-row items-center gap-9 w-full">
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Report Issue
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setOpenModal(false)
          }}
        >
          Yes, complete
        </Button>
      </div>
    </div>
  )
}

export default RateClient
