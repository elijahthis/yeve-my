import tw, { css } from 'twin.macro'
import MessageBar from './pieces/MessageBar'

const MessagingBottom = () => {
  return (
    <div
      css={css`
        padding: 0 112px;
        padding-top: 32px;
      `}
    >
      <MessageBar />
    </div>
  )
}

export default MessagingBottom
