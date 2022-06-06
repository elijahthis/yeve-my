import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsShop } from 'react-icons/bs'
import TabBar from '../../../../components/UI/TabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import { VendorInfoCard } from '../../../../components/UI/Cards'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { ViewEventLayout } from '../../../../components/Layout/MainSections'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import BackButton from '../../../../components/UI/Buttons/BackButton'
import Button from '../../../../components/UI/Buttons/Button'
import SortComponent from '../../../../components/pieces/sort'
import { AllTickets } from '../../../../components/clients/events/ticketsPhases'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const TicketsRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const infoCards = [
    {
      title: 'Total Sales',
      value: 0,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Early Birds',
      value: '60 of 100',
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Premium',
      value: '60 of 100',
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'VIP',
      value: '60 of 100',
      icon: <BsShop size={21} />,
      money: false,
    },
  ]
  const TicketsList = [
    {
      ticketId: 'TC082651',
      owner: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      type: 'Premium',
      date: '20 Aug',
    },
    {
      ticketId: 'TC082651',
      owner: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      type: 'VIP',
      date: '20 Aug',
    },
    {
      ticketId: 'TC082651',
      owner: 'John Smith',
      email: 'smith.john@name.com',
      date: 'Aug 20, 2021  15:00',
      type: 'Earlybird',
      date: '20 Aug',
    },
  ]

  const RSVPTabData = [
    {
      title: 'All',
      component: (
        <AllTickets
          list={TicketsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
          filterBy="all"
        />
      ),
    },
    {
      title: 'Early Birds',
      component: (
        <AllTickets
          list={TicketsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
          filterBy="Earlybird"
        />
      ),
    },
    {
      title: 'Premium',
      component: (
        <AllTickets
          list={TicketsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
          filterBy="Premium"
        />
      ),
    },
    {
      title: 'VIP',
      component: (
        <AllTickets
          list={TicketsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
          filterBy="VIP"
        />
      ),
    },
  ]
  const router = useRouter()
  const cards = (
    <div tw="flex flex-row items-center gap-6 flex-wrap mb-7">
      {infoCards.map((card, ind) => (
        <VendorInfoCard cardData={card} key={ind} />
      ))}
    </div>
  )

  return (
    <ViewEventLayout
      title="Tickets"
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
      cards={cards}
    >
      <div>
        <TabBar dataList={RSVPTabData} />
      </div>
    </ViewEventLayout>
  )
}

const Tickets = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <TicketsRoot
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

Tickets.getLayout = page => <ClientsEventLayout>{page}</ClientsEventLayout>

export default Tickets
