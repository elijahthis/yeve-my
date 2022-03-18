import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { MyProfile, Reviews, Feed } from '../clients/profileStates'
import profileImg from '../../images/profile-img.png'
import bannerImg from '../../images/profile-banner.png'
import Modal from '../modal'
import { CreatePost } from '../modalChildren'
import { BsShop } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiStar } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { BlackButton } from '../pieces/Buttons'
import TabBar from '../pieces/tabBar'
import { sectionStyles } from '../../styles/GeneralStyles'

const VendorTabs = () => {
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
            <BlackButton
              content={
                <div tw="flex flex-row items-center gap-2">
                  Create <MdAdd color="white" />
                </div>
              }
              onClick={() => {
                setOpenModal(true)
              }}
            />
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
            <BlackButton
              content={
                <div tw="flex flex-row items-center gap-2">
                  Create <MdAdd color="white" />
                </div>
              }
              onClick={() => {
                setOpenModal(true)
              }}
            />
          </div>
        }
      />
    </section>
  )
}

export const VendorProfile = () => {
  return (
    <>
      <section
        css={sectionStyles}
        style={{ overflowY: 'visible', padding: '0' }}
      >
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
        <div tw="flex flex-col items-center relative">
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
              position: absolute;
              top: 60%;
            `}
          >
            <div tw="flex flex-col items-center relative">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna
                ut lorem consequat. Lorem ipsum dolor sit.
              </p>
            </div>
            <VendorTabs />
          </div>
        </div>
      </section>
    </>
  )
}
