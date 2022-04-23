import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TabBar from '../../../../components/pieces/tabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import { BlackButton, BackButton } from '../../../../components/pieces/Buttons'
import SortComponent from '../../../../components/pieces/sort'
import {
  AllRSVP,
  MealsRSVP,
  GiftsRSVP,
  GroupsRSVP,
} from '../../../../components/clients/events/rsvpPhases'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const RSVPRoot = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const RSVPList = [
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
  const RSVPMealsList = [
    {
      name: 'Fried Rice and Coleslaw',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 0,
    },
    {
      name: 'Jollof Rice and meat',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 20,
    },
    {
      name: 'Eba and Egusi',
      desc: 'A plate of fried Rice and Coleslaw and chicken laps',
      requests: 12,
    },
  ]
  const RSVPGiftsList = [
    {
      name: 'Dishwasher',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Purchased',
      attendee: 'John Smith',
    },
    {
      name: 'Tesla model S',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Pending',
      attendee: 'N/A',
    },
    {
      name: 'Washing machine',
      desc: 'https://amazon.com/dishwasher/2021',
      status: 'Pending',
      attendee: 'N/A',
    },
  ]

  const RSVPTabData = [
    {
      title: 'All',
      component: (
        <AllRSVP
          list={RSVPList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Groups',
      component: (
        <GroupsRSVP setOpenModal={setOpenModal} setModalChild={setModalChild} />
      ),
    },
    {
      title: 'Tables',
      component: (
        <AllRSVP
          list={RSVPList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Meals',
      component: (
        <MealsRSVP
          list={RSVPMealsList}
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      ),
    },
    {
      title: 'Gift List',
      component: (
        <GiftsRSVP
          list={RSVPGiftsList}
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
          <h3>RSVP</h3>
          <BlackButton
            content="Add"
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
          <div>
            <TabBar dataList={RSVPTabData} />
          </div>
        </div>
      </div>
    </section>
  )
}

const RSVP = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsEventLayout>
      <RSVPRoot
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

export default RSVP
