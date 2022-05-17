import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ClientsEventLayout from '../../../../layouts/clientsEventLayout'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import BackButton from '../../../../components/UI/Buttons/BackButton'
import GridTable from '../../../../components/UI/GridTable'
import Modal from '../../../../components/UI/Modals/Modal'
import { BsShop } from 'react-icons/bs'
import { VendorInfoCard } from '../../../../components/UI/Cards'
import YeveWallet from '../../../../components/UI/YeveWallet'
import { FiCalendar } from 'react-icons/fi'
import { Plan } from '../../../../components/UI/Modals/ModalChildren'
import { sortCards } from '../../../../components/UI/GanttChart/helperFunctions'

const DashboardRoot = ({ setModalChild, setOpenModal }) => {
  const infoCards = [
    {
      title: 'Invitations',
      // title: 'Attendees',
      value: 137,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Total RSVPs sent',
      // title: 'Tickets Sold',
      value: 488.0,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'RSVPs confirmed',
      // title: 'Completed tasks',
      value: 356,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'RSVPs pending',
      // title: 'Pending tasks',
      value: 1034,
      icon: <BsShop size={21} />,
      money: false,
    },
  ]

  const [cardList, setCardList] = useState([
    {
      duration: '',
      task: 'Wedding Venue',
      start: '',
      finish: '',
      predecessor: '',
      assignee: '',
      type: 'parent',
      tag: 1,
      color: '#1C74AA',
    },
    {
      duration: 18,
      task: 'Arrange Venue',
      start: '2022-05-01',
      finish: '2022-05-05',
      predecessor: '',
      assignee: '',
      type: 'child',
      tag: 1,
      color: '#1C74AA',
    },
    {
      duration: 18,
      task: 'Decorate Venue',
      start: '2022-05-01',
      finish: '2022-05-05',
      predecessor: '',
      assignee: '',
      type: 'child',
      tag: 1,
      color: '#1C74AA',
    },
    {
      duration: '',
      task: 'Food & Menu',
      start: '',
      finish: '',
      predecessor: '',
      assignee: '',
      type: 'parent',
      tag: 2,
      color: '#343434',
    },
    {
      duration: 18,
      task: 'Negotiate Pricing',
      start: '2022-05-01',
      finish: '2022-05-05',
      predecessor: '',
      assignee: '',
      type: 'child',
      tag: 2,
      color: '#343434',
    },
    {
      duration: 18,
      task: 'Buy Drinks',
      start: '2022-05-01',
      finish: '2022-05-05',
      predecessor: '',
      assignee: '',
      type: 'child',
      tag: 2,
      color: '#343434',
    },
  ])

  const [newCardList, setNewCardList] = useState([
    {
      parent: {
        duration: '18',
        task: 'Wedding Venue',
        start: '2022-05-01',
        finish: '2022-05-05',
        predecessor: 120,
        assignee: 2,
        type: 'parent',
        tag: 'A',
      },
      children: [
        {
          duration: '18',
          task: 'Find Venue Provider',
          start: '2022-05-01',
          finish: '2022-05-05',
          predecessor: 120,
          assignee: 2,
          type: 'child',
          tag: 'A',
        },
        {
          duration: '18',
          task: 'Find Venue Provider',
          start: '2022-05-01',
          finish: '2022-05-05',
          predecessor: 120,
          assignee: 2,
          type: 'child',
          tag: 'A',
        },
      ],
      tag: 'A',
    },
    {
      parent: {
        duration: '18',
        task: 'Wedding Venue',
        start: '2022-06-01',
        finish: '2022-05-05',
        predecessor: 120,
        assignee: 2,
        type: 'parent',
        tag: 'B',
      },
      children: [
        {
          duration: '18',
          task: 'Find Venue Provider',
          start: '2022-05-02',
          finish: '2022-05-05',
          predecessor: 120,
          assignee: 2,
          type: 'child',
          tag: 'B',
        },
        {
          duration: '18',
          task: 'Find Venue Provider',
          start: '2022-05-03',
          finish: '2022-05-05',
          predecessor: 120,
          assignee: 2,
          type: 'child',
          tag: 'B',
        },
      ],
      tag: 'B',
    },
  ])

  const [groupList, setGroupList] = useState(
    Array.from(new Set(cardList.map(card => card.tag))),
  )

  useEffect(() => {
    setNewCardList(sortCards(cardList))
    setGroupList(Array.from(new Set(cardList.map(card => card.tag))))
  }, [cardList])

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
        <div tw="mb-7">
          <h3>Attendees</h3>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 77fr 23fr;
            gap: 36px;
            margin-bottom: 40px;
          `}
        >
          <div tw="flex flex-row items-center gap-6 flex-wrap">
            {infoCards.map((card, ind) => (
              <VendorInfoCard cardData={card} key={ind} />
            ))}
          </div>
          <div tw="h-24">
            <YeveWallet />
          </div>
        </div>
        <div>
          <div tw="flex flex-row items-center gap-4 justify-between">
            <h5>Planning</h5>
            <p
              tw="flex flex-row items-center gap-3 cursor-pointer"
              onClick={() => {
                setModalChild(
                  <Plan cardList={cardList} setCardList={setCardList} />,
                )
                setOpenModal(true)
              }}
            >
              <span tw="text-gold">View Plan</span> <FiCalendar />
            </p>
          </div>
          <GridTable
            list={cardList}
            headers={[
              { title: '' },
              { title: 'Tasks', key: 'task' },
              { title: 'Duration (days)', key: 'duration' },
              { title: 'Start', key: 'start' },
              { title: 'Finish', key: 'finish' },
              { title: 'Predecessor', key: 'predecessor' },
              { title: 'Assignee', key: 'assignee' },
            ]}
            groups={groupList}
            setCardList={setCardList}
          />
        </div>
      </div>
    </section>
  )
}

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsEventLayout>
      <DashboardRoot
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

export default Dashboard
