import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { MdOutlineMoreVert } from 'react-icons/md'
import { CrownIcon } from '../../../pieces/svgs'

const CallerBlock = ({ caller }) => {
  return (
    <div
      css={css`
        // width: ${caller.you ? '100%' : '315px'};
        height: 218px;
        background: #ffffff;
        padding: 16px;
        border: 1px solid #fafafa;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #343434;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
          width: 100%;
        }
      `}
    >
      <div tw="flex flex-row items-center justify-end gap-3 h-6 mb-3">
        {caller.role === 'Admin' ? <CrownIcon size={16} /> : null}
        <MdOutlineMoreVert size={18} />
      </div>
      <div tw="flex flex-col items-center justify-center h-full gap-1">
        <Image src={caller.image} width="48" height="48" />
        <p>{caller.name + (caller.you ? ' (You)' : '')}</p>
      </div>
    </div>
  )
}

export default CallerBlock
