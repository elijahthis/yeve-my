import tw, { css } from 'twin.macro'
import { CustomTable } from '../../UI/CustomTable'
import { SendMessage, NewMeal } from '../../UI/Modals/ModalChildren'
import MenuControl from '../../pieces/menuControl'

export const AllRSVP = ({ list, setOpenModal, setModalChild }) => {
  const messageFunc = () => {
    setModalChild(<SendMessage image={true} />)
    setOpenModal(true)
  }

  return (
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
  )
}

export const MealsRSVP = ({ list, setOpenModal, setModalChild }) => {
  return (
    <div>
      <div tw="mt-3 text-gold">
        <span
          tw="cursor-pointer"
          onClick={() => {
            setModalChild(
              <NewMeal
                setOpenModal={setOpenModal}
                setModalChild={setModalChild}
              />,
            )
            setOpenModal(true)
          }}
        >
          New Meal +
        </span>
      </div>
      <CustomTable
        headers={[
          { title: 'Name', key: 'name' },
          { title: 'Description', key: 'desc' },
          { title: 'No. of requests', key: 'requests' },
          {
            title: '',
            key: 'actions',
            type: 'actions-ud',
          },
        ]}
        list={list}
      />
    </div>
  )
}

export const GiftsRSVP = ({ list, setOpenModal, setModalChild }) => {
  const badgeList = {
    green: 'Purchased',
    green: 'Activated',
    gold: 'Pending',
    red: 'Cancelled',
  }
  return (
    <div>
      <div tw="mt-3 text-gold">
        <span
          tw="cursor-pointer"
          onClick={() => {
            setModalChild(
              <NewMeal
                setOpenModal={setOpenModal}
                setModalChild={setModalChild}
              />,
            )
            setOpenModal(true)
          }}
        >
          New Gift +
        </span>
      </div>
      <CustomTable
        headers={[
          { title: 'Name', key: 'name' },
          { title: 'Description', key: 'desc' },
          {
            title: 'Status',
            key: 'status',
            type: 'badge',
            badgeList: badgeList,
          },
          { title: 'Attendee', key: 'attendee' },
          {
            title: '',
            key: 'actions',
            type: 'actions-ud',
          },
        ]}
        list={list}
      />
    </div>
  )
}

export const GroupsRSVP = ({ setOpenModal, setModalChild }) => {
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
