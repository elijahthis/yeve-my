import tw, { css } from 'twin.macro'
import { useState } from 'react'

import TabBar from '../pieces/tabBar'
import {
  PendingRequests,
  ActiveBookings,
  PastBookings,
  RecurringBookings,
} from './requestParts'
import { SearchBar, DropdownMenu } from '../formTools'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'
import { sectionStyles } from '../../styles/GeneralStyles'
import Modal from '../modal'
import {
  RequestsBase,
  RequestSummary,
  GenerateQuote,
  PreviewQuote,
} from './requestPhases'

const Requests = ({ requestsPhase, setRequestsPhase }) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)

  switch (requestsPhase) {
    case null:
      return (
        <RequestsBase
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
        />
      )
      break

    case 0:
      return (
        <RequestSummary
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          setRequestsPhase={setRequestsPhase}
        />
      )

    case 1:
      return (
        <GenerateQuote
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          setRequestsPhase={setRequestsPhase}
        />
      )
    case 2:
      return (
        <PreviewQuote
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalChild={modalChild}
          setModalChild={setModalChild}
          setRequestsPhase={setRequestsPhase}
        />
      )

    default:
      break
  }
}

export default Requests
