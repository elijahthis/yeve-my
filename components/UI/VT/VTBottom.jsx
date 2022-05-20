import tw, { css } from 'twin.macro'
import { AiOutlineClockCircle } from 'react-icons/ai'

import {
  AddPersonIcon,
  RoundPeople,
  EndTalkIcon,
  MuteVol,
  UnMuteVol,
  MuteMic,
  UnMuteMic,
} from '../../pieces/svgs'

const VTBottom = ({ audioMute, setAudioMute, micMute, setMicMute }) => {
  return (
    <div
      css={css`
        background: white;
        font-weight: 600;
        color: #343434;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 14.5px 24px;
        margin-top: 32px;
      `}
    >
      <div tw="flex flex-row items-center gap-2 p-2 bg-[#FAFAFA] rounded ">
        <AiOutlineClockCircle />
        <span>01:47</span>
      </div>
      <div
        tw="flex flex-row items-center gap-8"
        css={css`
          > * {
            width: 103px;
          }
        `}
      >
        <div
          tw="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setAudioMute(!audioMute)
          }}
        >
          {audioMute ? <UnMuteVol /> : <MuteVol />}
          <p>{audioMute ? 'Unmute' : 'Mute'} Audio</p>
        </div>
        <div
          tw="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMicMute(!micMute)
          }}
        >
          {micMute ? <UnMuteMic /> : <MuteMic />}
          <p>{micMute ? 'Unmute' : 'Mute'}</p>
        </div>
        <div tw="flex flex-col items-center gap-1 cursor-pointer">
          <EndTalkIcon size={33} />
          <p>End Talk</p>
        </div>
      </div>
      <div tw="flex flex-row items-center gap-4">
        <div tw="flex flex-col items-center gap-1 cursor-pointer">
          <div>
            <AddPersonIcon size={32} color="#767676" />
          </div>
          <p>Add member</p>
        </div>
        <div tw="flex flex-col items-center gap-1">
          <div tw="w-8 h-8 rounded-full bg-[#FAFAFA] grid place-items-center">
            <RoundPeople size={22} color="#767676" />
          </div>
          <p>Members (3)</p>
        </div>
      </div>
    </div>
  )
}

export default VTBottom
