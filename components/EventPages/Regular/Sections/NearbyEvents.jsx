import tw, { css } from 'twin.macro'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import EventCard from '../EventCard'
import cardPlaceholder from '../../../../images/art.png'

const NearbyEvents = () => {
  const cardList = [
    {
      image: cardPlaceholder,
      date: 'SAT, OCT 17',
      time: '15:00',
      title: '2021 Concert - Live Jam',
      location: 'Concert hall • London',
      attendees: 134,
    },
    {
      image: cardPlaceholder,
      date: 'SAT, OCT 17',
      time: '15:00',
      title: '2021 Concert - Live Jam',
      location: 'Concert hall • London',
      attendees: 134,
    },
    {
      image: cardPlaceholder,
      date: 'SAT, OCT 17',
      time: '15:00',
      title: '2021 Concert - Live Jam',
      location: 'Concert hall • London',
      attendees: 134,
    },
    {
      image: cardPlaceholder,
      date: 'SAT, OCT 17',
      time: '15:00',
      title: '2021 Concert - Live Jam',
      location: 'Concert hall • London',
      attendees: 134,
    },
  ]

  return (
    <div
      css={css`
        padding: 40px 72px;
      `}
    >
      <div tw="flex flex-row items-center justify-between">
        <h5 style={{ marginBottom: '24px' }}>Events near by London</h5>
        <div tw="flex flex-row items-center gap-4">
          <p tw="font-bold text-[#1a1a1a]">View all</p>
          <div tw="flex flex-row items-center gap-6">
            <div tw="w-8 h-8 bg-[#fafafa] grid place-items-center rounded-full cursor-pointer">
              <BiChevronLeft size="28" />
            </div>
            <div tw="w-8 h-8 bg-[#fafafa] grid place-items-center rounded-full cursor-pointer">
              <BiChevronRight size="28" />
            </div>
          </div>
        </div>
      </div>
      <div tw="flex flex-row items-center justify-between">
        {cardList.map((card, ind) => (
          <EventCard cardData={card} key={ind} />
        ))}
      </div>
    </div>
  )
}

export default NearbyEvents
