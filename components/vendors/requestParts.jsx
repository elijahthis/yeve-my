import tw, { css } from 'twin.macro'
import { VendorCard2, RecurringCard } from '../UI/Cards'
import CustomTable from '../UI/CustomTable'
import profilePlaceholder from '../../images/profile-1.png'
import imgPlaceholder from '../../images/Group 526.png'

const badgeList = {
  green: 'Accepted',
  gold: 'In Progress',
  red: 'Cancelled',
}

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
          <CustomTable
            list={cardList}
            headers={[
              { title: 'Name', key: 'name' },
              { title: 'Service', key: 'gig' },
              { title: 'Address', key: 'address' },
              { title: 'Event Date', key: 'date' },
              { title: 'Rate', key: 'rate' },
              {
                title: 'Approval',
                key: 'status',
                type: 'badge',
                badgeList: badgeList,
              },
            ]}
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
          <CustomTable
            list={cardList}
            headers={[
              { title: 'Name', key: 'name' },
              { title: 'Service', key: 'gig' },
              { title: 'Address', key: 'address' },
              { title: 'Event Date', key: 'date' },
              { title: 'Rate', key: 'rate' },
              {
                title: 'Approval',
                key: 'status',
                type: 'badge',
                badgeList: badgeList,
              },
            ]}
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
          <CustomTable
            list={cardList}
            headers={[
              { title: 'Name', key: 'name' },
              { title: 'Service', key: 'gig' },
              { title: 'Event Date', key: 'date' },
              { title: 'Rate', key: 'rate' },
              {
                title: 'Approval',
                key: 'status',
                type: 'badge',
                badgeList: badgeList,
              },
            ]}
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
      rate: '60/hr',
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
      rate: '60/hr',
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
      rate: '60/hr',
    },
  ]
  return (
    <>
      {shape === 0 ? (
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
      ) : (
        <div>
          <CustomTable
            list={cardList}
            headers={[
              { title: 'Name', key: 'name' },
              { title: 'Service', key: 'gig' },
              { title: 'Event Day', key: 'day' },
              { title: 'Time', key: 'time' },
              { title: 'Frequency', key: 'frequency' },
              { title: 'Rate', key: 'rate' },
            ]}
          />
        </div>
      )}
    </>
  )
}
