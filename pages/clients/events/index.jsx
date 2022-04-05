import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ClientsLayout from '../../../layouts/clientsLayout'
import TabBar from '../../../components/pieces/tabBar'
import {
  AllEvents,
  PublishedEvents,
  DraftsEvents,
  CreateEvent,
} from '../../../components/clients/eventParts'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BlackButton } from '../../../components/pieces/Buttons'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import Modal from '../../../components/modal'

const EventsRoot = () => {
  const [shape, setShape] = useState(0)
  const router = useRouter()
  const eventsTabData = [
    { title: 'All event', component: <AllEvents /> },
    { title: 'Published', component: <PublishedEvents /> },
    { title: 'Draft', component: <DraftsEvents /> },
    { title: 'Past', component: <></> },
  ]

  return (
    <section css={sectionStyles}>
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            button {
              padding: 8px 16px;
            }
          `}
        >
          <h3>Events</h3>
          <BlackButton
            content="Create new event"
            bg="#1a1a1a"
            col="white"
            onClick={() => {
              router.push('/clients/events/create-event')
            }}
          />
        </div>
        <div
          css={css`
            > div > :first-child > div > div {
              padding: 16px 42px;
            }
            @media (max-width: 1140px) {
              > div > div > div {
                justify-content: space-between;
              }
            }
          `}
        >
          <TabBar
            dataList={eventsTabData}
            switchShapeIcon={[<BsListTask />, <BsGridFill />]}
            shape={shape}
            setShape={setShape}
          />
        </div>
      </div>
    </section>
  )
}

const Events = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsLayout>
      <EventsRoot
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
    </ClientsLayout>
  )
}

export default Events