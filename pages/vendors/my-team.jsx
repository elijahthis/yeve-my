import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import VendorsLayout from '../../layouts/vendorsLayout'
import { sectionStyles } from '../../styles/GeneralStyles'
import profilePlaceholder from '../../images/Ellipse 56.png'
import { CrudOptions } from '../../components/formTools'
import Modal from '../../components/modal'
import { ProceedButton } from '../../components/pieces/Buttons'
import {
  CreateAdmin,
  EditAdmin,
  DeleteAdmin,
} from '../../components/modalChildren'

const TeamMember = ({ data, setOpenModal, setModalChild }) => (
  <div tw="flex flex-row items-center justify-between py-2 px-4 bg-white border border-[#eeeeee] rounded-lg w-full">
    <div tw="flex flex-row items-center gap-4">
      <Image src={data.image} width="40" height="40" />
      <div tw="flex flex-col items-start" style={{ gap: '2px' }}>
        <p tw="text-[#2F364A]">{data.name}</p>
        <p tw="text-[#7D849D]">{data.role}</p>
      </div>
    </div>
    <CrudOptions
      editFunc={() => {
        setModalChild(
          <EditAdmin
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
            data={data}
          />,
        )
        setOpenModal(true)
      }}
      deleteFunc={() => {
        setModalChild(
          <DeleteAdmin
            setOpenModal={setOpenModal}
            setModalChild={setModalChild}
            email={data.email}
          />,
        )
        setOpenModal(true)
      }}
    />
  </div>
)

const MyTeamRoot = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const [email, setEmail] = useState('elvisduru@gmail.com')
  const teamMembers = [
    {
      name: 'Marvis Wakloner',
      role: 'Bass Guitarist',
      email: 'Marvis@frolancer.com',
      image: profilePlaceholder,
    },
    {
      name: 'Elvis Duru',
      role: 'Tech Lead',
      email: 'elviduru@gmail.com',
      image: profilePlaceholder,
    },
  ]
  return (
    <>
      <section css={sectionStyles}>
        <div tw="mb-12">
          <h3>My Team</h3>
        </div>
        <div
          css={css`
            width: 706px;
            margin-left: 114px;
            > div:first-of-type {
              border-bottom: 1px solid #eeeeee;
              padding-bottom: 50px;
              margin-bottom: 24px;
            }
          `}
        >
          <div>
            <div>
              <p tw="text-[#2F364A]">Current Team</p>
              <p tw="text-[#7D849D]">Manage team members</p>
            </div>
            <div
              css={css`
                margin-top: 24px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
              `}
            >
              {teamMembers.map((member, ind) => (
                <TeamMember
                  data={member}
                  key={ind}
                  setOpenModal={setOpenModal}
                  setModalChild={setModalChild}
                />
              ))}
            </div>
            <p
              tw="text-gold text-xs font-semibold cursor-pointer mt-5"
              onClick={() => {
                setModalChild(
                  <CreateAdmin
                    setOpenModal={setOpenModal}
                    setModalChild={setModalChild}
                    email={email}
                  />,
                )
                setOpenModal(true)
              }}
            >
              ADD NEW +
            </p>
          </div>
          <div
            tw="flex flex-row items-center gap-4"
            css={css`
              > :first-child {
                width: 30%;
              }
            `}
          >
            <ProceedButton content="Cancel" bg="#F8F8F8" col="#de8e0e" />
            <ProceedButton content="Save Changes" />
          </div>
        </div>
      </section>
    </>
  )
}

const Requests = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <VendorsLayout>
      <MyTeamRoot
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
    </VendorsLayout>
  )
}

export default Requests
