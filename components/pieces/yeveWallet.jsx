import tw, { css } from 'twin.macro'
import yeveWalletBg from '../../images/yeve-wallet.png'
import yeveWalletIcon from '../../images/yeve-wallet-icon2.svg'
import Image from 'next/image'

const YeveIcon = () => (
  <svg
    width="104"
    height="77"
    viewBox="0 0 104 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.189 88.1514L58.4638 60.6239C58.8522 59.4711 59.6836 58.5203 60.7753 57.9804C61.8669 57.4405 63.1292 57.3559 64.2845 57.7452L75.9014 61.6593C77.0567 62.0485 78.0105 62.8798 78.5528 63.9702C79.0951 65.0606 79.1816 66.3207 78.7932 67.4735L69.5184 95.001M79.2073 95.0389L91.8992 57.3697L79.2073 95.0389ZM22.1983 33.8854L9.50642 71.5546L22.1983 33.8854ZM91.7202 18.5905L45.8084 3.12141C41.8532 1.7888 37.5488 2.75845 34.8868 5.58421L21.2586 20.0575C16.6712 24.9267 18.8665 32.9342 25.6139 35.4395L25.977 35.5619C31.6765 37.4822 37.8324 34.4785 39.483 29.5797C37.8355 34.4694 40.9173 40.5957 46.6168 42.516C52.3163 44.4363 58.3533 41.7556 60.1137 36.5308C58.4662 41.4205 61.5462 47.5462 67.2457 49.4665C72.9452 51.3868 78.9931 48.7097 80.7535 43.4849C78.9931 48.7097 82.186 54.5003 87.8855 56.4207L88.2395 56.5399C95.1285 58.6251 101.722 53.5788 101.015 46.9299L98.9245 27.1604C98.5153 23.2999 95.6754 19.9231 91.7202 18.5905ZM2.72171 72.4952L84.0394 99.8936L2.72171 72.4952ZM32.3383 46.9816L46.8593 51.8741C48.0147 52.2634 48.9684 53.0947 49.5108 54.1851C50.0531 55.2754 50.1396 56.5356 49.7512 57.6884L44.3815 73.6253L21.1479 65.7972L26.5176 49.8603C26.906 48.7075 27.7374 47.7566 28.829 47.2168C29.9206 46.6769 31.183 46.5923 32.3383 46.9816Z"
      stroke="white"
      strokeOpacity="0.15"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
