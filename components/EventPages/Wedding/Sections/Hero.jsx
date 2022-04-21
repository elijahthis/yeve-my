import tw, { css } from 'twin.macro'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { Heart } from '../../../pieces/svgs'

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <div>
          <div
            tw="flex flex-row items-center gap-3"
            css={css`
              svg {
                display: block;
              }
              > :last-child {
                transform: scale(-1, 1);
              }
            `}
          >
            <Heart />
            <h1>Lisa & Joseph</h1>
            <Heart />
          </div>
          <p>WEDDING EVENT</p>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            width: 100%;
          `}
        >
          <p>NOVEMBER 15, 2021</p>
          <div tw="flex flex-row items-center gap-6">
            <button
              css={css`
                padding: 12px 60px;
                background-color: white;
                color: black;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                border-radius: 4px;
              `}
            >
              RSVP
            </button>
            <button
              css={css`
                padding: 16px 18px;
                width: 55px;
                height: 100%;
                background-color: black;
                color: white;
                border-radius: 4px;
              `}
            >
              <AiOutlineShareAlt />
            </button>
          </div>
          <p>CONCERT HALL, LONDON</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
