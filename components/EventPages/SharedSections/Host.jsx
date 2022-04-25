import tw, { css } from 'twin.macro'
import Image from 'next/image'
import Button from '../../UI/Buttons/Button'
import profilePlaceholder from '../../../images/profile-placeholder.png'

const Host = () => {
  return (
    <div
      tw="grid place-items-center pt-14 pb-11 border-t border-b border-[#E5E5E5]"
      css={css`
        h5 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 16px;
          color: #343434;
        }
      `}
    >
      <div
        tw="flex flex-col items-center gap-2 "
        css={css`
          width: 260px;
        `}
      >
        <div
          css={css`
            width: 48px;
            height: 48px;
          `}
        >
          <Image src={profilePlaceholder} />
        </div>
        <p>HOST</p>
        <h5 tw="">John Michael Smith</h5>
        <div
          tw="flex flex-row items-center gap-5 w-full"
          css={css`
            > :last-child {
              border: 1px solid #e5e5e5;
            }
          `}
        >
          <Button variant="primary">Follow</Button>
          <Button variant="primary" fill="outline" col="black">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Host
