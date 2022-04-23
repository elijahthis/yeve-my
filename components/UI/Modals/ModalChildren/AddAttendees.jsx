import tw, { css } from 'twin.macro'
import { IoClose } from 'react-icons/io5'
import { FiLink } from 'react-icons/fi'
import { ProceedButton } from '../../../pieces/Buttons'
import { formCoreStyles } from '../../../../styles/GeneralStyles'

const AddAttendees = ({ setOpenModal, setModalChild }) => {
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
        <h4>Add Attendees</h4>
        <form action="">
          <div className="form-div">
            <label htmlFor="">
              Email address
              <textarea
                name=""
                id=""
                placeholder="Enter Email then comma to add more"
              ></textarea>
            </label>
            <div
              tw="bg-[#FAFAFA] rounded mt-7"
              css={css`
                display: grid;
                grid-template-columns: 4fr 1fr;
                > * {
                  padding: 12px 16px;
                  font-weight: 600;
                }
              `}
            >
              <div tw="flex flex-row items-center gap-2 border-r border-[#e5e5e5]">
                <FiLink size={16} />
                <p tw="text-[#767676]">https://yeve.com/share-quote/0276516</p>
              </div>
              <button tw="h-full text-gold">Copy</button>
            </div>
          </div>
        </form>
        <div tw="w-full mt-6 flex flex-row items-center gap-4">
          <ProceedButton
            bg="#fafafa"
            col="#767676"
            content="Cancel"
            onClick={() => {
              setOpenModal(false)
            }}
          />
          <ProceedButton
            bg="#de8e0e"
            col="white"
            content="Add"
            onClick={() => {
              setModalChild(
                <InvitationSent setOpenModal={setOpenModal} email={'email'} />,
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default AddAttendees
