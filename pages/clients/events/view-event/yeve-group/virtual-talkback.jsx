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
import { VTTopbar, VTBottom, VTBody } from '../../../../../components/UI/VT'
import MiniTalkback from '../../../../../components/UI/VT/MiniTalkback'
import VTAside from '../../../../../components/UI/VT/VTAside'
import SubGroupAside from '../../../../../components/UI/Messaging/SubGroupAside'
import Modal from '../../../../../components/UI/Modals/Modal'

const VirtualTalkbackRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
  currentSubGroup,
}) => {
  const router = useRouter()
  const [showSide, setShowSide] = useState(true)
  const [audioMute, setAudioMute] = useState(false)
  const [micMute, setMicMute] = useState(false)
  const [attendees, setAttendees] = useState([
    {
      name: 'Elijah',
      image: '/images/Ellipse 56.png',
      role: 'Admin',
      you: true,
    },
    {
      name: 'John',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Derek',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Mike',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
  ])
  const [minified, setMinified] = useState(false)

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
          {/* <MessagingTopBar
            currentSubGroup={currentSubGroup}
            showSide={showSide}
            setShowSide={setShowSide}
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
          /> */}
          {minified ? (
            <MessagingTopBar
              currentSubGroup={currentSubGroup}
              showSide={showSide}
              setShowSide={setShowSide}
              setOpenModal={setOpenModal}
              setModalChild={setModalChild}
            />
          ) : (
            <VTTopbar
              minified={minified}
              setMinified={setMinified}
              setShowSide={setShowSide}
            />
          )}
          {minified ? (
            <MessagingBody />
          ) : (
            <VTBody attendees={attendees} setAttendees={setAttendees} />
          )}
          {/* <MessagingBottom /> */}
          {minified ? (
            <MessagingBottom />
          ) : (
            <VTBottom
              audioMute={audioMute}
              setAudioMute={setAudioMute}
              micMute={micMute}
              setMicMute={setMicMute}
            />
          )}
        </div>
        {showSide ? (
          minified ? (
            <MiniTalkback
              attendees={attendees}
              showSide={showSide}
              setShowSide={setShowSide}
              minified={minified}
              setMinified={setMinified}
            />
          ) : (
            <VTAside
              attendees={attendees}
              showSide={showSide}
              setShowSide={setShowSide}
            />
          )
        ) : null}
      </div>
    </MessagingLayout>
  )
}

const VirtualTalkback = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <VirtualTalkbackRoot
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
    </>
  )
}

VirtualTalkback.getLayout = page => <YeveGroupLayout>{page}</YeveGroupLayout>

export default VirtualTalkback
