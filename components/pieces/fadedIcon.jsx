import tw, { css } from 'twin.macro'

const FadedIcon = ({ icon }) => {
  return (
    <div
      css={css`
        width: 48px;
        height: 48px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background-color: #fdf9f3;
        color: #de8e0e;
      `}
    >
      {icon}
    </div>
  )
}

export default FadedIcon
