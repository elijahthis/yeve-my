import { EventCard } from '../UI/Cards'
import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { sectionStyles, formStyles } from '../../styles/GeneralStyles'
import imgPlaceholder from '../../images/Group 526.png'
import { BackButton } from '../pieces/Buttons'
import { BooleanToggle, DropdownMenu, DatePickerr } from '../formTools'
import CustomTable from '../UI/CustomTable'
import { SendMessage } from '../UI/Modals/ModalChildren'

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
    <section css={sectionStyles} style={{ backgroundColor: 'white' }}>
      <div tw="flex flex-row items-center mb-4">
        <BackButton
          onClick={() => {
            setEventsPhase(null)
          }}
        />
        <h3
          css={css`
            margin-left: 40px;
            @media (max-width: 1140px) {
              margin-left: 16px;
            }
          `}
        >
          Create Event
        </h3>
      </div>
      <div css={formStyles}>
        <div></div>
        <div>
          <form
            action=""
            onSubmit={ev => {
              ev.preventDefault()
            }}
          >
            <div>
              <h4 style={{ marginTop: '8px' }}>Event Banner</h4>
              <div className="form-div">
                <label htmlFor="">
                  Event name
                  <div></div>
                </label>
              </div>
            </div>
            <div>
              <h4 style={{ marginTop: '8px' }}>Basic</h4>
              <div className="form-div">
                <label htmlFor="">
                  Event name
                  <input
                    id=""
                    name=""
                    type="text"
                    placeholder="Event name"
                    // value={formData.details.postcode}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.details.postcode = ev.target.value
                    //   setFormData(newData)
                    // }}
                  />
                </label>
                <label htmlFor="moreInfo">
                  Event description
                  <textarea
                    name="moreInfo"
                    id="moreInfo"
                    tw="resize-none"
                    placeholder="Enter description..."
                    // value={formData.details.moreInfo}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.details.moreInfo = ev.target.value
                    //   setFormData(newData)
                    // }}
                  ></textarea>
                  <p tw="text-right">0/200</p>
                </label>
                <label htmlFor="">
                  Event category
                  <DropdownMenu
                    list={eventList}
                    placeholder="Select event category"
                    // onChange={val => {
                    //   const newData = { ...formData }
                    //   newData.eventType.type = val
                    //   setFormData(newData)
                    // }}
                  />
                </label>
                <label htmlFor="">
                  Event Type
                  <BooleanToggle
                    list={['Physical', 'Virtual', 'Hybrid']}
                    // value={formData.vendorPreferences.experienceLevel}
                    // onChange={val => {
                    //   const newData = { ...formData }
                    //   newData.vendorPreferences.experienceLevel = val
                    //   setFormData(newData)
                    // }}
                  />
                </label>
                <label htmlFor="">
                  Enter postcode
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    inputmode="numeric"
                    pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                    placeholder="Enter postcode"
                    // value={formData.details.postcode}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.details.postcode = ev.target.value
                    //   setFormData(newData)
                    // }}
                  />
                </label>
                <label htmlFor="address">
                  Enter address
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    // value={formData.details.address}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.details.address = ev.target.value
                    //   setFormData(newData)
                    // }}
                  />
                </label>
              </div>
            </div>
            <div>
              <div tw="flex flex-row items-center justify-between">
                <h4 style={{ marginTop: '8px' }}>Ticketing</h4>{' '}
                <p>-3% service charge</p>
              </div>
              <div className="form-div">
                <label htmlFor="">
                  Event Type
                  <BooleanToggle
                    list={['Free Event', 'Paid Event']}
                    // value={formData.vendorPreferences.experienceLevel}
                    // onChange={val => {
                    //   const newData = { ...formData }
                    //   newData.vendorPreferences.experienceLevel = val
                    //   setFormData(newData)
                    // }}
                  />
                </label>
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
                    <label htmlFor="">
                      Early Bird
                      <input type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                      Standard
                      <input type="number" name="" id="" />
                    </label>
                    <label htmlFor="">
                      VIP
                      <input type="number" name="" id="" />
                    </label>
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
                    <label htmlFor="">
                      Early Bird
                      <div tw="flex flex-row items-center">
                        <div
                          tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                          css={css`
                            height: 47px;
                          `}
                        >
                          &#163;
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          style={{
                            borderRadius: '0 4px 4px 0',
                            borderLeft: 0,
                          }}
                          tw="w-full"
                          //   value={formData.budget[ind].from}
                          //   onChange={ev => {
                          //     const newData = { ...formData }
                          //     newData.budget[ind].from = Number.isNaN(
                          //       parseInt(ev.target.value),
                          //     )
                          //       ? 0
                          //       : parseInt(ev.target.value)
                          //     setFormData(newData)
                          //   }}
                        />
                      </div>
                    </label>
                    <label htmlFor="">
                      Standard
                      <div tw="flex flex-row items-center">
                        <div
                          tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                          css={css`
                            height: 47px;
                          `}
                        >
                          &#163;
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          style={{
                            borderRadius: '0 4px 4px 0',
                            borderLeft: 0,
                          }}
                          tw="w-full"
                          //   value={formData.budget[ind].from}
                          //   onChange={ev => {
                          //     const newData = { ...formData }
                          //     newData.budget[ind].from = Number.isNaN(
                          //       parseInt(ev.target.value),
                          //     )
                          //       ? 0
                          //       : parseInt(ev.target.value)
                          //     setFormData(newData)
                          //   }}
                        />
                      </div>
                    </label>
                    <label htmlFor="">
                      VIP
                      <div tw="flex flex-row items-center">
                        <div
                          tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                          css={css`
                            height: 47px;
                          `}
                        >
                          &#163;
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          style={{
                            borderRadius: '0 4px 4px 0',
                            borderLeft: 0,
                          }}
                          tw="w-full"
                          //   value={formData.budget[ind].from}
                          //   onChange={ev => {
                          //     const newData = { ...formData }
                          //     newData.budget[ind].from = Number.isNaN(
                          //       parseInt(ev.target.value),
                          //     )
                          //       ? 0
                          //       : parseInt(ev.target.value)
                          //     setFormData(newData)
                          //   }}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 style={{ marginTop: '8px' }}>Location</h4>
              <div className="form-div">
                <label htmlFor="">
                  Location type
                  <DropdownMenu
                    list={dressCodeList}
                    placeholder="Venue"
                    // onChange={val => {
                    //   const newData = { ...formData }
                    //   newData.dressCode.dressCode = val
                    //   setFormData(newData)
                    // }}
                  />
                </label>
              </div>
            </div>
            <div>
              <h4 style={{ marginTop: '8px' }}>Date and Time</h4>
              <div className="form-div">
                <div
                  tw=" flex flex-row items-center gap-4"
                  css={css`
                    > * {
                      width: 100%;
                    }
                  `}
                >
                  <label htmlFor="date">
                    Select Date
                    <DatePickerr />
                  </label>
                  <label htmlFor="">
                    Select Time
                    <input type="text" name="" id="" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <input type="submit" value="Next" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
