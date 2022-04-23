import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import EventCard from '../../Regular/EventCard'
import cardPlaceholder from '../../../../images/art.png'

const WhenWhere = () => {
  const cardList = [
    {
      image: '/images/wedding-loc-1.png',
      date: 'SAT, OCT 17',
      time: '15:00',
      title: 'The Solemnization',
      location: 'Concert hall • London',
    },
    {
      image: '/images/wedding-loc-2.png',
      date: 'SAT, OCT 17',
      time: '15:00',
      title: 'The Reception',
      location: 'Concert hall • London',
    },
    {
      image: '/images/wedding-loc-3.png',
      date: 'SAT, OCT 17',
      time: '15:00',
      title: 'Unable to join physically?',
      location:
        'Please respond to our RSVP so we can send you a live stream link for important updates',
    },
  ]
  return (
    <section css={weddingSection}>
      <h4>CELEBRATE WITH US</h4>
      <h2>When & Where?</h2>
      <div tw="flex flex-row items-center justify-between w-full" css={css``}>
        {cardList.map((card, ind) => (
          <EventCard cardData={card} key={ind} actions={false} />
        ))}
      </div>
    </section>
  )
}

export default WhenWhere
