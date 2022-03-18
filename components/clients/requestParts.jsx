import tw, { css } from 'twin.macro'
import { VendorCard, RecurringCard } from '../pieces/cards'
import GridView from '../pieces/gridView'
import profilePlaceholder from '../../images/profile-1.png'
import imgPlaceholder from '../../images/Group 526.png'
import Modal from '../modal'

export const PendingRequests = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
}) => {
  const cardList = [
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Gig Published',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
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
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Acceptance',
      budgetAccepted: false,
    },
  ]
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6">
          {cardList.map((card, ind) => (
            <VendorCard
              key={ind}
              cardData={card}
              openModal={openModal}
              setOpenModal={setOpenModal}
              modalChild={modalChild}
              setModalChild={setModalChild}
            />
          ))}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}

export const ActiveBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
}) => {
  const cardList = [
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'In Progress',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Pending Activation',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Activated',
    },
  ]
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6">
          {cardList.map(card => (
            <VendorCard
              cardData={card}
              openModal={openModal}
              setOpenModal={setOpenModal}
              modalChild={modalChild}
              setModalChild={setModalChild}
            />
          ))}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}

export const PastBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
}) => {
  const cardList = [
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Completed',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: profilePlaceholder,
      date: 'Mon, Oct 15',
      time: '22:15',
      price: 120,
      duration: 2,
      status: 'Completed',
    },
  ]
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6">
          {cardList.map(card => (
            <VendorCard
              cardData={card}
              openModal={openModal}
              setOpenModal={setOpenModal}
              modalChild={modalChild}
              setModalChild={setModalChild}
            />
          ))}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}

export const RecurringBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
}) => {
  const cardList = [
    {
      gig: 'Bass Guitarist',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: 'Wednesday',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
    },
    {
      gig: 'Keyboardist',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: 'Monday',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
    },
    {
      gig: 'Caterer',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '15th',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Monthly',
    },
  ]
  return (
    <>
      <div tw="py-4 flex flex-row gap-6">
        {cardList.map(card => (
          <RecurringCard
            cardData={card}
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalChild={modalChild}
            setModalChild={setModalChild}
          />
        ))}
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {modalChild}
      </Modal>
    </>
  )
}
