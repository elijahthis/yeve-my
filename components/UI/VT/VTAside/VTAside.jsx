import tw, { css } from 'twin.macro'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MuteMic } from '../../../pieces/svgs'
import { MdOutlineMoreVert } from 'react-icons/md'
import { AddPersonIcon } from '../../../pieces/svgs'
import AttendeePerson from '../pieces/AttendeePerson'

const VTAside = ({ attendees, showSide, setShowSide }) => {
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
      <div>
        <div tw="flex flex-row items-center justify-between mb-6">
          <p>Members (3)</p>
          <span tw="cursor-pointer">
            <AiOutlineCloseCircle
              size="20"
              color="#292D32"
              onClick={() => {
                setShowSide(false)
              }}
            />
          </span>
        </div>
        <div>
          {attendees.map(attendee => (
            <AttendeePerson attendee={attendee} />
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

export default VTAside
