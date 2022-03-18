import tw, { css } from 'twin.macro'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, openModal, setOpenModal }) => {
  return createPortal(
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: ${openModal ? 'grid' : 'none'};
        place-items: center;
        overflow-y: scroll;
        background-color: rgba(0, 0, 0, 0.4);
      `}
      onClick={() => {
        setOpenModal(false)
      }}
    >
      {children}
    </div>,
    document.querySelector('#myportal'),
  )
}

export default Modal