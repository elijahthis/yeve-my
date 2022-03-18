import tw, { css } from 'twin.macro'
import { PendingActionsBanner } from '../pieces/pendingActions'
import { sectionStyles } from '../../styles/GeneralStyles'
import { BsShop } from 'react-icons/bs'
import { VendorInfoCard } from '../pieces/cards'
import { VendorProfile } from './homeParts'
import { UpcomingLiveList, NewsCard } from '../pieces/cards'
import YeveWallet from '../pieces/yeveWallet'
import imgPlaceholder from '../../images/musician-5.png'
import { DateFilter } from '../formTools'

const Home = () => {
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
  const newsData = {
    image: imgPlaceholder,
    title: 'The future of events',
    time: '5h',
    body: 'The coronavirus pandemic has had adevastating effect on the music industryshort-term. Live music revenue, whichwas predicted to generate almost £30bnfor the industry in 2020... Read More',
  }
  return (
    <section>
      <div tw="flex flex-row items-center justify-between py-3 px-4 bg-white">
        <p tw="text-[#8C8C8C] text-sm">You are currently on free plan</p>
        <a href="/" tw="text-gold mr-9">
          View
        </a>
      </div>
      <section css={sectionStyles}>
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
                height: 96px;
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
              {infoCards.map(card => (
                <VendorInfoCard cardData={card} />
              ))}
            </div>
            <div>
              <VendorProfile />
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
                <UpcomingLiveList cardData={upcomingList} />
              </div>
              <div>
                <h5>Live Events</h5>
                <UpcomingLiveList cardData={liveList} />
              </div>
              <div>
                <h5>Yeve News</h5>
                <NewsCard cardData={newsData} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Home
