import tw, { css } from 'twin.macro'
import { CustomTable } from '../../pieces/customTable'
import MenuControl from '../../pieces/menuControl'
import { SendMessage, EditTables } from '../../UI/Modals/ModalChildren'
import { SeatingChart, SeatingChart2 } from '../../pieces/seatingChart'
import { useState } from 'react'

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

  const messageFunc = () => {
    setModalChild(<SendMessage image={true} />)
    setOpenModal(true)
  }
  const list = [
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 2,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 4,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 1,
    },
    {
      name: 'John Smith',
      table: 1,
    },
  ]

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
            { title: 'Name', key: 'name' },
            { title: 'Table', key: 'table' },
          ]}
          list={list}
        />
      </div>
      <div
        css={css`
          // width: max-content;
          display: flex;
          flex-direction: row;
          align-items: start;
          flex-wrap: wrap;
          gap: 60px;
          margin-top: 52px;
        `}
      >
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
        <SeatingChart2
          title="T1"
          index={1}
          dataList={list}
          group={{ name: "Bride's Family", ind: 1 }}
          capacity={capacity}
        />
      </div>
    </div>
  )
}
