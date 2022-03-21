import tw, { css } from 'twin.macro'

const ToolTip = ({ children }) => {
  return (
    <div
      css={css`
        position: absolute;
        transform: translateX(50%);
        // left: -50%;
        background-color: #ffffff;
        color: #8c8c8c;
        border-radius: 8px;
      `}
    >
      {children}
    </div>
  )
}

export default ToolTip
