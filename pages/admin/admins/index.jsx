import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import { DashboardLayout1 } from '../../../components/Layout/MainSections'
import Modal from '../../../components/UI/Modals/Modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import Button from '../../../components/UI/Buttons/Button'
import { SearchBar, CrudOptions } from '../../../components/formTools'
import CustomTable from '../../../components/UI/CustomTable'
import SortComponent from '../../../components/pieces/sort'

const AdminsRoot = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const router = useRouter()

  const gridList = [
    {
      name: 'Mobu E.',
      email: 'JohnSmith@gmail.com',
      'date-created': 'Aug 20, 2021  15:00',
      'last-online': 'Aug 20, 2021',
      status: 'Active',
    },
  ]

  return (
    <DashboardLayout1
      title="Admins"
      button={{
        href: '/admin/admins/create-admin',
        variant: 'tertiary',
        fill: 'fill',
        bg: '#de8e0e',
      }}
    >
      <CustomTable
        headers={[
          { title: 'Name', key: 'name' },
          { title: 'Email', key: 'email' },
          { title: 'Date Created', key: 'date-created' },
          { title: 'Last Online', key: 'last-online' },
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

const Admins = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <AdminsRoot
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

Admins.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default Admins
