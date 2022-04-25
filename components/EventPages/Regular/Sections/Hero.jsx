import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { BsPeople } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import Button from '../../../UI/Buttons/Button'
import { twoColBlock } from '../styles'
import heroPlaceholder from '../../../../images/regular-placeholder.png'
import profilePlaceholder from '../../../../images/profile-placeholder.png'

const Hero = () => {
  return (
    <div
      className="two-col-block"
      css={twoColBlock}
      style={{ paddingRight: '72px' }}
    >
      <div>
        <Image src={heroPlaceholder} />
      </div>
      <div tw="pt-14">
        <h3>December Fest - Xmas Jingles</h3>
        <div>
          <div tw="flex flex-row items-center justify-between mb-6">
            <p tw="flex flex-row items-center gap-2">
              <HiOutlineLocationMarker />
              Concert hall, London
            </p>
            <p tw="flex flex-row items-center gap-2">
              <BsPeople /> 134 Attending
            </p>
          </div>
          <div
            tw="flex flex-row items-center justify-between"
            css={css`
              margin-bottom: 51px;
            `}
          >
            <h4 tw="text-gold">
              SAT,
              <br /> OCT 17, 2021
            </h4>
            <div tw="flex flex-col items-end justify-between h-full gap-4">
              <p tw="flex flex-row items-center gap-2">
                <MdAttachMoney /> Free
              </p>
              <p tw="flex flex-row items-center gap-2">
                <div
                  css={css`
                    width: 32px;
                    height: 32px;
                  `}
                >
                  <Image src={profilePlaceholder} />
                </div>{' '}
                by John Smith
              </p>
            </div>
          </div>
          <div tw="flex flex-row items-center gap-4">
            <Button variant="primary">Attend</Button>
            <div
              css={css`
                width: 55px;
                height: 48px;
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                display: grid;
                place-items: center;
              `}
            >
              <AiOutlineShareAlt size="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
