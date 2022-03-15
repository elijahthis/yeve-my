import tw, { css } from 'twin.macro'
import { useState } from 'react'
import TabBar from '../pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from './requestParts'
import { SearchBar, DropdownMenu } from '../formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'

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
    <section css={requestsSection}>
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

export default Requests
