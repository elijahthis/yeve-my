import tw, { css } from 'twin.macro'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MuteMic, HeadSetIcon } from '../../../pieces/svgs'
import { MdOutlineMoreVert } from 'react-icons/md'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { AddPersonIcon } from '../../../pieces/svgs'
import AttendeePerson from '../pieces/AttendeePerson'
import CallerBlock from '../pieces/CallerBlock'

const MiniTalkback = ({
  attendees,
  showSide,
  setShowSide,
  minified,
  setMinified,
}) => {
  return (
    <aside
      css={css`
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        background: white;
        text-align: center;
        color: #000000;
        padding: 1rem;
        padding-bottom: 1.5rem;
        border-left: 1px solid #e5e5e5;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          max-height: calc(100vh - 102px - 16px - 24px - 60px);
          overflow-y: scroll;
        `}
      >
        <div tw="flex flex-row items-center justify-between">
          <div tw="flex flex-row items-center gap-3">
            <HeadSetIcon color="#de8e0e" size="24" />
            <p>Virtual talkback</p>
          </div>
          <span
            onClick={() => {
              setMinified(false)
            }}
            tw="cursor-pointer"
          >
            <BsArrowsAngleExpand />
          </span>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-rows: 1fr 1fr;
            gap: 20px;
          `}
        >
          {attendees.map((attendee, ind) => (
            <CallerBlock key={ind} caller={attendee} />
          ))}
        </div>
      </div>

      <div tw="flex flex-row items-center justify-evenly ">
        <div tw="flex flex-col items-center gap-1 cursor-pointer">
          <MuteMic size={22} color="#343434" />
          <p>Mute all</p>
        </div>
        <div tw="flex flex-col items-center gap-1 cursor-pointer">
          <AddPersonIcon size={32} color="#343434" />
          <p>Add member</p>
        </div>
      </div>
    </aside>
  )
}

export default MiniTalkback
