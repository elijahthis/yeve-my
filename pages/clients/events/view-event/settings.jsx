import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import TabBar from '../../../../components/UI/TabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import EventDetails from '../../../../components/clients/events/settingsPhases'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { BackButton } from '../../../../components/pieces/Buttons'
import Modal from '../../../../components/UI/Modals/Modal'

const SettingsRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const [formData, setFormData] = useState({
    image: [],
    basic: {
      eventName: '',
      eventDesc: '',
      eventCategory: '',
      eventType: 'Physical',
      postcode: '',
      address: '',
    },
    ticketing: {
      eventType: 'Free',
      number: {
        earlyBird: 0,
        standard: 0,
        VIP: 0,
      },
    },
    location: {
      locationType: '',
    },
    dateTime: {
      date: '',
      time: '',
    },
  })

  const SettingsTabData = [
    {
      title: 'Event Details',
      component: <EventDetails formData={formData} setFormData={setFormData} />,
    },
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
        <div tw="flex flex-row items-center gap-6 mb-2">
          <BackButton
            onClick={() => {
              router.push('/clients/events')
            }}
          />
          <h5>2021 Concert: Live Jam</h5>
        </div>
        <h3>Settings</h3>
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
          <TabBar dataList={SettingsTabData} />
        </div>
      </div>
    </section>
  )
}

const Settings = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsEventLayout>
      <SettingsRoot
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
    </ClientsEventLayout>
  )
}

export default Settings
