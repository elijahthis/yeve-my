import tw, { css } from 'twin.macro'
import Image from 'next/image'

const MessageBlock = ({ data }) => {
  return (
    <div>
      <div tw="flex flex-row items-start gap-4">
        <Image src={data.image} width="32" height="32" />
        <div>
          <div tw="flex flex-row items-center gap-2">
            <p tw="text-[#1a1a1a] text-xs font-semibold">{data.name}</p>
            <p
              css={css`
                font-weight: 400;
                font-size: 10px;
                line-height: 16px;
                color: #767676;
              `}
            >
              {data.time}
            </p>
          </div>
          <div tw="p-3 mt-3 bg-white text-xs text-[#1a1a1a] font-semibold border border-[#e5e5e5] rounded-lg">
            {data.body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBlock
