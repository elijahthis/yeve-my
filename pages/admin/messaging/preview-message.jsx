import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import { sectionStyles, formStyles } from '../../../styles/GeneralStyles'
import profilePlaceholder from '../../../images/Ellipse 56.png'
import Modal from '../../../components/modal'
import { PreviewMessageCard } from '../../../components/pieces/cards'

const PreviewMessageRoot = ({ setOpenModal, setModalChild }) => {
  const router = useRouter()
  return (
    <section css={sectionStyles}>
      <h3>Create Message</h3>
      <p tw="my-6">
        <span
          onClick={() => router.push('/admin/messaging')}
          tw="cursor-pointer text-[#767676]"
        >
          Messaging
        </span>{' '}
        /{' '}
        <span onClick={() => Router.back()} tw="cursor-pointer text-[#767676]">
          Create Message
        </span>{' '}
        / Preview Message
      </p>
      <div
        css={css`
          > * {
            margin: 0 auto;
          }
        `}
      >
        <PreviewMessageCard
          setOpenModal={setOpenModal}
          setModalChild={setModalChild}
        />
      </div>
    </section>
  )
}

const PreviewMessage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <AdminLayout>
      <PreviewMessageRoot
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
    </AdminLayout>
  )
}

export default PreviewMessage
