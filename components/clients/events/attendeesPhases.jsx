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
  const [capacity, setCapacity] = useState(12)
  const [tableCount, setTableCount] = useState(3)
  const [draggingVal, setDraggingVal] = useState({})

  const [seatLists, setSeatLists] = useState(
    Array(tableCount)
      .fill(null)
      .map(table =>
        Array(capacity)
          .fill(null)
          .map((item, ind) => ({ seatNumber: ind + 1, person: null })),
      ),
  )

  const guestList = [
    'John Green',
    'Elvis Duru',
    'Elijah Oyerinde',
    'Will Bambo',
    'Dee Willis',
  ]

  const [tableList, setTableList] = useState(
    Array(tableCount)
      .fill(null)
      .map((table, ind) => {
        return {
          tableNumber: ind + 1,
          name: 'Groom',
          seats: seatLists[ind],
          guests: [...guestList],
        }
      }),
  )

  const [tableData, setTableData] = useState([])
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const newList = [...tableList]
    newList.forEach(item => {
      item.seats = Array(parseInt(capacity))
        .fill(null)
        .map((item, ind) => ({ seatNumber: ind + 1, person: null }))
    })
    setTableList(newList)
  }, [capacity])

  useEffect(() => {
    setTableData(generateTableData(tableList))
    const newList = []
    tableList.map(item => {
      console.log(item.seats)
      newList.push(morphData(item.seats, item.tableNumber))
    })
    setChartData(newList)
    console.log(chartData)
  }, [tableList])

  useEffect(() => {
    const newList = Array(tableCount)
      .fill(null)
      .map(table =>
        Array(capacity)
          .fill(null)
          .map((item, ind) => ({ seatNumber: ind + 1, person: null })),
      )
    setSeatLists(newList)
  }, [tableCount])

  useEffect(() => {
    const newList2 = Array(tableCount)
      .fill(null)
      .map((table, ind) => {
        return {
          tableNumber: ind + 1,
          name: 'Groom',
          seats: seatLists[ind],
          guests: [...guestList],
        }
      })
    const filteredList = newList2.filter(item => item.seats !== undefined)
    if (filteredList.length !== 0) {
      setTableList(newList2)
      console.log(seatLists)
    }
  }, [seatLists])

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
                  tableCount={tableCount}
                  setTableCount={setTableCount}
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
            capacity={capacity}
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
