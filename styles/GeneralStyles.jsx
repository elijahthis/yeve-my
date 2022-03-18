import tw, { css } from 'twin.macro'

export const sectionStyles = css`
  background-color: #fafafa;
  color: #343434;
  padding: 24px;
  font-size: 14px;
  font-weight: 600;
  overflow-y: scroll;
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  h4 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  h5 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  @media (max-width: 1140px) {
    padding: 20px;
    h3 {
      font-size: 24px;
      line-height: 48px;
    }
    h4 {
      font-size: 16px;
      line-height: 24px;
    }
    h5 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`
export const formStyles = css``
