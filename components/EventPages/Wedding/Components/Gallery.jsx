import tw, { css } from 'twin.macro'
import Image from 'next/image'

const Gallery = ({ imageList }) => {
  return (
    <div
      css={css`
        column-count: 3;
        column-width: 33%;
        column-gap: 24px;
        padding: 0 12px;
      `}
    >
      {imageList.map(image => (
        <div
          css={css`
            margin-bottom: 24px;
            border-radius: 8px;
            overflow: hidden;

            img {
              width: 100%;
            }
          `}
        >
          <img src={image} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
