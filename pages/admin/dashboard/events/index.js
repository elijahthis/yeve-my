import tw, { css } from 'twin.macro'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../../layouts/adminLayout'
import { DashboardLayout1 } from '../../../../components/Layout/MainSections'
import CustomTable from '../../../../components/UI/CustomTable'
import Modal from '../../../../components/UI/Modals/Modal'

// const MyResponsiveLine = dynamic(
//   () => import('../../../components/admin/dashboard'),
//   {
//     ssr: false,
//   },
// )

const DashboardEventsRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()

  const gridList = [
    {
      name: 'Studio Sessions',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Festivals',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Music Concerts',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Funeral',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Wedding Ceremony',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
  ]

  return (
    <DashboardLayout1
      title="Event Type"
      button={{
        href: '/admin/dashboard/events/create-event',
        variant: 'tertiary',
        fill: 'fill',
        bg: '#de8e0e',
      }}
    >
      <CustomTable
        headers={[
          { title: 'Name', key: 'name' },
          { title: 'Date Created', key: 'date-created' },
          { title: 'Created by', key: 'created-by' },
          {
            title: 'Status',
            key: 'status',
            type: 'Bool',
            list: ['Active', 'Inactive'],
          },
          {
            title: '',
            key: 'actions',
            type: 'actions-ud',
          },
        ]}
        list={gridList}
      />
    </DashboardLayout1>
  )
}

const DashboardEvents = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <DashboardEventsRoot
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
    </>
  )
}

DashboardEvents.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default DashboardEvents
