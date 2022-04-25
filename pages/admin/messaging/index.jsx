import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
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
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Messaging</h3>
        <Button
          variant="tertiary"
          fill="fill"
          bg="#de8e0e"
          href="/admin/messaging/create-message"
        >
          Create +
        </Button>
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
            <Button variant="tertiary">Export</Button>
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
