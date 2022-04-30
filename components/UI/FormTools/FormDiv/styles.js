import tw, { css } from 'twin.macro'

export const formDivStyles = css`
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
`
