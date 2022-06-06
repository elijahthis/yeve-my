import tw, { css } from 'twin.macro'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/UI/Modals/Modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import Button from '../../../components/UI/Buttons/Button'
import { SearchBar, CrudOptions } from '../../../components/formTools'
import { BsShop } from 'react-icons/bs'
import SortComponent from '../../../components/pieces/sort'
import { DateFilter } from '../../../components/formTools'
import { VendorInfoCard } from '../../../components/UI/Cards'
import {
  MyResponsiveLine,
  MyResponsivePie,
} from '../../../components/admin/dashboard'

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
  const infoCards = [
    {
      title: 'Total Users',
      value: 137,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Total Vendors',
      value: 488.0,
      icon: <BsShop size={21} />,
      money: true,
    },
    {
      title: 'Total Customers',
      value: 356,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Total Orders',
      value: 1034,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Commission earned',
      value: 1034,
      icon: <BsShop size={21} />,
      money: false,
    },
  ]

  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Dashboard</h3>
        <div tw="flex flex-row items-center gap-2">
          <Button
            variant="tertiary"
            fill="fill"
            bg="#de8e0e"
            href="/admin/customers/create-customer"
          >
            Create +
          </Button>
          <DateFilter />
        </div>
      </div>
      <div>
        <div tw="flex flex-row items-center gap-3 justify-between">
          {infoCards.map(card => (
            <VendorInfoCard cardData={card} />
          ))}
        </div>
        <div>
          <div
            css={css`
              height: 475px;
              background: #ffffff;
              box-shadow: 0px 4px 8px rgba(16, 24, 51, 0.08);
              border-radius: 8px;
              margin: 40px 0;
            `}
          >
            <MyResponsiveLine />
          </div>
          <div
            css={css`
              height: 472px;
              display: grid;
              grid-template-columns: 1.55fr 1fr;
            `}
          >
            <div></div>
            <div>
              <MyResponsivePie />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
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
