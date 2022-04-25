import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import { InvitationSent } from './'
import Button from '../../Buttons/Button'

const CreateAdmin = ({ setOpenModal, setModalChild, email }) => {
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
          margin: 0;
        }
        > * {
          width: 100%;
        }
        form {
          margin-top: 40px;
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
        <h4>Create Admin</h4>
        <form action="">
          <div className="form-div">
            <label htmlFor="">
              Enter email
              <input type="email" name="" id="" placeholder="Enter email" />
            </label>
            <label htmlFor="">
              Enter title
              <input type="text" name="" id="" placeholder="Enter title" />
            </label>
            <div
              css={css`
                background: #fafafa;
                border-radius: 4px;
                padding: 12px 16px;
                label {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 15px;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 24px;
                  color: #7d849d;
                }
                > :first-child {
                  display: inline-block;
                  margin-bottom: 12px;
                }
              `}
            >
              <span>Select permissions</span>
              <label htmlFor="">
                View transaction history
                <input type="checkbox" name="" id="" />
              </label>
              <label htmlFor="">
                View vendors
                <input type="checkbox" name="" id="" />
              </label>
              <label htmlFor="">
                Manage subscriptions
                <input type="checkbox" name="" id="" />
              </label>
              <label htmlFor="">
                Withdrawals
                <input type="checkbox" name="" id="" />
              </label>
              <label htmlFor="">
                Help and support
                <input type="checkbox" name="" id="" />
              </label>
            </div>
          </div>
        </form>
        <div
          tw="w-full mt-10 flex flex-row items-center gap-4"
          css={css`
            > :first-child {
              width: 40%;
            }
          `}
        >
          <Button
            variant="secondary"
            col="#de8e0e"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setModalChild(
                <InvitationSent setOpenModal={setOpenModal} email={email} />,
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

export default CreateAdmin
