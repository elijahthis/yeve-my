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

const MessagingRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()

  const gridList = [
    {
      title: 'Yeve Christmas Season',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit.',
      date: 'Aug 20, 2021  15:00',
      recipient: 'All',
    },
    {
      title: 'Yeve Christmas Season',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit.',
      date: 'Aug 20, 2021  15:00',
      recipient: 'All',
    },
    {
      title: 'Yeve Christmas Season',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit.',
      date: 'Aug 20, 2021  15:00',
      recipient: 'All',
    },
  ]

  return (
    <DashboardLayout1
      title="Messaging"
      button={{
        href: '/admin/messaging/create-message',
        variant: 'tertiary',
        fill: 'fill',
        bg: '#de8e0e',
      }}
    >
      <CustomTable
        headers={[
          { title: 'Title', key: 'title' },
          { title: 'Content', key: 'content' },
          { title: 'Date', key: 'date' },
          { title: 'Recipient', key: 'recipient' },
        ]}
        list={gridList}
      />
    </DashboardLayout1>
  )
}

const Messaging = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <MessagingRoot
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

Messaging.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default Messaging
