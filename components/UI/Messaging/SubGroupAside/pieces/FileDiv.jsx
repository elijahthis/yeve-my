import tw, { css } from 'twin.macro'
import Image from 'next/image'
import pdfImage from '../../../../../images/pdf-img.svg'
import audioImage from '../../../../../images/audio-img.svg'
import imageImage from '../../../../../images/service6.png'

const FileDiv = ({ file }) => {
  let imageSrc

  switch (file.type) {
    case 'pdf':
      imageSrc = pdfImage
      break
    case 'audio':
      imageSrc = audioImage
      break
    case 'image':
      imageSrc = imageImage
      break

    default:
      imageSrc = pdfImage
      break
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding: 8px;
        background: #fafafa;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 12px;
        line-height: 18px;
        font-weight: 600;
        color: #767676;
        cursor: pointer;
      `}
    >
      <div
        css={css`
          width: 40px;
          height: 40px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        `}
      >
        <Image src={imageSrc} layout="fill" />
      </div>
      <div
        css={css`
          width: 78%;
        `}
      >
        <p tw="text-black">{file.name}</p>
        <div tw="flex flex-row items-center justify-between">
          <p>{file.date}</p>
          <p>{file.size}</p>
        </div>
      </div>
    </div>
  )
}

export default FileDiv
