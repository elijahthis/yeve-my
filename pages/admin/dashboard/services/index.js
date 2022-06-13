import tw, { css } from 'twin.macro'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdminLayout from '../../../../layouts/adminLayout'
import { DashboardLayout1 } from '../../../../components/Layout/MainSections'
import Modal from '../../../../components/UI/Modals/Modal'
import CustomTable from '../../../../components/UI/CustomTable'
import { BsShop } from 'react-icons/bs'

// const MyResponsiveLine = dynamic(
//   () => import('../../../components/admin/dashboard'),
//   {
//     ssr: false,
//   },
// )

const DashboardServicesRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()
  const gridList = [
    {
      category: (
        <div tw="flex flex-row items-center gap-6">
          <div
            css={css`
              position: relative;
              width: 58px;
              height: 35px;
              border-radius: 4px;
              overflow: hidden;
            `}
          >
            <Image src="/images/Rectangle 269.png" layout="fill" />
          </div>
          <p>Musicians</p>
        </div>
      ),
      'date-created': 'Aug 20, 2021  15:00',
      services: 3,
      supplier: 'Active',
    },
    {
      category: (
        <div tw="flex flex-row items-center gap-6">
          <div
            css={css`
              position: relative;
              width: 58px;
              height: 35px;
              border-radius: 4px;
              overflow: hidden;
            `}
          >
            <Image src="/images/Rectangle 269.png" layout="fill" />
          </div>
          <p>Security</p>
        </div>
      ),
      'date-created': 'Aug 20, 2021  15:00',
      services: 3,
      supplier: 'Active',
    },
    {
      category: (
        <div tw="flex flex-row items-center gap-6">
          <div
            css={css`
              position: relative;
              width: 58px;
              height: 35px;
              border-radius: 4px;
              overflow: hidden;
            `}
          >
            <Image src="/images/Rectangle 269.png" layout="fill" />
          </div>
          <p>Child Performer</p>
        </div>
      ),
      'date-created': 'Aug 20, 2021  15:00',
      services: 3,
      supplier: 'Active',
    },
  ]

  return (
    <DashboardLayout1
      title="Vendor Services"
      button={{
        href: '/admin/dashboard/services/create-service',
        variant: 'tertiary',
        fill: 'fill',
        bg: '#de8e0e',
      }}
    >
      <CustomTable
        headers={[
          { title: 'Category', key: 'category' },
          { title: 'Date Created', key: 'date-created' },
          { title: 'Services', key: 'services' },
          {
            title: 'Supplier',
            key: 'supplier',
            type: 'drop',
            list: ['All', 'Freemium', 'Premium', 'Elite'],
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

const DashboardServices = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <DashboardServicesRoot
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

DashboardServices.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default DashboardServices
