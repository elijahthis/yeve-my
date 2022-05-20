import tw, { css } from 'twin.macro'
import CallerBlock from './pieces/CallerBlock'

const VTBody = ({ attendees, setAttendees }) => {
  return (
    <div
      css={css`
        padding: 38px;
        padding-top: 57px;
        max-height: calc(100vh - 57px - 102px - 112px);
        overflow-y: scroll;
      `}
    >
      <div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          `}
        >
          {attendees.map((attendee, ind) => (
            <CallerBlock key={ind} caller={attendee} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VTBody
