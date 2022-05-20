import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { CalendarStyles } from './styles'

const MyCalendar = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div css={CalendarStyles}>
      <Calendar />
    </div>
  )
}

export default MyCalendar
