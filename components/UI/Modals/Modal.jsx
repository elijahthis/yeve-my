import tw, { css } from 'twin.macro'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, openModal, setOpenModal }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted &&
    createPortal(
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: ${openModal ? 'grid' : 'none'};
          place-items: center;
          overflow-y: scroll;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 2.5rem 6rem;
        `}
        onClick={() => {
          setOpenModal(false)
        }}
      >
        {openModal ? children : ''}
      </div>,
      document.querySelector('#myportal'),
    )
  )
}

export default Modal
