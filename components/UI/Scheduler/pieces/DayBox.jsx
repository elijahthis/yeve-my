import tw, { css } from 'twin.macro'

const DayBox = ({ day }) => {
  return (
    <div
      css={css`
        border-right: 1.5px solid #e5e5e5;
        display: grid;
        place-items: center;
        text-transform: uppercase;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        text-align: center;

        color: #767676;
      `}
    >
      <div>
        <p>{day.format('ddd')}</p>
        <p>{day.format('DD')}</p>
      </div>
    </div>
  )
}

export default DayBox
