import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import StoryCard from '../Components/StoryCard'

const OurStory = () => {
  const cardList = [
    {
      title: 'How we Met',
      date: 'DECEMBER, 2015',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mag',
      image: '/images/WhenWhere-1.png',
    },
    {
      title: 'Courtship',
      date: 'DECEMBER, 2015',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mag',
      image: '/images/WhenWhere-2.png',
    },
    {
      title: 'Wedding',
      date: 'DECEMBER, 2015',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mag',
      image: '/images/WhenWhere-3.png',
    },
  ]

  return (
    <section
      css={weddingSection}
      style={{ background: '#FAFAFA', paddingTop: '48px' }}
    >
      <h4>WE LOVE EACH OTHER</h4>
      <h2>Our Story</h2>
      <p className="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
        lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A mag
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          //   align-items: flex-start;
          gap: 96px;
          width: 100%;
        `}
      >
        {cardList.map((card, ind) => (
          <StoryCard cardData={card} key={ind} index={ind} />
        ))}
      </div>
    </section>
  )
}

export default OurStory
