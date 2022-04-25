import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import profileImg from '../../images/profile-img.png'
import bannerImg from '../../images/profile-banner.png'
import { CreatePost } from '../UI/Modals/ModalChildren'
import { BsShop, BsQuestionCircleFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import { HiOutlineLocationMarker, HiStar } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'
import Button from '../UI/Buttons/Button'
import TabBar from '../UI/TabBar'
import { sectionStyles } from '../../styles/GeneralStyles'
import { ToggleText } from '../formTools'
import { MyProfile, Reviews, Feed, Services } from './homeStates'

const VendorTabs = ({ openModal, setOpenModal, modalChild, setModalChild }) => {
  const profileData = [
    {
      title: 'My Profile',
      component: <MyProfile />,
    },
    {
      title: 'Portfolio',
      component: <MyProfile />,
    },
    {
      title: 'Feed',
      component: <Feed />,
    },
    {
      title: 'Reviews',
      component: <Reviews />,
    },
    {
      title: 'Services',
      component: <Services />,
    },
  ]
  const profileDataMobile = [
    {
      title: <BsShop size={18} />,
      component: <MyProfile />,
    },
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
      component: <Reviews />,
    },
    {
      title: <BsShop size={18} />,
      component: <Feed />,
    },
  ]
  return (
    <section
      css={css`
        // width: 100%;

        max-width: 900px;
        width: 100%;
        > :nth-child(2) {
          display: none;
        }
        > div > :first-child > div {
          justify-content: center;
        }
        > div > :first-child > div > div {
          padding-left: 20px;
          padding-right: 20px;
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
                setOpenModal(true)
              }}
            >
              Create
            </Button>
          </div>
        }
      />
    </section>
  )
}

export const VendorProfile = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  return (
    <>
      <section css={sectionStyles} style={{ overflow: 'hidden', padding: '0' }}>
        <div
          css={css`
            width: 100%;
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
          <h5>Profile</h5>
          <button tw="grid place-items-center bg-gold text-white px-4 py-3 text-base font-bold rounded-lg">
            <MdAdd size={18} />
          </button>
        </div>
        <div tw="flex flex-col items-center">
          <div
            css={css`
              width: 100%;
              height: 220px;
              border-radius: 4px;
              overflow: hidden;
            `}
          >
            <Image src={bannerImg} alt="banner" />
          </div>
          <div
            css={css`
              // transform: translateY(-8%);
              transform: matrix(1, 0, 0, 1, 0, -94.8);

              width: 100%;
            `}
          >
            <div tw="flex flex-col items-center relative">
              <div
                tw="flex flex-row items-start justify-between w-full"
                css={css`
                  transform: translateY(200%);
                `}
              >
                <div tw="flex flex-col items-start gap-2">
                  <div tw="flex flex-row items-start justify-between gap-1">
                    <BsQuestionCircleFill />
                    Support Me
                  </div>
                  <ToggleText
                    checkedChildren="On"
                    unCheckedChildren="Off"
                    changeFunc={() => {}}
                  />
                </div>
                <div tw="flex flex-row items-center justify-between gap-2">
                  Share
                  <FiShare2 />
                </div>
              </div>
              <div
                css={css`
                  width: 120px;
                  height: 120px;
                  border: 2px solid #ffffff;
                  border-radius: 50%;
                  @media (max-width: 1140px) {
                    width: 68px;
                    height: 68px;
                  }
                `}
              >
                <Image src={profileImg} alt="" />
              </div>
              <h4>Lillian Brooks</h4>
              <div tw="flex flex-row items-center gap-4">
                <span>KEYBOARDIST</span>
                <div tw="flex flex-row items-center gap-2 font-semibold">
                  <HiOutlineLocationMarker /> London, United Kingdom
                </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna
                ut lorem consequat. Lorem ipsum dolor sit.
              </p>
            </div>
            <VendorTabs
              openModal={openModal}
              setOpenModal={setOpenModal}
              modalChild={modalChild}
              setModalChild={setModalChild}
            />
          </div>
        </div>
      </section>
    </>
  )
}
