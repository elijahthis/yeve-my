import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import Modal from '../../../components/modal'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BlackButton } from '../../../components/pieces/Buttons'
import { SearchBar, CrudOptions } from '../../../components/formTools'
import { GridView2 } from '../../../components/pieces/gridView'
import { MdOutlineMail } from 'react-icons/md'
import { SendMessage, PaymentHistory } from '../../../components/modalChildren'
import SortComponent from '../../../components/pieces/sort'

const SuppliersRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const router = useRouter()
  const badgeList = {
    green: 'Approved',
    gold: 'Pending',
    grey: 'Onboarding',
  }

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
      <div
        onClick={() => {
          setModalChild(<PaymentHistory setOpenModal={setOpenModal} />)
          setOpenModal(true)
        }}
      >
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.443 4.93174L14.958 6.73732C15.1947 7.01937 15.1579 7.43988 14.8759 7.67655C14.5938 7.91321 14.1733 7.87642 13.9366 7.59437L13.5099 7.08509C13.0005 9.88055 10.5586 12 7.62228 12C6.23124 12 4.91155 11.522 3.85346 10.6613C3.56784 10.429 3.52464 10.0091 3.75697 9.72345C3.98931 9.43782 4.40921 9.39462 4.69483 9.62696C5.51734 10.296 6.54064 10.6667 7.62228 10.6667C9.90241 10.6667 11.7999 9.02077 12.1975 6.84808L11.5552 7.38603C11.2732 7.62269 10.8527 7.5859 10.616 7.30385C10.3793 7.02181 10.4161 6.6013 10.6982 6.36463L12.5037 4.84957C12.7858 4.6129 13.2063 4.64969 13.443 4.93174ZM7.94079 2.66667C8.12489 2.66667 8.27413 2.81591 8.27413 3L8.274 3.33333H9.27413C9.45822 3.33333 9.60746 3.48257 9.60746 3.66667V4.33333C9.60746 4.51743 9.45822 4.66667 9.27413 4.66667H6.94067V5.33333H8.94079C9.30898 5.33333 9.60746 5.63181 9.60746 6V8C9.60746 8.34189 9.3501 8.62367 9.01854 8.66218L8.94079 8.66667H8.274L8.27413 9C8.27413 9.1841 8.12489 9.33333 7.94079 9.33333H7.27413C7.09003 9.33333 6.94079 9.1841 6.94079 9L6.94067 8.66667H5.94079C5.7567 8.66667 5.60746 8.51743 5.60746 8.33333V7.66667C5.60746 7.48257 5.7567 7.33333 5.94079 7.33333H8.274V6.66667H6.27413C5.90594 6.66667 5.60746 6.36819 5.60746 6V4C5.60746 3.63181 5.90594 3.33333 6.27413 3.33333H6.94067L6.94079 3C6.94079 2.81591 7.09003 2.66667 7.27413 2.66667H7.94079ZM7.55956 0C8.97104 0 10.3081 0.49772 11.3698 1.39033C11.6516 1.62727 11.688 2.04781 11.4511 2.32963C11.2141 2.61145 10.7936 2.64783 10.5118 2.41089C9.68796 1.71827 8.65386 1.33333 7.55956 1.33333C5.07093 1.33333 3.03991 3.32278 2.94431 5.81609L3.55881 5.30123C3.84086 5.06456 4.26136 5.10135 4.49803 5.3834C4.7347 5.66545 4.69791 6.08595 4.41586 6.32262L2.61027 7.83769C2.32822 8.07436 1.90772 8.03757 1.67105 7.75552L0.155986 5.94993C-0.080682 5.66788 -0.0438926 5.24738 0.238157 5.01071C0.520207 4.77404 0.940711 4.81083 1.17738 5.09288L1.61924 5.61946C1.81395 2.48421 4.39785 0 7.55956 0Z"
            fill="#52555A"
          />
        </svg>
        <p>Payment history</p>
      </div>
    </div>
  )

  const gridList = [
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      approval: 'Approved',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      approval: 'Onboarding',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      approval: 'Approved',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      approval: 'Pending',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      approval: 'Approved',
    },
  ]

  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>Suppliers</h3>
        <BlackButton
          content="Create +"
          bg="#de8e0e"
          onClick={() => {
            router.push('/admin/suppliers/create-supplier')
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
        <GridView2
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date Created', key: 'date' },
            {
              title: 'Approval',
              key: 'approval',
              type: 'badge',
              badgeList: badgeList,
            },
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

const Suppliers = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <AdminLayout>
      <SuppliersRoot
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

export default Suppliers
