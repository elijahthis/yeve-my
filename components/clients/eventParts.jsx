import { EventCard } from '../UI/Cards'
import tw, { css } from 'twin.macro'
import { useEffect } from 'react'
import imgPlaceholder from '../../images/Group 526.png'
import { FormSectionLayout } from '../Layout/MainSections'
import FormLayout from '../UI/FormTools/FormLayout'
import FormDiv from '../UI/FormTools/FormDiv'
import InputBlock from '../UI/FormTools/InputBlock'

export const AllEvents = () => {
  useEffect(() => {
    // const router = useRouter()
  })

  const cardList = [
    {
      gig: 'Wedding',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '16 Nov',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
      live: 'Live',
      percent: 87,
    },
    {
      gig: '2021 Concert: Live Jam',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '09 Oct',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
      live: 'Draft',
      percent: 2,
    },
    {
      gig: 'Baby Shower',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '09 Oct',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Monthly',
      live: 'Draft',
      percent: 19,
    },
  ]
  return (
    <div tw="py-4 flex flex-row gap-6 flex-wrap">
      {cardList.map((card, ind) => (
        <EventCard
          cardData={card}
          key={ind}
          clickFunc={() => {
            // router.push('/clients/events/view-event/attendees')
          }}
        />
      ))}
    </div>
  )
}

export const PublishedEvents = () => {
  const cardList = [
    {
      gig: 'Wedding',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '16 Nov',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
      live: 'Live',
      percent: 87,
    },
  ]
  return (
    <div tw="py-4 flex flex-row gap-6 flex-wrap">
      {cardList.map((card, ind) => (
        <EventCard cardData={card} key={ind} />
      ))}
    </div>
  )
}

export const DraftsEvents = () => {
  const cardList = [
    {
      gig: '2021 Concert: Live Jam',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '09 Oct',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Weekly',
      live: 'Draft',
      percent: 2,
    },
    {
      gig: 'Baby Shower',
      name: 'Joseph Pegg',
      image: imgPlaceholder,
      day: '09 Oct',
      time: '22:15',
      price: 120,
      duration: 2,
      frequency: 'Monthly',
      live: 'Draft',
      percent: 19,
    },
  ]
  return (
    <div tw="py-4 flex flex-row gap-6 flex-wrap">
      {cardList.map((card, ind) => (
        <EventCard cardData={card} key={ind} />
      ))}
    </div>
  )
}

export const CreateEvent = ({ setEventsPhase }) => {
  const eventList = ['Wedding', 'Birthday', 'Concert']
  const dressCodeList = ['Formal', 'Casual', 'Smart Casual', 'Native']
  return (
    <FormSectionLayout
      content={{
        title: 'Create Event',
        backFunc: () => {
          setEventsPhase(null)
        },
      }}
    >
      <FormLayout
        onSubmit={ev => {
          ev.preventDefault()
        }}
      >
        <div>
          <h4 style={{ marginTop: '8px' }}>Event Banner</h4>
          <FormDiv>
            <label htmlFor="">
              Event name
              <div></div>
            </label>
          </FormDiv>
        </div>
        <div>
          <h4 style={{ marginTop: '8px' }}>Basic</h4>
          <FormDiv>
            <InputBlock
              variant="text"
              properties={{
                label: 'Event name',
                placeholder: 'Event name',
              }}
            />
            <InputBlock
              variant="textarea"
              properties={{
                label: 'Enter description',
                placeholder: 'Enter description...',
              }}
            />
            <InputBlock
              variant="dropdown"
              properties={{
                label: 'Event category',
                placeholder: 'Select event category',
              }}
              data={{ list: eventList }}
            />
            <InputBlock
              variant="BoolToggle"
              properties={{ label: 'Event Type' }}
              data={{ list: ['Physical', 'Virtual', 'Hybrid'] }}
            />
            <InputBlock
              variant="postcode"
              properties={{
                label: 'Enter postcode',
                placeholder: 'Enter postcode',
              }}
            />
            <InputBlock
              variant="address"
              properties={{
                label: 'Enter address',
                placeholder: 'Enter address',
              }}
            />
          </FormDiv>
        </div>
        <div>
          <div tw="flex flex-row items-center justify-between">
            <h4 style={{ marginTop: '8px' }}>Ticketing</h4>{' '}
            <p>-3% service charge</p>
          </div>
          <FormDiv>
            <InputBlock
              variant="BoolToggle"
              properties={{ label: 'Event Type' }}
              data={{ list: ['Free Event', 'Paid Event'] }}
            />
            <div>
              <p tw="text-base">Number of tickets</p>
              <div
                tw=" flex flex-row items-center gap-4 justify-between"
                css={css`
                  > * {
                    width: 30%;
                  }
                `}
              >
                <InputBlock
                  variant="number"
                  properties={{ label: 'Early Bird' }}
                />
                <InputBlock
                  variant="number"
                  properties={{ label: 'Standard' }}
                />
                <InputBlock variant="number" properties={{ label: 'VIP' }} />
              </div>
            </div>
            <div>
              <p tw="text-base">Ticket Pricing</p>
              <div
                tw=" flex flex-row items-center gap-4 justify-between"
                css={css`
                  > * {
                    width: 30%;
                  }
                `}
              >
                <InputBlock
                  variant="money"
                  properties={{ label: 'Early Bird' }}
                />
                <InputBlock
                  variant="money"
                  properties={{ label: 'Standard' }}
                />
                <InputBlock variant="money" properties={{ label: 'VIP' }} />
              </div>
            </div>
          </FormDiv>
        </div>
        <div>
          <h4 style={{ marginTop: '8px' }}>Location</h4>
          <FormDiv>
            <InputBlock
              variant="dropdown"
              properties={{
                label: 'Location type',
                placeholder: 'Venue',
              }}
              data={{ list: dressCodeList }}
            />
          </FormDiv>
        </div>
        <div>
          <h4 style={{ marginTop: '8px' }}>Date and Time</h4>
          <FormDiv>
            <div
              tw=" flex flex-row items-center gap-4"
              css={css`
                > * {
                  width: 100%;
                }
              `}
            >
              <InputBlock
                variant="date"
                properties={{ label: 'Select Date' }}
              />
              <InputBlock
                variant="time"
                properties={{ label: 'Select Time' }}
              />
            </div>
          </FormDiv>
        </div>
        <div>
          <input type="submit" value="Next" />
        </div>
      </FormLayout>
    </FormSectionLayout>
  )
}
