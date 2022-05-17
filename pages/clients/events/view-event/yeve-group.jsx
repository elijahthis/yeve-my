import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import TabBar from '../../../../components/UI/TabBar'
import {
  ProfileInfo,
  Payment,
} from '../../../../components/clients/accountParts'
import YeveGroupLayout from '../../../../layouts/yeveGroupLayout'
import MessagingLayout from '../../../../components/Layout/MainSections/MessagingLayout'
import {
  MessagingTopBar,
  MessagingBody,
  MessagingBottom,
  SubGroupAside,
} from '../../../../components/UI/Messaging'
import { sectionStyles } from '../../../../styles/GeneralStyles'
import { SearchBar } from '../../../../components/formTools'
import BackButton from '../../../../components/UI/Buttons/BackButton'
import Button from '../../../../components/UI/Buttons/Button'
import SortComponent from '../../../../components/pieces/sort'
import { AddAttendees } from '../../../../components/UI/Modals/ModalChildren'
import Modal from '../../../../components/UI/Modals/Modal'

const YeveGroupRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  currentSubGroup,
}) => {
  const router = useRouter()

  useEffect(() => {
    console.log(currentSubGroup)
  }, [currentSubGroup])

  return (
    <MessagingLayout>
      <div
        css={css`
          height: 100%;
          display: grid;
          grid-template-rows: 57px 1fr 122px;
          background-color: #fafafa;
        `}
      >
        <MessagingTopBar currentSubGroup={currentSubGroup} />
        <MessagingBody />
        <MessagingBottom />
      </div>
      <SubGroupAside currentSubGroup={currentSubGroup} />
    </MessagingLayout>
  )
}

const YeveGroup = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <YeveGroupLayout>
      <YeveGroupRoot
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalChild={modalChild}
        setModalChild={setModalChild}
        // currentSubGroup={currentSubGroup}
      />
      {mounted ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          {modalChild}
        </Modal>
      ) : null}
    </YeveGroupLayout>
  )
}

export default YeveGroup
