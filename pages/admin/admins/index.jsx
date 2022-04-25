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
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Admins</h3>
        <Button
          variant="tertiary"
          bg="#de8e0e"
          href="/admin/admins/create-admin"
          fill="fill"
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
      </div>
    </section>
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
    <AdminLayout>
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
    </AdminLayout>
  )
}

export default Admins
