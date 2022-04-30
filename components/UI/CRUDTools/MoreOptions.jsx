import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { MdOutlineMoreVert } from 'react-icons/md'

const MoreOptions = ({ moreList }) => {
  const [openPopUp, setOpenPopUp] = useState(false)
  useEffect(() => {
    document.body.addEventListener('click', () => setOpenPopUp(false))
  }, [])

  return (
    <div
      css={css`
        svg {
          cursor: pointer;
        }
      `}
    >
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
    </div>
  )
}

export default MoreOptions
