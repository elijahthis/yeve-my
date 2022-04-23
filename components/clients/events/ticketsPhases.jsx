import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { CustomTable } from '../../pieces/customTable'
import {
  SendMessage,
  NewMeal,
  EditTickets,
} from '../../UI/Modals/ModalChildren'
import MenuControl from '../../pieces/menuControl'

export const AllTickets = ({ list, setOpenModal, setModalChild, filterBy }) => {
  const [ticketList, setTicketList] = useState([])
  useEffect(() => {
    if (filterBy !== 'all') {
      setTicketList(list.filter(item => item.type === filterBy))
    } else {
      setTicketList(list)
    }
  }, [filterBy])

  const messageFunc = () => {
    setModalChild(<SendMessage image={true} />)
    setOpenModal(true)
  }

  return (
    <>
      <div tw="mt-4">
        23 Tickets Left
        <span
          tw="cursor-pointer text-gold border-l border-[#e5e5e5] px-2 mx-2"
          onClick={() => {
            setModalChild(
              <EditTickets
                setOpenModal={setOpenModal}
                setModalChild={setModalChild}
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
          { title: 'Ticket ID', key: 'ticketId' },
          { title: 'Owner', key: 'owner' },
          { title: 'Email', key: 'email' },
          { title: 'Type', key: 'type' },
          { title: 'Date', key: 'date' },
          {
            title: '',
            key: 'actions',
            type: 'actions-mud',
            messageFunc: messageFunc,
          },
        ]}
        list={ticketList}
      />
    </>
  )
}
