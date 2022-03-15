import tw, { css } from 'twin.macro'
import TabBar from '../pieces/tabBar'
import { ProfileInfo, Payment } from './accountParts'
import { servicesSection } from './services'

const Events = () => {
  const eventsTabData = [
    { title: 'All event', component: <></> },
    { title: 'Published', component: <></> },
    { title: 'Draft', component: <></> },
    { title: 'Past', component: <></> },
  ]
  return (
    <section css={servicesSection}>
      <div>
        <h3>Events</h3>
        <div
          css={css`
            > div > :first-child > div > div {
              padding: 16px 42px;
            }
            @media (max-width: 1140px) {
              > div > div > div {
                justify-content: space-between;
              }
            }
          `}
        >
          <TabBar dataList={eventsTabData} />
        </div>
      </div>
    </section>
  )
}

export default Events
