import 'antd/dist/antd.css'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'
import tw, { css } from 'twin.macro'

const ServiceCard2 = ({ cardData, clickFunc, referenceList }) => {
  return (
    <div tw="relative w-full h-full" onClick={clickFunc}>
      <Image src={cardData.image} layout="fill" />
      <div
        tw="w-full h-full absolute top-0 left-0 font-bold grid place-items-center cursor-pointer rounded"
        css={
          referenceList.includes(cardData.title)
            ? css`
                background-color: rgba(222, 142, 14, 0.8);
                h5 {
                  color: white;
                }
              `
            : css`
                h5 {
                  color: white;
                }
              `
        }
      >
        {' '}
        <div tw="flex flex-col items-center gap-1">
          {referenceList.includes(cardData.title) ? (
            <div tw="p-2 bg-white rounded-full text-[rgba(222, 142, 14, 0.8)]">
              <FiCheck strokeWidth={5} />
            </div>
          ) : (
            <></>
          )}
          <h5>{cardData.title}</h5>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard2
