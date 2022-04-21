import tw, { css } from 'twin.macro'

export const regularSection = css`
  color: black;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;

    /* or 120% */

    color: #000000;
    max-width: 566px;
  }

  h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }

  h5 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;

    color: #343434;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    // font-size: 14px;
    // line-height: 32px;

    // color: #343434;
  }
`

export const twoColBlock = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`

export const weddingSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;

  h2 {
    font-family: 'Bellaberry';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 48px;
    text-align: center;
    color: #000000;
    margin-bottom: 32px;
  }

  h4 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 24px;
  }

  .text-body {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    color: #343434;
    margin-bottom: 18px;
    max-width: 867px;
  }
`
