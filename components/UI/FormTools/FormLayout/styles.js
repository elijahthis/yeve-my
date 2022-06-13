import tw, { css } from 'twin.macro'

export const formStyles = css`
  width: 100%;
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
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
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
    width: 100%;
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
    width: 100%;
    :hover {
      cursor: pointer;
      background-color: transparent;
      color: #de8e0e;
    }
  }
  @media (max-width: 1140px) {
    padding: 20px 0;
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
