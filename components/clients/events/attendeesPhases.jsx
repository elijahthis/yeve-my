import tw, { css } from 'twin.macro'
import CustomTable from '../../UI/CustomTable'
import MenuControl from '../../pieces/menuControl'
import { SendMessage, EditTables } from '../../UI/Modals/ModalChildren'
import { useState, useEffect } from 'react'
import { MyResponsivePie } from '../../UI/SeatingChart'
import {
  morphData,
  generateTableData,
} from '../../UI/SeatingChart/dataHandlers'

export const AllAttendees = ({ list, setOpenModal, setModalChild }) => {
  const messageFunc = () => {
    setModalChild(<SendMessage image={true} />)
    setOpenModal(true)
  }
  const seatingData = { name: 'T1', capacity: 12, list: [] }

  return (
    <>
      <CustomTable
        headers={[
          { title: 'Name', key: 'name' },
          { title: 'Email Address', key: 'email' },
          { title: 'Date', key: 'date' },
          { title: 'Table', key: 'table' },
          { title: 'Group', key: 'group' },
          {
            title: '',
            key: 'actions',
            type: 'actions-mud',
            messageFunc: messageFunc,
          },
        ]}
        list={list}
      />
    </>
  )
}

const GroupTitle = () => {}

export const GroupsAttendees = ({ setOpenModal, setModalChild }) => {
  const messageFunc = () => {
    setModalChild(<SendMessage image={true} />)
    setOpenModal(true)
  }

  const brideList = [
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
    },
    {
      name: 'John Smith',
      email: 'JohnSmith@gmail.com',
      date: 'Aug 20, 2021  15:00',
      table: '',
    },
  ]

  const groupList = [
    {
      title: 'Bride’s Family',
      desc: 'The family of the bride',
      component: (
        <CustomTable
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date', key: 'date' },
            { title: 'Table', key: 'table' },
            {
              title: '',
              key: 'actions',
              type: 'actions-mud',
              messageFunc: messageFunc,
            },
          ]}
          list={brideList}
        />
      ),
      get getterFunc() {
        return this
      },
    },
    {
      title: 'Groom’s Family',
      desc: 'The family of the groom',
      component: (
        <CustomTable
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date', key: 'date' },
            { title: 'Table', key: 'table' },
            {
              title: '',
              key: 'actions',
              type: 'actions-mud',
              messageFunc: messageFunc,
            },
          ]}
          list={brideList}
        />
      ),
    },
    {
      title: 'Bridesmaid',
      desc: 'Bridesmaid',
      component: (
        <CustomTable
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date', key: 'date' },
            { title: 'Table', key: 'table' },
            {
              title: '',
              key: 'actions',
              type: 'actions-mud',
              messageFunc: messageFunc,
            },
          ]}
          list={brideList}
        />
      ),
    },
    {
      title: 'Groom’s Men',
      desc: 'Groom’s Men',
      component: (
        <CustomTable
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date', key: 'date' },
            { title: 'Table', key: 'table' },
            {
              title: '',
              key: 'actions',
              type: 'actions-mud',
              messageFunc: messageFunc,
            },
          ]}
          list={brideList}
        />
      ),
    },
    {
      title: 'Flower maiden',
      desc: 'The group of flower bearers',
      component: (
        <CustomTable
          headers={[
            { title: 'Name', key: 'name' },
            { title: 'Email Address', key: 'email' },
            { title: 'Date', key: 'date' },
            { title: 'Table', key: 'table' },
            {
              title: '',
              key: 'actions',
              type: 'actions-mud',
              messageFunc: messageFunc,
            },
          ]}
          list={brideList}
        />
      ),
    },
  ]

  return <MenuControl dataList={groupList} />
}

export const TablesAttendees = ({ setOpenModal, setModalChild }) => {
  const [capacity, setCapacity] = useState({ val: 12 })
  const [draggingVal, setDraggingVal] = useState({})

  const seatList1 = [
    { seatNumber: 1, person: null },
    { seatNumber: 2, person: null },
    { seatNumber: 3, person: null },
    { seatNumber: 4, person: null },
    { seatNumber: 5, person: null },
    { seatNumber: 6, person: null },
    { seatNumber: 7, person: null },
    { seatNumber: 8, person: null },
    { seatNumber: 9, person: null },
    { seatNumber: 10, person: null },
    { seatNumber: 11, person: null },
    { seatNumber: 12, person: null },
  ]
  const seatList2 = [
    { seatNumber: 1, person: null },
    { seatNumber: 2, person: null },
    { seatNumber: 3, person: null },
    { seatNumber: 4, person: null },
    { seatNumber: 5, person: null },
    { seatNumber: 6, person: null },
    { seatNumber: 7, person: null },
    { seatNumber: 8, person: null },
    { seatNumber: 9, person: null },
    { seatNumber: 10, person: null },
    { seatNumber: 11, person: null },
    { seatNumber: 12, person: null },
  ]
  const seatList3 = [
    { seatNumber: 1, person: null },
    { seatNumber: 2, person: null },
    { seatNumber: 3, person: null },
    { seatNumber: 4, person: null },
    { seatNumber: 5, person: null },
    { seatNumber: 6, person: null },
    { seatNumber: 7, person: null },
    { seatNumber: 8, person: null },
    { seatNumber: 9, person: null },
    { seatNumber: 10, person: null },
    { seatNumber: 11, person: null },
    { seatNumber: 12, person: null },
  ]

  const guestList = [
    'John Green',
    'Elvis Duru',
    'Elijah Oyerinde',
    'Will Bambo',
    'Dee Willis',
  ]

  const [tableList, setTableList] = useState([
    {
      tableNumber: 1,
      name: 'Groom',
      seats: [...seatList1],
      guests: [...guestList],
    },
    {
      tableNumber: 2,
      name: 'Bride',
      seats: [...seatList2],
      guests: [...guestList],
    },
    {
      tableNumber: 3,
      name: 'Bridesmaids',
      seats: [...seatList3],
      guests: [...guestList],
    },
  ])
  const [tableData, setTableData] = useState([])
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setTableData(generateTableData(tableList))
    const newList = []
    tableList.map(item => {
      newList.push(morphData(item.seats, item.tableNumber))
    })
    setChartData(newList)
    console.log(newList)
  }, [tableList])

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: 21px;
      `}
    >
      <div
        css={css`
          min-width: 286px;
          width: 286px;
          > :nth-child(2) {
            margin-top: 16px;
          }
        `}
      >
        <div tw="mt-3 flex flex-row items-center justify-start">
          19 tables allocated
          <p tw="border-l border-[#e5e5e5] px-2 ml-2">21 tables left</p>
          <span
            tw="cursor-pointer text-gold border-l border-[#e5e5e5] pl-2"
            onClick={() => {
              setModalChild(
                <EditTables
                  setOpenModal={setOpenModal}
                  setModalChild={setModalChild}
                  capacity={capacity}
                  setCapacity={setCapacity}
                />,
              )
              setOpenModal(true)
            }}
          >
            Edit
          </span>
        </div>
        <CustomTable
          headers={[
            { title: 'Name', key: 'attendee' },
            { title: 'Table', key: 'tableNumber' },
          ]}
          list={tableData}
          draggable={true}
          onDragStart={(item, ev) => {
            console.log(item)
            setDraggingVal(item)
          }}
        />
      </div>
      <div
        css={css`
          // width: max-content;

          display: flex;
          flex-direction: row;
          align-items: start;
          flex-wrap: wrap;
          gap: 55px;
          margin-top: 52px;
        `}
      >
        {chartData.map(chartItem => (
          <MyResponsivePie
            data={chartItem}
            draggingVal={draggingVal}
            setDraggingVal={setDraggingVal}
            tableList={tableList}
            setTableList={setTableList}
          />
        ))}
      </div>
    </div>
  )
}
