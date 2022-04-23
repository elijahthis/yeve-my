import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import VendorsLayout from '../../layouts/vendorsLayout'
import PendingActionsBanner from '../../components/UI/Banners/PendingActionsBanner'
import { sectionStyles } from '../../styles/GeneralStyles'
import { BsShop } from 'react-icons/bs'
import { VendorProfile } from '../../components/vendors/homeParts'
import {
  UpcomingLiveListCard,
  NewsCard,
  ServicesListCard,
  VendorInfoCard,
} from '../../components/UI/Cards'
import YeveWallet from '../../components/pieces/yeveWallet'
import imgPlaceholder from '../../images/musician-5.png'
import { DateFilter } from '../../components/formTools'
import Modal from '../../components/UI/Modals/Modal'
import { ProceedButton } from '../../components/pieces/Buttons'

export const HomeRoot = ({
  openModal,
  setOpenModal,
  modalChild,
  setModalChild,
}) => {
  const infoCards = [
    {
      title: 'Number of Gigs',
      value: 137,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Total Income',
      value: 488.0,
      icon: <BsShop size={21} />,
      money: true,
    },
    {
      title: 'Followers',
      value: 356,
      icon: <BsShop size={21} />,
      money: false,
    },
    {
      title: 'Page Views',
      value: 1034,
      icon: <BsShop size={21} />,
      money: false,
    },
  ]
  const upcomingList = [
    {
      gig: 'Bass Guitarist',
      clientName: 'Client Name',
      date: 'Aug 20, 2021',
      time: '15:00',
      address: '10 Downing street, SE11 6FA',
    },
    {
      gig: 'Bass Guitarist',
      clientName: 'Client Name',
      date: 'Aug 20, 2021',
      time: '15:00',
      address: '10 Downing street, SE11 6FA',
    },
  ]
  const liveList = [
    {
      gig: 'Bass Guitarist',
      clientName: 'Client Name',
      date: 'Aug 20, 2021',
      time: '15:00',
      address: '10 Downing street, SE11 6FA',
    },
  ]
  const myServicesList = ['Service 1', 'Service 2', 'Service 3']
  const newsData = {
    image: imgPlaceholder,
    title: 'The future of events',
    time: '5h',
    body: 'The coronavirus pandemic has had adevastating effect on the music industryshort-term. Live music revenue, whichwas predicted to generate almost £30bnfor the industry in 2020... Read More',
  }

  const router = useRouter()

  return (
    <section>
      <div tw="flex flex-row items-center justify-between py-3 px-4 bg-white">
        <p tw="text-[#8C8C8C] text-sm">You are currently on free plan</p>
        <p
          tw="text-gold mr-9 font-semibold cursor-pointer"
          onClick={() => {
            router.push('/vendors/upgrade')
          }}
        >
          View
        </p>
      </div>
      <section
        css={sectionStyles}
        style={{ height: 'calc(100vh - 102px - 45px)', overflowY: 'scroll' }}
      >
        <PendingActionsBanner />
        <section
          css={css`
            display: grid;
            grid-template-columns: 77fr 23fr;
            gap: 36px;
            > * {
              > :first-child {
                height: 48px;
                margin-bottom: 24px;
              }
              > :nth-child(2) {
                min-height: 96px;
                margin-bottom: 64px;
              }
              > :nth-child(3) {
                // height: 96px;
                h5 {
                  margin-bottom: 16px;
                }
              }
            }
          `}
        >
          <div>
            <h3>Home</h3>
            <div tw="flex flex-row items-center gap-6 flex-wrap">
              {infoCards.map((card, ind) => (
                <VendorInfoCard cardData={card} key={ind} />
              ))}
            </div>
            <div>
              <VendorProfile
                openModal={openModal}
                setOpenModal={setOpenModal}
                modalChild={modalChild}
                setModalChild={setModalChild}
              />
            </div>
          </div>
          <div>
            <div>
              <DateFilter />
            </div>
            <div tw="h-24">
              <YeveWallet />
            </div>
            <div
              css={css`
                > * {
                  margin-bottom: 40px;
                }
              `}
            >
              <div>
                <h5>Upcoming Events</h5>
                <UpcomingLiveListCard cardData={upcomingList} />
              </div>
              <div>
                <h5>Live Events</h5>
                <UpcomingLiveListCard cardData={liveList} />
              </div>
              <div>
                <h5>Yeve News</h5>
                <NewsCard cardData={newsData} />
              </div>
              <div>
                <div tw="flex flex-row items-center justify-between mb-4">
                  <h5 style={{ marginBottom: '0' }}>My Services</h5>
                  <p>0/3 added</p>
                </div>
                <ServicesListCard cardData={myServicesList} />
              </div>
              <div>
                <ProceedButton
                  content="Generate Quote"
                  onClick={() => {
                    router.push('/vendors/my-requests/generate-quoteB')
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <VendorsLayout>
      <HomeRoot
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

export default Home
