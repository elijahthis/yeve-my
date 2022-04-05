import tw, { css } from 'twin.macro'

export const StatusBadge = ({ children, color }) => {
  return (
    <div
      css={css`
        width: 88px;
        height: 32px;
        display: grid;
        place-items: center;
        color: ${color};
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
      `}
    >
      {children}
    </div>
  )
}
