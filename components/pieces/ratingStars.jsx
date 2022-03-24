import tw, { css } from 'twin.macro'
import { HiStar } from 'react-icons/hi'
import { useState } from 'react'

const RatingStars = ({ size, active, value }) => {
  const [val, setVal] = useState(value ?? 5)
  return (
    <div
      tw="flex flex-row items-center"
      css={css`
        gap: ${size * 0.6}px;
      `}
    >
      {Array(5)
        .fill()
        .map((i, ind) => (
          <div
            css={css`
              color: ${ind <= val ? '#DE8E0E' : '#D2D2D2'};
              cursor: pointer;
            `}
          >
            <HiStar
              key={ind}
              size={size}
              onClick={() => {
                if (active) setVal(ind)
              }}
            />
          </div>
        ))}
    </div>
  )
}

export default RatingStars
