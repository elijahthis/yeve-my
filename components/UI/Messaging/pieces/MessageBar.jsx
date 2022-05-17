import tw, { css } from 'twin.macro'
import {
  AtIcon,
  AttachIcon,
  EmojiIcon,
  MicIcon,
  SendIcon,
} from '../../../pieces/svgs'

const MessageBar = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 51px;
        background: #fefefe;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 0.5rem;
        padding-left: 1rem;

        input {
          width: 100%;
          margin-right: 2rem;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #1a1a1a;
        }
      `}
    >
      <input type="text" name="" id="" placeholder="Hii" />
      <div
        tw="flex flex-row items-center gap-5"
        css={css`
          svg {
            cursor: pointer;
          }
        `}
      >
        <EmojiIcon size={24} color="#767676" />
        <AtIcon size={24} color="#767676" />
        <AttachIcon size={24} color="#767676" />
        <MicIcon size={24} color="#767676" />
        <SendIcon size={35} color="#de8e0e" />
      </div>
    </div>
  )
}

export default MessageBar
