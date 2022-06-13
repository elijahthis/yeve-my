import { css } from 'twin.macro'

export const InputBlockStyles = css`
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
    :hover {
      cursor: pointer;
      background-color: transparent;
      color: #de8e0e;
    }
  }
`

export const DateTimeStyles = css`
  padding: 0 0.5rem;
  input {
    border: 0;
  }

  :hover,
  :focus,
  :active {
    color: #de8e0e;
    border-color: #de8e0e;
    box-shadow: 0 0 0 2px rgba(222, 142, 14, 0.2);
    *,
    input,
    .ant-picker-focused {
      color: #de8e0e;
      border-color: #de8e0e;
    }
  }
`
