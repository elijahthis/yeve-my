import tw, { css } from 'twin.macro'
import MessageBlock from './pieces/MessageBlock'

const MessagingBody = () => {
  const messages = [
    {
      image: '/images/Ellipse 56.png',
      name: 'John',
      time: '33 min ago',
      body: 'Looking forward to rehearsals',
    },
    {
      image: '/images/Ellipse 56.png',
      name: 'John',
      time: '20 min ago',
      body: 'You ready?',
    },
    {
      image: '/images/Ellipse 56.png',
      name: 'John',
      time: '7 min ago',
      body: 'Yup!',
    },
    {
      image: '/images/Ellipse 56.png',
      name: 'ELijah',
      time: 'Now',
      body: 'Me too, guys!!',
    },
  ]
  return (
    <div
      css={css`
        overflowy: scroll;
      `}
    >
      <div
        css={css`
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          gap: 32px;
          padding: 0 112px;
        `}
      >
        {messages.map(message => (
          <MessageBlock data={message} />
        ))}
      </div>
    </div>
  )
}

export default MessagingBody
