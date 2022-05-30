import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ClientsLayout from '../../layouts/clientsLayout'
import { sectionStyles } from '../../styles/GeneralStyles'
import { BsShop } from 'react-icons/bs'
import Modal from '../../components/UI/Modals/Modal'
import {
  MyProfile,
  Reviews,
  Feed,
} from '../../components/clients/profileStates'
import profileImg from '../../images/profile-img.png'
import { CreatePost } from '../../components/UI/Modals/ModalChildren'
import { HiOutlineLocationMarker, HiStar } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'
import Button from '../../components/UI/Buttons/Button'
import TabBar from '../../components/UI/TabBar'

const ProfileRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const profileData = [
    {
      title: 'My Profile',
      component: <MyProfile />,
    },
    {
      title: 'Feed',
      component: <Feed />,
    },
    {
      title: 'Events',
      component: <Feed />,
    },
    {
      title: 'Reviews',
      component: <Reviews />,
    },
  ]
  const profileDataMobile = [
    {
      title: <BsShop size={18} />,
      component: <MyProfile />,
    },
    {
      title: <BsShop size={18} />,
      component: <Feed />,
    },
    {
      title: <BsShop size={18} />,
      component: <Feed />,
    },
    {
      title: <BsShop size={18} />,
      component: <Reviews />,
    },
  ]

  return (
    <section css={sectionStyles}>
      <div
        css={css`
          width: 100%;
          margin-bottom: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          > :last-child {
            display: none;
          }
          @media (max-width: 1140px) {
            margin-bottom: 32px;
            > :last-child {
              display: grid;
            }
          }
        `}
      >
        <h3>My Profile</h3>
        <button tw="grid place-items-center bg-gold text-white px-4 py-3 text-base font-bold rounded-lg">
          <MdAdd size={18} />
        </button>
      </div>
      <div tw="flex flex-col items-center">
        <div
          css={css`
            width: 120px;
            height: 120px;
            @media (max-width: 1140px) {
              width: 68px;
              height: 68px;
            }
          `}
        >
          <Image src={profileImg} alt="" />
        </div>
        <h4>Lillian Brooks</h4>
        <div tw="flex flex-row items-center gap-2 font-semibold">
          <HiOutlineLocationMarker /> London, United Kingdom
        </div>
        <div tw="flex flex-row items-center gap-4 font-semibold">
          <div tw="flex flex-row items-center">
            {Array(5)
              .fill()
              .map((n, ind) => (
                <HiStar color="#DE8E0E" key={ind} />
              ))}
          </div>
          <span
            css={css`
              @media (max-width: 1140px) {
                display: none;
              }
            `}
          >
            4.5 (35 Gigs)
          </span>
        </div>
        <p
          css={css`
            max-width: 490px;
            text-align: center;
            margin-top: 18px;
            margin-bottom: 56px;
            @media (max-width: 1140px) {
              color: #767676;
            }
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit.
        </p>
      </div>

      <section
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <section
          css={css`
            max-width: 900px;
            > :nth-child(2) {
              display: none;
            }
            @media (max-width: 1140px) {
              > :nth-child(1) {
                display: none;
              }
              > :nth-child(2) {
                display: block;
              }
              form {
                display: none;
              }
            }
          `}
        >
          <TabBar
            dataList={profileData}
            actionButton={
              <div
                css={css`
                  button {
                    padding: 8px 16px;
                  }
                  @media (max-width: 1140px) {
                    display: none;
                  }
                `}
              >
                <Button
                  variant="tertiary"
                  icon={<MdAdd color="white" />}
                  onClick={() => {
                    setModalChild(<CreatePost setOpenModal={setOpenModal} />)
                    setOpenModal(true)
                  }}
                >
                  Create
                </Button>
              </div>
            }
          />
          <TabBar
            dataList={profileDataMobile}
            actionButton={
              <div
                css={css`
                  button {
                    padding: 8px 16px;
                  }
                  @media (max-width: 1140px) {
                    display: none;
                  }
                `}
              >
                <Button
                  variant="tertiary"
                  icon={<MdAdd color="white" />}
                  onClick={() => {
                    setModalChild(<CreatePost setOpenModal={setOpenModal} />)
                    setOpenModal(true)
                  }}
                >
                  Create
                </Button>
              </div>
            }
          />
        </section>
      </section>
    </section>
  )
}

const Profile = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <ProfileRoot
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
    </>
  )
}

Profile.getLayout = page => <ClientsLayout>{page}</ClientsLayout>

export default Profile
