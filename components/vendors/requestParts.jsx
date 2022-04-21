import tw, { css } from 'twin.macro'
import { VendorCard2, RecurringCard } from '../pieces/cards'
import GridView from '../pieces/customTable'
import profilePlaceholder from '../../images/profile-1.png'
import imgPlaceholder from '../../images/Group 526.png'

export const PendingRequests = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
  cardList,
  setCardList,
}) => {
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6 flex-wrap">
          {cardList.map((card, ind) => {
            if (card.status === 'Pending Acceptance')
              return (
                <VendorCard2
                  key={ind}
                  cardData={card}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  modalChild={modalChild}
                  setModalChild={setModalChild}
                  cardInd={ind}
                />
              )
          })}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
    </>
  )
}

export const ActiveBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
  cardList,
  setCardList,
}) => {
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6 flex-wrap">
          {cardList.map((card, ind) => {
            if (card.status === 'Accepted' || card.status === 'Activated')
              return (
                <VendorCard2
                  cardData={card}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  modalChild={modalChild}
                  setModalChild={setModalChild}
                  cardList={cardList}
                  setCardList={setCardList}
                  key={ind}
                  cardInd={ind}
                />
              )
          })}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
    </>
  )
}

export const PastBookings = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  shape,
  cardList,
  setCardList,
}) => {
  return (
    <>
      {shape === 0 ? (
        <div tw="py-4 flex flex-row gap-6">
          {cardList.map((card, ind) => {
            if (card.status === 'Event Completed')
              return (
                <VendorCard2
                  cardData={card}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  modalChild={modalChild}
                  setModalChild={setModalChild}
                  key={ind}
                  cardInd={ind}
                />
              )
          })}
        </div>
      ) : (
        <div>
          <GridView
            list={cardList}
            headers={['Name', 'Service', 'Rate', 'Event Date', 'Approval']}
          />
        </div>
      )}
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
    <div tw="py-4 flex flex-row gap-6">
      {cardList.map((card, ind) => (
        <RecurringCard
          cardData={card}
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          key={ind}
        />
      ))}
    </div>
  )
}
