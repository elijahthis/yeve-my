import tw, { css } from 'twin.macro'
import { BiChevronLeft } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'

export const ProceedButton = ({ content, onClick, bg, col }) => {
  return (
    <button
      css={css`
        background-color: ${bg};
        color: ${col};
      `}
      tw="py-3 w-full rounded font-semibold grid place-items-center text-sm cursor-pointer"
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export const BackButton = ({ onClick }) => (
  <div
    onClick={onClick}
    css={css`
      cursor: pointer;
      > :last-child {
        display: none;
      }
      @media (max-width: 1140px) {
        > :first-child {
          display: none;
        }
        > :last-child {
          display: block;
        }
      }
    `}
  >
    <div tw="flex flex-row items-center font-bold">
      <BiChevronLeft
        size={38}
        color="#DE8E0E"
        style={{ transform: 'translateX(-25%' }}
      />
      Back
    </div>
    <BsArrowLeft size={18} />
  </div>
)
