import tw, { css } from 'twin.macro'
import { keyframes } from '@emotion/react'

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

export const mainSectionStyles = css`
background-color: #fafafa;
color: #343434;
padding: 24px;
font-size: 14px;
font-weight: 600;
overflow-y: scroll;

@media (max-width: 1140px) {
  padding: 20px;
 
`

export const formStyles = css`
  display: grid;
  grid-template-columns: 316px 1fr;
  > :nth-child(2) > form > * {
    width: 471px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
  }
  h4 {
    margin: 16px 0;
  }
  .form-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .double {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      > * {
        width: 100%;
      }
    }
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  input,
  textarea {
    padding: 12px 16px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #d2d2d2;
    font-weight: 600;
    font-size: 14px;
    resize: none;
  }
  .date-drop {
    top: 0;
  }
  input[type='submit'] {
    background-color: #de8e0e;
    color: #ffffff;
    border: 1px solid #de8e0e;
    margin: 16px 0;
    :hover {
      cursor: pointer;
      background-color: transparent;
      color: #de8e0e;
    }
  }
  @media (max-width: 1140px) {
    display: block;
    > :nth-child(2) > form > * {
      width: clamp(300px, 100%, 471px);
    }
  }
`

export const formCoreStyles = css`
  h4 {
    margin: 16px 0;
  }
  .form-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .double {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      > * {
        width: 100%;
      }
    }
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  input[type='text'],
  input[type='email'],
  input[type='number'],
  input[type='postcode'],
  textarea {
    padding: 12px 16px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #d2d2d2;
    font-weight: 600;
    font-size: 14px;
    resize: none;
  }

  input[type='search'] {
  }
  .date-drop {
    top: 0;
  }
  input[type='submit'] {
    background-color: #de8e0e;
    color: #ffffff;
    border: 1px solid #de8e0e;
    margin: 16px 0;
    :hover {
      cursor: pointer;
      background-color: transparent;
      color: #de8e0e;
    }
  }
  @media (max-width: 1140px) {
    display: block;
  }
`

export const venuesSectionStyles = css`
  min-height: 200vh;
  background-color: #ffffff;
  background-color: #111217;
  min-height: 100vh;
`

export const cardStyles = css`
  width: clamp(300px, 80vw, 357px);
  height: 178px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 28px 24px;
  margin-bottom: 40px;
  text-align: left;
`

export const errorStyles = css`
  min-height: 400px;
  height: 100vh;
  h1 {
    font-family: Montserrat;
    font-size: 48px;
    line-height: 64px;
    font-weight: 800;
    margin-bottom: 16px;
    color: #1d2124;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .lost-btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
  }

  > div {
    padding: 28px 80px;
    height: 100%;
    > :first-child {
      width: 500px;
      margin: 0 auto;
      margin-top: 32px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
      line-height: 32px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
    > div {
      padding: 60px clamp(20px, 6vw, 48px);
      > :first-child {
        width: 300px;
      }
    }
  }
`

export const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const loaderStyles = css`
  width: 100wv;
  height: 100vh;
  display: grid;
  place-items: center;
  color: #de8e0e;
  font-size: 16px;
  font-weight: 600;
  > * {
    position: relative;
    display: grid;
    place-items: center;
    width: 200px;
    height: 200px;

    div {
      position: absolute;
      top: 0;
      left: 0;
      animation: ${loaderAnimation} 1s ease infinite;
    }
  }
`

export const actionBtn = css`
  font-size: 14px;
  line-height: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 32px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`
