import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { weddingSection } from '../../Regular/styles'

const WeddingParty = () => {
  const trainList = [
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
    { name: 'John Smith', role: 'Best Man', image: '/images/WhenWhere-1.png' },
  ]

  return (
    <section css={weddingSection}>
      <h4>GROOMSMEN & BRIDAL TRAIN</h4>
      <h2>Wedding Party</h2>
      <p className="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
        lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A mag
      </p>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 72px;
          flex-wrap: wrap;
        `}
      >
        {trainList.map(person => (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;

              .image {
                position: relative;
                width: 10rem;
                height: 10rem;
                margin-bottom: 1rem;
              }

              .name {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-align: center;
                color: #1a1a1a;
                margin-bottom: 0.5rem;
              }
              .role {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #343434;
                text-transform: uppercase;
              }
            `}
          >
            <div className="image">
              <Image src={person.image} layout="fill" objectFit="contain" />
            </div>
            <p className="name">{person.name}</p>
            <p className="role">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WeddingParty
