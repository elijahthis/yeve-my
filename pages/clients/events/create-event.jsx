import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ClientsLayout from '../../../layouts/clientsLayout'
import { CreateEventForm } from '../../../components/clients/eventParts'
import Modal from '../../../components/UI/Modals/Modal'

export const CreateEventRoot = () => {
  const [formData, setFormData] = useState({
    image: [],
    basic: {
      eventName: '',
      eventDesc: '',
      eventCategory: '',
      eventType: 'Physical',
      postcode: '',
      address: '',
    },
    ticketing: {
      eventType: 'Free',
      number: {
        earlyBird: 0,
        standard: 0,
        VIP: 0,
      },
    },
    location: {
      locationType: '',
    },
    dateTime: {
      date: '',
      time: '',
    },
  })
  return <CreateEventForm formData={formData} setFormData={setFormData} />
}

const CreateEvent = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <CreateEventRoot
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

CreateEvent.getLayout = page => <ClientsLayout>{page}</ClientsLayout>

export default CreateEvent
