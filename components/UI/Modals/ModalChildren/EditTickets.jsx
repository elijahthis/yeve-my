import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import { ProceedButton } from '../../../pieces/Buttons'

const EditTickets = ({ setOpenModal, setModalChild }) => {
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
        <h4>Edit TIckets</h4>
        <form action="">
          <div className="form-div">
            <>
              <div>
                <p tw="text-base">Number of tickets</p>
                <div
                  tw=" flex flex-row items-center gap-4 justify-between"
                  css={css`
                    > * {
                      width: 30%;
                    }
                  `}
                >
                  <label htmlFor="">
                    Early Bird
                    <input type="number" name="" id="" />
                  </label>
                  <label htmlFor="">
                    Standard
                    <input type="number" name="" id="" />
                  </label>
                  <label htmlFor="">
                    VIP
                    <input type="number" name="" id="" />
                  </label>
                </div>
              </div>
              <div>
                <p tw="text-base">Ticket Pricing</p>
                <div
                  tw=" flex flex-row items-center gap-4 justify-between"
                  css={css`
                    > * {
                      width: 30%;
                    }
                  `}
                >
                  <label htmlFor="">
                    Early Bird
                    <div tw="flex flex-row items-center">
                      <div
                        tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                        css={css`
                          height: 47px;
                        `}
                      >
                        &#163;
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          borderRadius: '0 4px 4px 0',
                          borderLeft: 0,
                        }}
                        tw="w-full"
                        //   value={formData.budget[ind].from}
                        //   onChange={ev => {
                        //     const newData = { ...formData }
                        //     newData.budget[ind].from = Number.isNaN(
                        //       parseInt(ev.target.value),
                        //     )
                        //       ? 0
                        //       : parseInt(ev.target.value)
                        //     setFormData(newData)
                        //   }}
                      />
                    </div>
                  </label>
                  <label htmlFor="">
                    Standard
                    <div tw="flex flex-row items-center">
                      <div
                        tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                        css={css`
                          height: 47px;
                        `}
                      >
                        &#163;
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          borderRadius: '0 4px 4px 0',
                          borderLeft: 0,
                        }}
                        tw="w-full"
                        //   value={formData.budget[ind].from}
                        //   onChange={ev => {
                        //     const newData = { ...formData }
                        //     newData.budget[ind].from = Number.isNaN(
                        //       parseInt(ev.target.value),
                        //     )
                        //       ? 0
                        //       : parseInt(ev.target.value)
                        //     setFormData(newData)
                        //   }}
                      />
                    </div>
                  </label>
                  <label htmlFor="">
                    VIP
                    <div tw="flex flex-row items-center">
                      <div
                        tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                        css={css`
                          height: 47px;
                        `}
                      >
                        &#163;
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          borderRadius: '0 4px 4px 0',
                          borderLeft: 0,
                        }}
                        tw="w-full"
                        //   value={formData.budget[ind].from}
                        //   onChange={ev => {
                        //     const newData = { ...formData }
                        //     newData.budget[ind].from = Number.isNaN(
                        //       parseInt(ev.target.value),
                        //     )
                        //       ? 0
                        //       : parseInt(ev.target.value)
                        //     setFormData(newData)
                        //   }}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </>
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
            content="Save"
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

export default EditTickets
