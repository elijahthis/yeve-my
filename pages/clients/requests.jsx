import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ClientsLayout from '../../layouts/clientsLayout'
import TabBar from '../../components/pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from '../../components/clients/requestParts'
import { SearchBar, DropdownMenu } from '../../components/formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../styles/GeneralStyles'
import Modal from '../../components/UI/Modals/Modal'

const RequestsRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [shape, setShape] = useState(0)
  const requestTabData = [
    {
      title: 'Pending Requests',
      component: (
        <PendingRequests
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
        />
      ),
      unread: 1,
    },
    {
      title: 'Active Bookings',
      component: (
        <ActiveBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
        />
      ),
      unread: 0,
    },
    {
      title: 'Past Bookings',
      component: (
        <PastBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
        />
      ),
      unread: 0,
    },
    {
      title: 'Recurring Bookings',
      component: (
        <RecurringBookings
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          shape={shape}
        />
      ),
      unread: 0,
    },
  ]
  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-4">
        <h3>Requests</h3>
        <div tw="flex flex-row items-center gap-4">
          <div
            css={css`
              > * {
                height: 48px;
              }
            `}
          >
            <SearchBar placeholder="Search for a vendor" />
          </div>
          <div
            css={css`
              > * {
                height: 48px;
              }
            `}
          >
            <DropdownMenu list={['name', 'size']} placeholder="Sort by" />
          </div>
          <BsSortDownAlt size={16} />
        </div>
      </div>
      <div>
        <TabBar
          dataList={requestTabData}
          switchShapeIcon={[<BsListTask />, <BsGridFill />]}
          shape={shape}
          setShape={setShape}
        />
      </div>
    </section>
  )
}

const Requests = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsLayout>
      <RequestsRoot
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

export default Requests
