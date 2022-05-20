import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import YeveGroupLayout from '../../../../../layouts/yeveGroupLayout'
import MessagingLayout from '../../../../../components/Layout/MainSections/MessagingLayout'
import {
  MessagingTopBar,
  MessagingBody,
  MessagingBottom,
} from '../../../../../components/UI/Messaging'
import SubGroupAside from '../../../../../components/UI/Messaging/SubGroupAside'
import Modal from '../../../../../components/UI/Modals/Modal'

const YeveGroupRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  currentSubGroup,
}) => {
  const router = useRouter()
  const [showSide, setShowSide] = useState(false)

  useEffect(() => {
    console.log(currentSubGroup)
  }, [currentSubGroup])

  return (
    <MessagingLayout>
      <div
        css={css`
          height: 100%;
          display: ${showSide ? 'grid' : 'block'};
          grid-template-columns: 1fr 320px;
          background-color: #fafafa;
        `}
      >
        <div
          css={css`
            height: 100%;
            display: grid;
            grid-template-rows: 57px 1fr 122px;
            background-color: #fafafa;
          `}
        >
          <MessagingTopBar
            currentSubGroup={currentSubGroup}
            showSide={showSide}
            setShowSide={setShowSide}
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
          />
          <MessagingBody />
          <MessagingBottom />
        </div>
        {showSide ? (
          <SubGroupAside
            currentSubGroup={currentSubGroup}
            showSide={showSide}
            setShowSide={setShowSide}
          />
        ) : null}
      </div>
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
