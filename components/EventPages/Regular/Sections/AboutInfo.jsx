import tw, { css } from 'twin.macro'
import Image from 'next/image'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { ProceedButton } from '../../../pieces/Buttons'
import EventCard from '../EventCard'
import cardPlaceholder from '../../../../images/art.png'
import profilePlaceholder from '../../../../images/profile-placeholder.png'
import { regularSection, twoColBlock } from '../styles'

const AboutInfo = () => {
  return (
    <div
      className="two-col-block"
      css={twoColBlock}
      style={{ padding: '55px 72px' }}
    >
      <div
        css={css`
          max-width: 680px;

          p {
            font-size: 14px;
            line-height: 32px;
          }
        `}
      >
        <h5>About</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. A magna ut lorem consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna ut lorem consequat.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
          magna ut lorem consequat.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A magna
        </p>
      </div>
      <div>
        <div tw="mb-6">
          <h5>Date & Time</h5>
          <p
            css={css`
              font-size: 14px;
              line-height: 32px;
            `}
          >
            SAT, OCTOBER 17, 2021 • 15:00 - 23:00 WAT
          </p>
          <a href="" tw=" block my-4 text-gold">
            Add to Calendar
          </a>
        </div>
        <div>
          <h5>Location</h5>
          <p
            css={css`
              font-size: 14px;
              line-height: 32px;
            `}
          >
            1 London Street, London Road, Greater,
            <br /> London SE1 2AB
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
