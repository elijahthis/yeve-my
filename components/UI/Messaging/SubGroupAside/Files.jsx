import tw, { css } from 'twin.macro'
import FileDiv from './pieces/FileDiv'
import { BiChevronDown } from 'react-icons/bi'
import { AttachIcon } from '../../../pieces/svgs'

const Files = () => {
  const files = [
    {
      name: 'Wedding_schedule.pdf',
      type: 'pdf',
      size: '305kb',
      date: 'Dec 1, 2021, 12pm',
    },
    {
      name: 'Set1.m4a',
      type: 'audio',
      size: '305kb',
      date: 'Dec 1, 2021, 12pm',
    },
    {
      name: 'Gallery1.jpeg',
      type: 'image',
      size: '305kb',
      date: 'Dec 1, 2021, 12pm',
    },
  ]
  return (
    <div
      css={css`
        font-weight: 600;
      `}
    >
      <div tw="flex flex-row items-center justify-between text-gold text-xs font-bold my-5">
        <p tw="flex flex-row items-center gap-2">
          Add file <AttachIcon color="#de8e0e" size={15} />
        </p>
        <p tw="flex flex-row items-center gap-2">
          All file types <BiChevronDown size="16" />
        </p>
      </div>
      <div>
        <p tw="text-xs text-black mb-4">Today</p>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          `}
        >
          {files.map((file, ind) => (
            <FileDiv file={file} key={ind} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Files
