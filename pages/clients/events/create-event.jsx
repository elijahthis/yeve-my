import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { formStyles } from '../../../styles/GeneralStyles'
import ClientsLayout from '../../../layouts/clientsLayout'
import { EventCard } from '../../../components/pieces/cards'
import { sectionStyles } from '../../../styles/GeneralStyles'
import imgPlaceholder from '../../../images/Group 526.png'
import { BackButton } from '../../../components/pieces/Buttons'
import {
  BooleanToggle,
  DropdownMenu,
  DatePickerr,
} from '../../../components/formTools'
import Modal from '../../../components/modal'

export const CreateEventRoot = () => {
  const router = useRouter()
  const eventList = ['Wedding', 'Birthday', 'Concert']
  const dressCodeList = ['Formal', 'Casual', 'Smart Casual', 'Native']
  return (
    <section css={sectionStyles} style={{ backgroundColor: 'white' }}>
      <div tw="flex flex-row items-center mb-4">
        <BackButton
          onClick={() => {
            router.push('/clients/events')
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

const Events = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalChild, setModalChild] = useState(<></>)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ClientsLayout>
      <CreateEventRoot
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
    </ClientsLayout>
  )
}

export default Events
