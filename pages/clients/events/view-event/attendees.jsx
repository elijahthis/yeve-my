import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TabBar from '../../../../components/UI/TabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import BackButton from '../../../../components/UI/Buttons/BackButton'
import Button from '../../../../components/UI/Buttons/Button'
import SortComponent from '../../../../components/pieces/sort'
import {
  AllAttendees,
  GroupsAttendees,
  TablesAttendees,
} from '../../../../components/clients/events/attendeesPhases.jsx'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const AttendeesRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const attendeesList = [
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
      group: 'Bride’s Family',
    },
  ]
  const attendeesTabData = [
    {
      title: 'All',
      component: (
        <AllAttendees
          list={attendeesList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Groups',
      component: (
        <GroupsAttendees
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Tables',
      component: (
        <TablesAttendees
          list={attendeesList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
  ]
  const router = useRouter()

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
        <div
          tw="flex flex-row items-center justify-between mb-7"
          css={css`
            button {
              padding: 16px 32px;
            }
          `}
        >
          <h3>Attendees</h3>
          <Button
            variant="tertiary"
            fill="fill"
            bg="#de8e0e"
            onClick={() => {
              setModalChild(
                <AddAttendees
                  setModalChild={setModalChild}
                  setOpenModal={setOpenModal}
                />,
              )
              setOpenModal(true)
            }}
          >
            Add
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
          <div>
            <TabBar dataList={attendeesTabData} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Attendees = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AttendeesRoot
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

Attendees.getLayout = page => <ClientsEventLayout>{page}</ClientsEventLayout>

export default Attendees
