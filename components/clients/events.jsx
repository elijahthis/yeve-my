import tw, { css } from 'twin.macro'
import { useState } from 'react'
import TabBar from '../pieces/tabBar'
import {
  AllEvents,
  PublishedEvents,
  DraftsEvents,
  CreateEvent,
} from './eventParts'
import { sectionStyles } from '../../styles/GeneralStyles'
import { BlackButton } from '../pieces/Buttons'
import { BsSortDownAlt, BsSortUp, BsListTask, BsGridFill } from 'react-icons/bs'

const Events = () => {
  const [eventsPhase, setEventsPhase] = useState(null)
  const [shape, setShape] = useState(0)
  const eventsTabData = [
    { title: 'All event', component: <AllEvents /> },
    { title: 'Published', component: <PublishedEvents /> },
    { title: 'Draft', component: <DraftsEvents /> },
    { title: 'Past', component: <></> },
  ]

  switch (eventsPhase) {
    case null:
      return (
        <section css={sectionStyles}>
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                button {
                  padding: 8px 16px;
                }
              `}
            >
              <h3>Events</h3>
              <BlackButton
                content="Create new event"
                bg="#1a1a1a"
                col="white"
                onClick={() => {
                  setEventsPhase(0)
                }}
              />
            </div>
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
              <TabBar
                dataList={eventsTabData}
                switchShapeIcon={[<BsListTask />, <BsGridFill />]}
                shape={shape}
                setShape={setShape}
              />
            </div>
          </div>
        </section>
      )

      break

    case 0:
      return <CreateEvent setEventsPhase={setEventsPhase} />

    default:
      return (
        <section css={sectionStyles}>
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                button {
                  padding: 8px 16px;
                }
              `}
            >
              <h3>Events</h3>
              <BlackButton
                content="Create new event"
                bg="#1a1a1a"
                col="white"
                onClick={() => {
                  setEventsPhase(0)
                }}
              />
            </div>
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
              <TabBar
                dataList={eventsTabData}
                switchShapeIcon={[<BsListTask />, <BsGridFill />]}
                shape={shape}
                setShape={setShape}
              />
            </div>
          </div>
        </section>
      )
      break
  }
}

export default Events
