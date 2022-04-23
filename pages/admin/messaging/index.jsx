import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/UI/Modals/Modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BlackButton } from '../../../components/pieces/Buttons'
import { SearchBar, CrudOptions } from '../../../components/formTools'
import { CustomTable } from '../../../components/pieces/customTable'
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
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Messaging</h3>
        <BlackButton
          content="Create +"
          bg="#de8e0e"
          onClick={() => {
            router.push('/admin/messaging/create-message')
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
            { title: 'Title', key: 'title' },
            { title: 'Content', key: 'content' },
            { title: 'Date', key: 'date' },
            { title: 'Recipient', key: 'recipient' },
          ]}
          list={gridList}
        />
      </div>
    </section>
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
    <AdminLayout>
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
    </AdminLayout>
  )
}

export default Messaging
