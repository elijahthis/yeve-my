import { useEffect } from 'react'
import { useRouter } from 'next/router'
import tw, { styled, css, theme } from 'twin.macro'
// import { jsx } from '@emotion/react'
import {
  Button__base,
  Button__Primary,
  Button__Secondary,
  Button__Tertiary,
  Button__Round,
  Button__md,
  Button__Disabled,
} from './styles'

const Button = ({
  children,
  variant,
  fill,
  size = 'md',
  icon,
  bg,
  col,
  disabled = false,
  onClick,
  href,
}) => {
  const router = useRouter()

  const clickFunc = () => {
    if (disabled) return
    else if (href) {
      router.push(href)
    } else return onClick && onClick()
  }

  const Button__Fill = css`
    background-color: ${bg || '#de8e0e'};
    color: ${col || '#ffffff'};
  `
  const Button__Outline = css`
    background-color: transparent;
    color: ${col || '#de8e0e'};
    border: 1px solid ${col || '#de8e0e'};
  `

  const SIZES = { sm: Button__md, md: Button__md, lg: Button__md }
  const VARIANTS = {
    primary: Button__Primary,
    secondary: Button__Secondary,
    tertiary: Button__Tertiary,
    round: Button__Round,
  }
  const FILLS = { fill: Button__Fill, outline: Button__Outline }

  const ButtonStyle = [
    Button__base,
    VARIANTS[variant],
    FILLS[fill],
    SIZES[size],
    disabled ? Button__Disabled : null,
  ]

  return (
    <button css={ButtonStyle} onClick={clickFunc}>
      {children} {icon || null}
    </button>
  )
}

export default Button
