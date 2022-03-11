import tw, { css } from 'twin.macro'
import TabBar from '../pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from './requestParts'


export const requestsSection = css`
  background-color: #fafafa;
  color: #343434;
  padding: 24px;
  font-size: 14px;
  overflow-y: scroll;
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  h4 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  h5 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
`

const Requests = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const requestTabData = [
    {
      title: 'Pending Requests',
      component: (
        <PendingRequests
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
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
        />
      ),
      unread: 0,
    },
  ]
  return (
    <section css={requestsSection}>
      <h3>Requests</h3>
      <div>
        <TabBar dataList={requestTabData} />
      </div>
    </section>
  )
}

export default Requests
