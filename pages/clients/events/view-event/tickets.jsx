import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsShop } from 'react-icons/bs'
import TabBar from '../../../../components/pieces/tabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import { VendorInfoCard } from '../../../../components/UI/Cards'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import { BlackButton, BackButton } from '../../../../components/pieces/Buttons'
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

  return (
    <section css={sectionStyles}>
      <div>
        <div tw="flex flex-row items-center gap-6 mb-2">
          <BackButton
            onClick={() => {
              router.push('/clients/events')
            }}
          />
          <h5>2021 Concert: Live Jam</h5>
        </div>
        <div
          tw="flex flex-row items-center justify-between mb-6"
          css={css`
            button {
              padding: 16px 32px;
            }
          `}
        >
          <h3>Tickets</h3>
          <BlackButton
            content="Add"
            bg="#de8e0e"
            onClick={() => {
              setModalChild(
                <AddAttendees
                  setModalChild={setModalChild}
                  setOpenModal={setOpenModal}
                />,
              )
              setOpenModal(true)
            }}
          />
        </div>
        <div tw="flex flex-row items-center gap-6 flex-wrap mb-7">
          {infoCards.map((card, ind) => (
            <VendorInfoCard cardData={card} key={ind} />
          ))}
        </div>
        <div>
          <div tw="flex flex-row items-center justify-between mb-6">
            <div
              tw="flex flex-row items-center gap-6"
              css={css`
                > :first-child {
                  height: 48px;
                }
                button {
                  padding: 12px 20px;
                  line-height: 24px;
                }
              `}
            >
              <SearchBar />
              <BlackButton content="Export" />
            </div>
            <SortComponent />
          </div>
          <div>
            <TabBar dataList={RSVPTabData} />
          </div>
        </div>
      </div>
    </section>
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
    <ClientsEventLayout>
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
    </ClientsEventLayout>
  )
}

export default Tickets
