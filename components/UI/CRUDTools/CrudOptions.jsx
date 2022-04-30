import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import {
  MdOutlineModeEdit,
  MdDeleteOutline,
  MdOutlineMoreVert,
  MdOutlineMail,
} from 'react-icons/md'

const CrudOptions = ({
  more,
  moreList,
  editFunc,
  deleteFunc,
  messageFunc,
  message,
}) => {
  const [openPopUp, setOpenPopUp] = useState(false)
  useEffect(() => {
    document.body.addEventListener('click', () => setOpenPopUp(false))
  }, [])

  return (
    <div
      tw="flex flex-row items-center gap-12"
      css={css`
        svg {
          cursor: pointer;
        }
      `}
    >
      <div tw="flex flex-row items-center gap-6">
        {message ? (
          <span
            onClick={() => {
              messageFunc ? messageFunc() : null
              console.log('editt')
            }}
          >
            <MdOutlineMail size={18} />
          </span>
        ) : null}
        <span
          onClick={() => {
            editFunc ? editFunc() : null
            console.log('editt')
          }}
        >
          <MdOutlineModeEdit size={18} />
        </span>
        <span
          onClick={() => {
            deleteFunc ? deleteFunc() : null
            console.log('deletee')
          }}
        >
          <MdDeleteOutline size={18} />
        </span>
      </div>
      {more ? (
        <div
          tw="relative"
          onClick={ev => {
            ev.stopPropagation()
          }}
        >
          <div onClick={() => setOpenPopUp(!openPopUp)}>
            <MdOutlineMoreVert size={18} />
          </div>
          {openPopUp ? moreList : null}
        </div>
      ) : null}
    </div>
  )
}

export default CrudOptions
