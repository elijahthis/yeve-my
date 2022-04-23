import tw, { css } from 'twin.macro'
import Image from 'next/image'

const StoryCard = ({ cardData, index }) => {
  const { title, date, body, image } = cardData
  return (
    <div
      css={css`
        align-self: ${index % 2 ? 'flex-end' : 'flex-start'};
        display: flex;
        flex-direction: ${index % 2 ? 'row' : 'row-reverse'};
        align-items: center;
        gap: 60px;

        .image {
          width: 160px;
          height: 160px;
          position: relative;
        }
        .card {
          max-width: 434px;
          padding: 24px;
          border-radius: 4px;
          border: 1px solid #e5e5e5;
          position: relative;
          background: #ffffff;
          margin-top: 32px;

          .tail {
            width: 22px;
            height: 18px;
            transform: skew(-50deg, 50deg);
            border-bottom: 1px solid #e5e5e5;
            border-left: 1px solid #e5e5e5;
            border-bottom-left-radius: 2px;
            position: absolute;
            top: 20%;
            left: -2.8%;
            background: #ffffff;
            z-index: 1;
          }

          .title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #1a1a1a;
            margin-bottom: 8px;
          }
          .body {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #343434;
          }
        }
        .odd {
          // background-color: red;
          > .tail {
            width: 22px;
            height: 18px;
            transform: skew(-50deg, 50deg);
            border: 0;
            border-top: 1px solid #e5e5e5;
            border-right: 1px solid #e5e5e5;
            border-top-right-radius: 2px;
            position: absolute;
            top: 20%;
            left: unset;
            right: -2.8%;
            background: #ffffff;
            z-index: 1;
          }
        }
      `}
    >
      <div className="image">
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
      <div className={`card ${index % 2 ? '' : 'odd'}`}>
        <p className="title">{title}</p>
        <p tw="text-sm font-semibold text-gold mb-4">{date}</p>
        <p className="body">{body}</p>
        <div className="tail"></div>
      </div>
    </div>
  )
}

export default StoryCard
