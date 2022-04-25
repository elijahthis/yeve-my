import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../UI/Buttons/Button'
import imgplace from '../../images/clinton.png'

const ImageUploadPreview = ({ limit, onChangeFunc }) => {
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])

  useEffect(() => {
    if (images.length < 1) return
    const newImageURLs = []
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
    setImageURLs(newImageURLs)
    console.log(images)
    onChangeFunc ? onChangeFunc(newImageURLs[0]) : null
  }, [images])

  const onImageChange = ev => {
    if (ev.target.files > limit) {
      setImages([...ev.target.files.slice(0, limit)])
    } else setImages([...ev.target.files])
  }
  return (
    <div
      css={css`
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px dashed #e5e5e5;
        border-radius: 8px;
        padding: 28px 0;
        overflow: hidden;
      `}
    >
      <p>Drag and drop file</p>
      <span>or</span>
      <div
        css={css`
          position: relative;
          button {
            line-height: 24px;
            padding: 8px 30px;
          }
          input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
          }
          ~ p {
            width: 100%;
            padding: 0 1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      >
        <Button variant="tertiary">Browse</Button>
        <input
          type="file"
          name=""
          id=""
          multiple
          accept="image/*"
          onChange={onImageChange}
        />
      </div>
      <p>{imageURLs.length !== 0 ? images[0].name : null}</p>
    </div>
  )
}

export default ImageUploadPreview
