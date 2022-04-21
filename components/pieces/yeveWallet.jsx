import tw, { css } from 'twin.macro'
import yeveWalletBg from '../../images/yeve-wallet.png'
import yeveWalletIcon from '../../images/yeve-wallet-icon2.svg'
import Image from 'next/image'
import { YeveIcon } from './svgs'

const YeveWallet = () => {
  return (
    <div
      tw="relative w-full h-full grid place-items-center text-white bg-gold text-center"
      css={css`
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 8px;
      `}
    >
      <div>
        <h5 style={{ color: '#ffffff' }}>&#163;290.00</h5>
        <p>Wallet Balance</p>
      </div>
      <div
        css={css`
          position: absolute;
          bottom: -15%;
          right: -2%;
        `}
      >
        <YeveIcon />
      </div>
    </div>
  )
}

export default YeveWallet
