import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TabBar from '../../../../components/UI/TabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { ViewEventLayout } from '../../../../components/Layout/MainSections'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import BackButton from '../../../../components/UI/Buttons/BackButton'
import Button from '../../../../components/UI/Buttons/Button'
import SortComponent from '../../../../components/pieces/sort'
import {
  AllAttendees,
  GroupsAttendees,
  TablesAttendees,
} from '../../../../components/clients/events/attendeesPhases.jsx'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const AttendeesRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const attendeesList = [
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
  ]
  const attendeesTabData = [
    {
      title: 'All',
      component: (
        <AllAttendees
          list={attendeesList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Groups',
      component: (
        <GroupsAttendees
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Tables',
      component: (
        <TablesAttendees
          list={attendeesList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
  ]
  const router = useRouter()

  return (
    <ViewEventLayout
      title="Attendees"
      button={{
        onClick: () => {
          setModalChild(
            <AddAttendees
              setModalChild={setModalChild}
              setOpenModal={setOpenModal}
            />,
          )
          setOpenModal(true)
        },
        variant: 'tertiary',
        fill: 'fill',
        bg: '#de8e0e',
      }}
      eventTitle="2021 Concert: Live Jam"
      backFunc={() => {
        router.push('/clients/events')
      }}
    >
      <div>
        <TabBar dataList={attendeesTabData} />
      </div>
    </ViewEventLayout>
  )
}

const Attendees = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AttendeesRoot
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

Attendees.getLayout = page => <ClientsEventLayout>{page}</ClientsEventLayout>

export default Attendees
