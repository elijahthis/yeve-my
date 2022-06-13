import tw, { css } from 'twin.macro'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../../layouts/adminLayout'
import { DashboardLayout1 } from '../../../../components/Layout/MainSections'
import Modal from '../../../../components/UI/Modals/Modal'
import CustomTable from '../../../../components/UI/CustomTable'

const DashboardRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()
  const gridList = [
    {
      name: 'Smart Casual',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Trad',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
    {
      name: 'Black Tie',
      'date-created': 'Aug 20, 2021  15:00',
      'created-by': 'Mobu E.',
      status: 'Active',
    },
  ]

  return (
    <DashboardLayout1
      title="Dresscodes"
      button={{
        href: '/admin/dashboard/dresscodes/create-dresscode',
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

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <DashboardRoot
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

Dashboard.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default Dashboard
