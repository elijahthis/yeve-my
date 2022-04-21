import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BlackButton } from '../../../components/pieces/Buttons'
import { SearchBar, CrudOptions } from '../../../components/formTools'
import { CustomTable } from '../../../components/pieces/customTable'
import { MdOutlineMail } from 'react-icons/md'
import { SendMessage } from '../../../components/modalChildren'
import { PaymentSymbol } from '../../../components/pieces/svgs'
import SortComponent from '../../../components/pieces/sort'

const CustomersRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
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
      <div
        onClick={() => {
          setModalChild(<SendMessage setOpenModal={setOpenModal} />)
          setOpenModal(true)
        }}
      >
        <MdOutlineMail />
        <p>Send message</p>
      </div>
      <div>
        <PaymentSymbol size={16} />
        <p>Payment history</p>
      </div>
    </div>
  )

  const gridList = [
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      value: '£120.00',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      value: '£120.00',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      value: '£120.00',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      value: '£120.00',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      value: '£120.00',
    },
  ]

  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Customers</h3>
        <BlackButton
          content="Create +"
          bg="#de8e0e"
          onClick={() => {
            router.push('/admin/customers/create-customer')
          }}
        />
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
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date Created', key: 'date' },
            { title: 'Lifetime Value', key: 'value' },
            {
              title: '',
              key: 'actions',
              type: 'actions-crud',
              moreList: moreList,
            },
          ]}
          list={gridList}
        />
      </div>
    </section>
  )
}

const Customers = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <AdminLayout>
      <CustomersRoot
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

export default Customers
