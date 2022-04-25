import tw, { styled, css, theme } from 'twin.macro'

export const Button__base = css`
  width: max-content;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #de8e0e;
  color: #ffffff;
`

export const Button__md = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 16px;
`

export const Button__Primary = css`
  width: 100%;
`

export const Button__Secondary = css`
  width: 100%;
  background-color: #f8f8f8;
  color: #767676;
`
export const Button__Tertiary = css`
  background-color: #1a1a1a;
  color: #ffffff;
`

export const Button__Round = css``

export const Button__Disabled = css`
  background-color: #d2d2d2;
  color: #8c8c8c;
`
