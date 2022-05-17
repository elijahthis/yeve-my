import { IoClose } from 'react-icons/io5'
import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import Button from '../../Buttons/Button'
import { InvitationSent } from './'

const EditTables = ({
  setOpenModal,
  setModalChild,
  capacity,
  setCapacity,
  tableCount,
  setTableCount,
}) => {
  const [myCapacity, setMyCapacity] = useState(capacity)
  const [myTableCount, setMyTableCount] = useState(tableCount)
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
        <h4>Edit Tables</h4>
        <form action="">
          <div className="form-div">
            <label htmlFor="">
              Total Tables
              <input
                type="text"
                size=""
                pattern="[0-9]{10}"
                name=""
                id=""
                value={myTableCount}
                onChange={ev => {
                  setMyTableCount(
                    Number.isNaN(parseInt(ev.target.value))
                      ? 1
                      : parseInt(ev.target.value),
                  )
                }}
              />
            </label>
            <label htmlFor="">
              Tables allocated
              <input type="number" name="" id="" placeholder="19" />
            </label>
            <label htmlFor="">
              Seat per table
              <input
                type="text"
                size=""
                pattern="[0-9]{10}"
                name=""
                id=""
                value={myCapacity}
                onChange={ev => {
                  setMyCapacity(
                    Number.isNaN(parseInt(ev.target.value))
                      ? 1
                      : parseInt(ev.target.value),
                  )
                }}
              />
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
            onClick={() => {
              setCapacity(myCapacity)
              setTableCount(myTableCount)
              setOpenModal(false)
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditTables
