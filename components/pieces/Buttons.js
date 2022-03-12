import tw, { css } from 'twin.macro'

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
