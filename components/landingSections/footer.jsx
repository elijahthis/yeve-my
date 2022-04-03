import tw, { css } from 'twin.macro'
import Image from 'next/image'
import sponsor1 from '../../images/sponsor1.png'
import sponsor2 from '../../images/sponsor2.png'
import sponsor3 from '../../images/sponsor3.png'
import sponsor4 from '../../images/sponsor4.png'
import sponsor5 from '../../images/sponsor5.png'
import sponsor6 from '../../images/sponsor6.png'

const Footer = () => {
  return (
    <footer
      css={css`
        padding: 48px 88px;
        @media (max-width: 1140px) {
          padding: 24px;
          > div > :nth-child(2n + 1) {
            visibility: hidden;
          }
        }
      `}
    >
      <p tw="text-center mb-9 text-gold font-semibold">OUR PARTNERS</p>
      <div tw="flex flex-row justify-between items-center">
        <Image src={sponsor1} alt="RCCG" width="64px" height="64px" />
        <Image src={sponsor2} alt="Swert" width="84px" height="62px" />
        <Image src={sponsor3} alt="Slingstone" width="170px" height="60px" />
        <Image src={sponsor4} alt="AfricExpress" width="220px" height="38px" />
        <Image src={sponsor5} alt="Afric-eat" width="50px" height="50px" />
        <Image src={sponsor6} alt="Frolancer" width="178px" height="30px" />
      </div>
    </footer>
  )
}

export default Footer
