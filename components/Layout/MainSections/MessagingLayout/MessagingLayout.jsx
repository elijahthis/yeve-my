import tw, { css } from 'twin.macro'

const MessagingLayout = ({ children }) => {
  return (
    <section
      css={css`
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 320px;
        background-color: #fafafa;
      `}
    >
      {children}
    </section>
  )
}

export default MessagingLayout
