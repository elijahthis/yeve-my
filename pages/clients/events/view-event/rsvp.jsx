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
  AllRSVP,
  MealsRSVP,
  GiftsRSVP,
  GroupsRSVP,
} from '../../../../components/clients/events/rsvpPhases'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const RSVPRoot = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const RSVPList = [
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
  const RSVPMealsList = [
    {
      name: 'Fried Rice and Coleslaw',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 0,
    },
    {
      name: 'Jollof Rice and meat',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 20,
    },
    {
      name: 'Eba and Egusi',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 12,
    },
  ]
  const RSVPGiftsList = [
    {
      name: 'Dishwasher',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Purchased',
      attendee: 'John Smith',
    },
    {
      name: 'Tesla model S',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Pending',
      attendee: 'N/A',
    },
    {
      name: 'Washing machine',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Pending',
      attendee: 'N/A',
    },
  ]

  const RSVPTabData = [
    {
      title: 'All',
      component: (
        <AllRSVP
          list={RSVPList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Groups',
      component: (
        <GroupsRSVP setOpenModal={setOpenModal} setModalChild={setModalChild} />
      ),
    },
    {
      title: 'Tables',
      component: (
        <AllRSVP
          list={RSVPList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Meals',
      component: (
        <MealsRSVP
          list={RSVPMealsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Gift List',
      component: (
        <GiftsRSVP
          list={RSVPGiftsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
  ]
  const router = useRouter()

  return (
    <ViewEventLayout
      title="RSVP"
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
        <TabBar dataList={RSVPTabData} />
      </div>
    </ViewEventLayout>
  )
}

const RSVP = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <RSVPRoot
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

RSVP.getLayout = page => <ClientsEventLayout>{page}</ClientsEventLayout>

export default RSVP
