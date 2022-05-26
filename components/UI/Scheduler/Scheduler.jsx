import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import { AddToCalendar } from '../Modals/ModalChildren'

const Scheduler = ({
  setOpenModal,
  setModalChild,
  eventList,
  setEventList,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth',
      }}
      weekends={true}
      events={eventList}
      dateClick={info => {
        console.log(info)
        setModalChild(
          <AddToCalendar
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
            dateInfo={info}
            eventList={eventList}
            setEventList={setEventList}
          />,
        )
        setOpenModal(true)
      }}
      eventClick={info => {
        console.log(info.event._instance.range)
      }}
    />
  )
}

export default Scheduler
