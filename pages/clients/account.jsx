import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import TabBar from '../../components/pieces/tabBar'
import { ProfileInfo, Payment } from '../../components/clients/accountParts'
import ClientsLayout from '../../layouts/clientsLayout'
import { sectionStyles } from '../../styles/GeneralStyles'
import Modal from '../../components/modal'

const AccountRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const accountTabData = [
    { title: 'Personal Information', component: <ProfileInfo /> },
    {
      title: 'Payment',
      component: (
        <Payment setOpenModal={setOpenModal} setModalChild={setModalChild} />
      ),
    },
  ]
  return (
    <section css={sectionStyles}>
      <div>
        <h3>Account</h3>
        <div
          css={css`
            > div > :first-child > div > div {
              padding: 16px 20px;
            }
            @media (max-width: 1140px) {
              > div > div > div {
                justify-content: space-between;
              }
            }
          `}
        >
          <TabBar dataList={accountTabData} />
        </div>
      </div>
    </section>
  )
}

const Account = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsLayout>
      <AccountRoot
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
    </ClientsLayout>
  )
}

export default Account
