import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/UI/Modals/Modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BlackButton } from '../../../components/pieces/Buttons'
import { SearchBar } from '../../../components/formTools'
import { CustomTable } from '../../../components/pieces/customTable'
import {
  MdOutlineModeEdit,
  MdDeleteOutline,
  MdPersonOutline,
} from 'react-icons/md'
import { SendMessage } from '../../../components/UI/Modals/ModalChildren'
import SortComponent from '../../../components/pieces/sort'

const OrdersRoot = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const router = useRouter()

  const moreList = (
    <div
      css={css`
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
        border-radius: 4px;
        padding: 6px 0;
        position: absolute;
        right: 0;
        width: max-content;
        z-index: 6;
        display: flex;
        flex-direction: column;
        align-items: start;
        > * {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 400;
          padding: 6px 16px;
          width: 100%;
          :hover {
            background-color: #fdf9f3;
          }
        }
      `}
    >
      <div>
        <MdOutlineModeEdit />
        <p>Edit</p>
      </div>
      <div>
        <MdDeleteOutline />
        <p>Delete</p>
      </div>
      <div>
        <MdPersonOutline />
        <p>Contact Client</p>
      </div>
      <div>
        <MdPersonOutline />
        <p>Contact Vendor</p>
      </div>
    </div>
  )
  const badgeList = {
    green: 'Completed',
    gold: 'Pending',
    red: 'Cancelled',
  }

  const gridList = [
    {
      'order-id': '#YV360412',
      'amount-paid': '£120.00',
      commission: '£20',
      'payment-type': 'Paypal',
      status: 'Completed',
      location: 'London, UK',
      date: 'Aug 20, 2021',
      value: '£120.00',
      'assigned-vendor': 'John Smith',
    },
    {
      'order-id': '#YV360412',
      'amount-paid': '£120.00',
      commission: '£20',
      'payment-type': 'Paypal',
      status: 'Pending',
      location: 'London, UK',
      date: 'Aug 20, 2021',
      value: '£120.00',
      'assigned-vendor': 'John Smith',
    },
    {
      'order-id': '#YV360412',
      'amount-paid': '£120.00',
      commission: '£20',
      'payment-type': 'Paypal',
      status: 'Pending',
      location: 'London, UK',
      date: 'Aug 20, 2021',
      value: '£120.00',
      'assigned-vendor': 'John Smith',
    },
    {
      'order-id': '#YV360412',
      'amount-paid': '£120.00',
      commission: '£20',
      'payment-type': 'Paypal',
      status: 'Cancelled',
      location: 'London, UK',
      date: 'Aug 20, 2021',
      value: '£120.00',
      'assigned-vendor': 'John Smith',
    },
  ]

  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Orders</h3>
      </div>
      <div>
        <div tw="flex flex-row items-center justify-between">
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
        <CustomTable
          headers={[
            { title: 'Order ID', key: 'order-id' },
            { title: 'Amount Paid', key: 'amount-paid' },
            { title: 'Commission', key: 'commission' },
            { title: 'Payment type', key: 'payment-type' },
            {
              title: 'Status',
              key: 'status',
              type: 'badge',
              badgeList: badgeList,
            },
            { title: 'Location', key: 'location' },
            { title: 'Date', key: 'date' },
            { title: 'Assigned Vendor', key: 'assigned-vendor' },
            {
              title: '',
              key: 'actions',
              type: 'actions-more',
              moreList: moreList,
            },
          ]}
          list={gridList}
        />
      </div>
    </section>
  )
}

const Orders = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <AdminLayout>
      <OrdersRoot
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
    </AdminLayout>
  )
}

export default Orders
