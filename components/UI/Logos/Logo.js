import 'twin.macro'
import Link from 'next/link'
import { YeveLogoSVG1, YeveLogoSVG2, WeddingLogo } from './LogoSVGs'

export const YeveLogo1 = () => (
  <Link href="/" passHref>
    <a
    // Use the tw prop to add tailwind styles directly on jsx elements
    >
      <YeveLogoSVG1 />
    </a>
  </Link>
)
export const YeveLogo2 = () => (
  <Link href="/" passHref>
    <a
    // Use the tw prop to add tailwind styles directly on jsx elements
    >
      <YeveLogoSVG2 />
    </a>
  </Link>
)

export const WeddingLogo1 = () => (
  <Link href="/event-page?type=wedding" passHref>
    <a
    // Use the tw prop to add tailwind styles directly on jsx elements
    >
      <WeddingLogo />
    </a>
  </Link>
)
