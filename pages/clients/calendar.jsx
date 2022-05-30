import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ClientsLayout from '../../layouts/clientsLayout'
import Button from '../../components/UI/Buttons/Button'
import Scheduler from '../../components/UI/Scheduler'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../styles/GeneralStyles'
import Modal from '../../components/UI/Modals/Modal'
import { AddToCalendar } from '../../components/UI/Modals/ModalChildren'

const CalendarRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [eventList, setEventList] = useState([])
  const today = new Date()
  return (
    <section css={sectionStyles}>
      <div
        tw="flex flex-row items-center justify-between"
        css={css`
          margin-bottom: 60px;
        `}
      >
        <h3>Calendar</h3>
        <Button
          onClick={() => {
            setModalChild(
              <AddToCalendar
                setOpenModal={setOpenModal}
                setModalChild={setModalChild}
                dateInfo={{ dateStr: today.toISOString().slice(0, 10) }}
                eventList={eventList}
                setEventList={setEventList}
              />,
            )
            setOpenModal(true)
          }}
        >
          Create +
        </Button>
      </div>
      <Scheduler
        setOpenModal={setOpenModal}
        setModalChild={setModalChild}
        eventList={eventList}
        setEventList={setEventList}
      />
    </section>
  )
}

const Calendar = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <CalendarRoot
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalChild={modalChild}
        setModalChild={setModalChild}
      />
      {mounted ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          {modalChild}
        </Modal>
      ) : null}
    </>
  )
}

Calendar.getLayout = page => <ClientsLayout>{page}</ClientsLayout>

export default Calendar
