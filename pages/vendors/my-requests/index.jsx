import tw, { css } from 'twin.macro'
import { useState } from 'react'
import VendorsLayout from '../../../layouts/vendorsLayout'
import TabBar from '../../../components/pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from '../../../components/vendors/requestParts'

import { SearchBar, DropdownMenu } from '../../../components/formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../../styles/GeneralStyles'
import Modal from '../../../components/modal'
import { useEffect } from 'react'

export const RequestsRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [shape, setShape] = useState(0)
  const [cardList, setCardList] = useState([
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
      budgetAccepted: true,
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
      budgetAccepted: false,
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Accepted',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Accepted',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Activated',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      address: '10 Downing street, SE11 6FA',
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Event Completed',
    },
  ])
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
          cardList={cardList}
          setCardList={setCardList}
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
          cardList={cardList}
          setCardList={setCardList}
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
          cardList={cardList}
          setCardList={setCardList}
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
    <>
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
    </>
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
    <VendorsLayout>
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
    </VendorsLayout>
  )
}

export default Requests
