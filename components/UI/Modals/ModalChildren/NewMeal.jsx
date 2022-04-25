import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import Button from '../../Buttons/Button'

const NewMeal = ({ setOpenModal, setModalChild }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
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
          margin: 0;
        }
        > * {
          width: 100%;
        }
        form {
          margin-top: 20px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <div css={formCoreStyles}>
        <IoClose
          size={24}
          tw="absolute right-6 cursor-pointer"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <h4>New Meal</h4>
        <form action="">
          <div className="form-div">
            <label htmlFor="">
              Meal Name
              <input type="text" name="" id="" placeholder="Enter meal name" />
            </label>
            <label htmlFor="">
              Meal Description
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter meal description"
              />
            </label>
            <label htmlFor="">
              Available Slots
              <input type="number" name="" id="" />
            </label>
          </div>
        </form>
        <div tw="w-full mt-6 flex flex-row items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            nClick={() => {
              setModalChild(
                <InvitationSent setOpenModal={setOpenModal} email={'email'} />,
              )
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewMeal
