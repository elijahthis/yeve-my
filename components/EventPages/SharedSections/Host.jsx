import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { ProceedButton } from '../../pieces/Buttons'
import profilePlaceholder from '../../../images/profile-placeholder.png'

const Host = () => {
  return (
    <div tw="grid place-items-center pt-14 pb-11 border-t border-b border-[#E5E5E5]">
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
        <div tw="flex flex-row items-center gap-5 w-full">
          <ProceedButton content="Follow" />
          <ProceedButton content="Contact" />
        </div>
      </div>
    </div>
  )
}

export default Host
