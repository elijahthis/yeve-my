import tw, { css } from 'twin.macro'

const MessagingLayout = ({ children }) => {
  return (
    <section
      css={css`
        height: 100%;
      `}
    >
      {children}
    </section>
  )
}

export default MessagingLayout
