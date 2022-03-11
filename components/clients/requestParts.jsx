import tw, { css } from 'twin.macro'
import { VendorCard, RecurringCard } from '../pieces/vendorCard'
import profilePlaceholder from '../../images/profile-1.png'
import imgPlaceholder from '../../images/Group 526.png'
import Modal from '../modal'

export const PendingRequests = () => {
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
    },
  ]
  return (
    <div tw="py-4 flex flex-row gap-6">
      {cardList.map(card => (
        <VendorCard cardData={card} />
      ))}
    </div>
  )
}

export const ActiveBookings = () => {
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
    <div tw="py-4 flex flex-row gap-6">
      {cardList.map(card => (
        <VendorCard cardData={card} />
      ))}
    </div>
  )
}

export const PastBookings = () => {
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
    <div tw="py-4 flex flex-row gap-6">
      {cardList.map(card => (
        <VendorCard cardData={card} />
      ))}
    </div>
  )
}

export const RecurringBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
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
