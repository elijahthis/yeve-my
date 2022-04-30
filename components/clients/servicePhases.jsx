import tw, { css } from 'twin.macro'
import { sectionStyles, formStyles } from '../../styles/GeneralStyles'
import { BsArrowRight } from 'react-icons/bs'
import { IoClose, IoPersonOutline } from 'react-icons/io5'
import musician1 from '../../images/musician-1.png'
import musician2 from '../../images/musician-2.png'
import musician3 from '../../images/musician-3.png'
import musician4 from '../../images/musician-4.png'
import musician5 from '../../images/musician-5.png'
import musician6 from '../../images/musician-6.png'
import { useEffect, useState } from 'react'
import { BooleanToggle, DropdownMenu, DatePickerr } from '../formTools'
import BackButton from '../UI/Buttons/BackButton'
import { RequestSubmitted } from '../UI/Modals/ModalChildren'
import { ServiceCard2 } from '../UI/Cards'
import Button from '../UI/Buttons/Button'
import FormLayout from '../UI/FormTools/FormLayout'

export const ChooseService = ({
  servicePhase,
  setServicePhase,
  formData,
  setFormData,
}) => {
  const musicianList = [
    { title: 'Keyboardist', image: musician1 },
    { title: 'Drummer', image: musician2 },
    { title: 'Bass Guitarist', image: musician3 },
    { title: 'Vocalist', image: musician4 },
    { title: 'Electric Guitarist', image: musician5 },
    { title: 'Acoustic Guitarist', image: musician6 },
  ]
  const services = [
    { name: 'Musicians', list: musicianList },
    { name: 'Child Performer', list: musicianList },
    { name: 'Food & Drinks', list: musicianList },
    { name: 'Security', list: musicianList },
    { name: 'Wedding', list: musicianList },
    { name: 'Event Travel', list: musicianList },
  ]
  const [serviceField, setServiceField] = useState(formData.services)

  useEffect(() => {
    const newData = { ...formData }
    newData.services = serviceField

    const ls = []
    serviceField.map(service => {
      ls.push({
        name: service,
        from: '',
        to: '',
      })
    })
    newData.budget = ls
    console.log(newData.budget)

    setFormData(newData)
  }, [serviceField])

  return (
    <section css={sectionStyles} style={{ backgroundColor: 'white' }}>
      <div tw="flex flex-row items-center mb-4">
        <BackButton
          onClick={() => {
            setServicePhase(null)
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
          {services[servicePhase].name}
        </h3>
      </div>
      <div
        tw="rounded-lg mb-6"
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e5e5e5;
          border-right: 0;
          max-width: 1152px;
          width: 100%;
        `}
      >
        <div
          tw="px-3 py-1 bg-white font-semibold flex flex-row items-center justify-between"
          css={css`
            width: calc(100% - 100px);
            @media (max-width: 1140px) {
              width: calc(100% - 45px);
            }
          `}
        >
          <div
            tw="flex flex-row items-center gap-3"
            css={css`
              width: calc(100% - 120px);
              overflow-x: scroll;
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none;
              ::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 1140px) {
                width: calc(100% - 60px);
              }
            `}
          >
            {serviceField.length === 0 ? (
              <p>Choose from the list of services below</p>
            ) : (
              serviceField.map((it, ind) => (
                <div
                  tw="flex flex-row items-center gap-2"
                  css={css`
                    cursor: pointer;

                    > :nth-child(3) {
                      opacity: 0;
                      transition: opacity 0.5s;
                      :hover {
                        opacity: 1;
                      }
                    }
                    :hover {
                      > :nth-child(3) {
                        opacity: 1;
                      }
                    }
                  `}
                  key={ind}
                >
                  <div tw="w-8 h-8 rounded-full bg-[#FDF9F3] grid place-items-center">
                    <IoPersonOutline color="#DE8E0E" />
                  </div>
                  <p
                    css={css`
                      width: max-content;
                    `}
                  >
                    {it}
                  </p>
                  <div
                    tw="bg-[#cf142b] text-white p-1 rounded-full cursor-pointer"
                    onClick={() => {
                      setServiceField(
                        serviceField.filter(x => {
                          return x !== it
                        }),
                      )
                    }}
                  >
                    <IoClose />
                  </div>
                </div>
              ))
            )}
          </div>
          <div
            tw="text-gold cursor-pointer w-max"
            css={css`
              display: ${serviceField.length !== 0 ? 'block' : 'none'};
              @media (max-width: 1140px) {
                span {
                  display: none;
                }
              }
            `}
            onClick={() => {
              setServicePhase(null)
            }}
          >
            Add <span>Service</span> +
          </div>
        </div>

        <button
          type="submit"
          css={css`
            width: 100px;
            height: 100%;
            padding: 12px;
            background-color: ${serviceField.length !== 0
              ? '#de8e0e'
              : '#d2d2d2'};
            color: ${serviceField.length !== 0 ? '#ffffff' : '#8c8c8c'};
            font-weight: 600;
            cursor: pointer;
            border: 1px solid;
            border-color: ${serviceField.length !== 0 ? '#de8e0e' : '#d2d2d2'};
            display: grid;
            place-items: center;
            border-radius: 0px 8px 8px 0px;
            @media (max-width: 1140px) {
              display: none;
            }
          `}
          onClick={() => {
            serviceField.length !== 0 ? setServicePhase(1) : null
          }}
        >
          Proceed
        </button>
        <button
          type="submit"
          css={css`
            width: 45px;
            height: 100%;
            padding: 12px;
            background-color: ${serviceField.length !== 0
              ? '#de8e0e'
              : '#d2d2d2'};
            color: ${serviceField.length !== 0 ? '#ffffff' : '#8c8c8c'};
            font-weight: 600;
            cursor: pointer;
            border: 1px solid;
            border-color: ${serviceField.length !== 0 ? '#de8e0e' : '#d2d2d2'};
            display: none;
            place-items: center;
            border-radius: 0px 8px 8px 0px;
            @media (max-width: 1140px) {
              display: grid;
            }
          `}
          onClick={() => {
            serviceField.length !== 0 ? setServicePhase(1) : null
          }}
        >
          <BsArrowRight />
        </button>
      </div>
      <div
        tw="flex flex-row flex-wrap gap-5"
        css={css`
          gap: 20px;
          @media (max-width: 1140px) {
            gap: 9px;
          }
        `}
      >
        {services[servicePhase].list.map((item, ind) => (
          <div
            css={css`
              width: 276px;
              height: 140px;
              @media (max-width: 1140px) {
                width: clamp(155px, 40vw, 276px);
                height: clamp(80px, 20vw, 140px);
              }
            `}
            key={ind}
          >
            <ServiceCard2
              cardData={item}
              clickFunc={() => {
                serviceField.includes(item.title)
                  ? setServiceField(
                      serviceField.filter(x => {
                        return x !== item.title
                      }),
                    )
                  : setServiceField([...new Set([...serviceField, item.title])])
              }}
              referenceList={serviceField}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export const ServiceRequest = ({
  servicePhase,
  setServicePhase,
  formData,
  setFormData,
}) => {
  const eventList = ['Wedding', 'Birthday', 'Concert']
  const dayList = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const dressCodeList = ['Formal', 'Casual', 'Smart Casual', 'Native']

  return (
    <section css={sectionStyles} style={{ backgroundColor: 'white' }}>
      <div tw="flex flex-row items-center mb-4">
        <BackButton
          onClick={() => {
            setServicePhase(0)
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
          Service Request
        </h3>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 316px 1fr;
          > :nth-child(2) > form > * {
            width: 471px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            font-size: 12px;
            font-weight: 600;
          }
        `}
      >
        <div></div>
        <div>
          <FormLayout
            onSubmit={ev => {
              ev.preventDefault()
              setServicePhase(2)
            }}
          >
            <div>
              <h4 style={{ marginTop: '8px' }}>Event Details</h4>
              <div className="form-div">
                <label htmlFor="">
                  Enter postcode
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    inputmode="numeric"
                    pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                    placeholder="Enter postcode"
                    value={formData.details.postcode}
                    onChange={ev => {
                      const newData = { ...formData }
                      newData.details.postcode = ev.target.value
                      setFormData(newData)
                    }}
                  />
                </label>
                <label htmlFor="address">
                  Enter address
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    value={formData.details.address}
                    onChange={ev => {
                      const newData = { ...formData }
                      newData.details.address = ev.target.value
                      setFormData(newData)
                    }}
                  />
                </label>
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
                <p tw="text-gold text-sm">Add+</p>
                <label htmlFor="">
                  Select number of hours here
                  <DropdownMenu
                    list={[...Array(10).keys()]
                      .slice(1)
                      .map(h =>
                        h === 0 || h === 1 ? h + ' Hour' : h + ' Hours',
                      )}
                    onChange={val => {
                      const newData = { ...formData }
                      newData.details.numHours = parseInt(val.slice(0, -5))
                      setFormData(newData)
                    }}
                  />
                  <p tw="text-right">
                    Standard Hours - 2 hours. Additional hours chargeable{' '}
                  </p>
                </label>
                <label htmlFor="moreInfo">
                  Add more info
                  <textarea
                    name="moreInfo"
                    id="moreInfo"
                    tw="resize-none"
                    placeholder="Add more info"
                    value={formData.details.moreInfo}
                    onChange={ev => {
                      const newData = { ...formData }
                      newData.details.moreInfo = ev.target.value
                      setFormData(newData)
                    }}
                  ></textarea>
                  <p tw="text-right">0/120</p>
                </label>
              </div>
            </div>
            <div>
              <h4>Rehearsals</h4>
              <div className="form-div">
                <div>
                  <p>Rehearsals Needed?</p>
                  <BooleanToggle
                    list={['Yes', 'No']}
                    valueList={[true, false]}
                    value={formData.rehearsals.state}
                    onChange={val => {
                      const newData = { ...formData }
                      newData.rehearsals.state = val
                      setFormData(newData)
                    }}
                  />
                </div>
                {formData.rehearsals.state ? (
                  <>
                    <label>
                      Select Number of rehearsals
                      <DropdownMenu
                        list={[...Array(10).keys()].slice(1)}
                        onChange={val => {
                          const newData = { ...formData }
                          newData.rehearsals.count = parseInt(val)
                          setFormData(newData)
                        }}
                      />
                    </label>
                    <div>
                      <p>Same Event Venue?</p>
                      <BooleanToggle
                        list={['Yes', 'No']}
                        valueList={[true, false]}
                        value={formData.rehearsals.same}
                        onChange={val => {
                          const newData = { ...formData }
                          newData.rehearsals.same = val
                          setFormData(newData)
                        }}
                      />
                    </div>
                  </>
                ) : null}
                {formData.rehearsals.state && !formData.rehearsals.same ? (
                  <>
                    <label htmlFor="">
                      Enter postcode
                      <input
                        id="rehearsal-zip"
                        name="rehearsal-zip"
                        type="text"
                        inputmode="numeric"
                        pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                        placeholder="Enter postcode"
                        value={formData.rehearsals.postcode}
                        onChange={ev => {
                          const newData = { ...formData }
                          newData.rehearsals.postcode = ev.target.value
                          setFormData(newData)
                        }}
                      />
                    </label>
                    <label htmlFor="rehearsal-address">
                      Enter address
                      <input
                        type="text"
                        name="rehearsal-address"
                        id="rehearsal-address"
                        placeholder="Enter address"
                        value={formData.rehearsals.address}
                        onChange={ev => {
                          const newData = { ...formData }
                          newData.rehearsals.address = ev.target.value
                          setFormData(newData)
                        }}
                      />
                    </label>
                    <div
                      tw=" flex flex-row items-center gap-4"
                      css={css`
                        > * {
                          width: 100%;
                        }
                      `}
                    >
                      <label htmlFor="">
                        Select Date
                        <DatePickerr />
                      </label>
                      <label htmlFor="">
                        Select Time
                        <input type="text" name="" id="" />
                      </label>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div>
              <h4>Event Type</h4>
              <div className="form-div">
                <label htmlFor="">
                  Select event type
                  <DropdownMenu
                    list={eventList}
                    placeholder="Select event type"
                    onChange={val => {
                      const newData = { ...formData }
                      newData.eventType.type = val
                      setFormData(newData)
                    }}
                  />
                </label>
                <label htmlFor="">
                  <p>Recurring event?</p>
                  <BooleanToggle
                    list={['Yes', 'No']}
                    valueList={[true, false]}
                    value={formData.eventType.recurring}
                    onChange={val => {
                      const newData = { ...formData }
                      newData.eventType.recurring = val
                      setFormData(newData)
                    }}
                  />
                </label>
                {formData.eventType.recurring ? (
                  <>
                    <div>
                      <p>Same Event Venue?</p>
                      <BooleanToggle
                        list={['Weekly', 'Monthly']}
                        value={formData.eventType.period}
                        onChange={val => {
                          const newData = { ...formData }
                          newData.eventType.period = val
                          setFormData(newData)
                        }}
                      />
                    </div>
                    <label htmlFor="">
                      Select Day
                      <DropdownMenu
                        list={dayList}
                        placeholder="Select Day"
                        onChange={val => {
                          const newData = { ...formData }
                          newData.eventType.dayMonth = val
                          setFormData(newData)
                        }}
                      />
                    </label>
                  </>
                ) : null}
              </div>
            </div>
            <div>
              <h4>Dress Code</h4>
              <div className="form-div">
                <label htmlFor="">
                  Select dress code
                  <DropdownMenu
                    list={dressCodeList}
                    placeholder="Select dress code"
                    onChange={val => {
                      const newData = { ...formData }
                      newData.dressCode.dressCode = val
                      setFormData(newData)
                    }}
                  />
                </label>
              </div>
            </div>
            <div>
              <h4>Budget</h4>
              <div className="form-div">
                {formData.services.map((service, ind) => (
                  <label htmlFor="" key={ind}>
                    {formData.services.length > 1
                      ? service
                      : "I'm willing to spend"}
                    <div
                      tw="flex flex-row items-center gap-2"
                      css={css`
                        > * {
                          width: 100%;
                        }
                      `}
                    >
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
                          value={formData.budget[ind].from}
                          onChange={ev => {
                            const newData = { ...formData }
                            newData.budget[ind].from = Number.isNaN(
                              parseInt(ev.target.value),
                            )
                              ? 0
                              : parseInt(ev.target.value)
                            setFormData(newData)
                          }}
                        />
                      </div>{' '}
                      -{' '}
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
                          type="number"
                          name=""
                          id=""
                          style={{
                            borderRadius: '0 4px 4px 0',
                            borderLeft: 0,
                          }}
                          tw="w-full"
                          value={formData.budget[ind].to}
                          onChange={ev => {
                            const newData = { ...formData }
                            newData.budget[ind].to = Number.isNaN(
                              parseInt(ev.target.value),
                            )
                              ? 0
                              : parseInt(ev.target.value)
                            setFormData(newData)
                          }}
                        />
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4>Vendor Preferences</h4>
              <div className="form-div">
                <label htmlFor="">
                  How many vendors would you like to respond?
                  <DropdownMenu
                    list={[...Array(10).keys()].slice(1)}
                    placeholder="Number of responses"
                    onChange={val => {
                      const newData = { ...formData }
                      newData.vendorPreferences.count = parseInt(val)
                      setFormData(newData)
                    }}
                  />
                </label>
                <label htmlFor="">
                  Desired Vendor Experience level
                  <BooleanToggle
                    list={['All', 'Premium', 'Elite']}
                    value={formData.vendorPreferences.experienceLevel}
                    onChange={val => {
                      const newData = { ...formData }
                      newData.vendorPreferences.experienceLevel = val
                      setFormData(newData)
                    }}
                  />
                </label>
              </div>
            </div>
            <div>
              <input type="submit" value="Next" />
            </div>
          </FormLayout>
        </div>
      </div>
    </section>
  )
}

export const RequestSummary = ({
  servicePhase,
  setServicePhase,
  formData,
  setFormData,
  setOpenModal,
  setModalChild,
}) => {
  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#fafafa' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              setServicePhase(1)
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
            Service Request
          </h3>
        </div>
        <div
          css={css`
            width: 511px;
            border: 1px solid #e5e5e5;
            padding: 20px 38px;
            border-radius: 4px;
            margin: 0 auto;
            background-color: #ffffff;
            @media (max-width: 1140px) {
              display: none;
            }
          `}
        >
          <h4 tw="mb-7">Request Summary</h4>
          <div
            css={css`
              font-weight: 600;
              font-size: 12px;
              line-height: 18px;
              color: #343434;
              & > div {
                border-bottom: 1px solid #e5e5e5;
                > div {
                  display: grid;
                  grid-template-columns: 105px 1fr 40px;
                  margin: 18px 0;
                }
              }

              .right {
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: #1a1a1a;
                text-align: right;
              }
            `}
          >
            <div>
              <div>
                <p>Service:</p>
                <p>Bass Guitarist</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Event Type:</p>
                <p>{formData.eventType.type}</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Date:</p>
                <p>9th May 2020</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Time:</p>
                <p>13:00 - 16:00</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Dress Code:</p>
                <p>{formData.dressCode.dressCode}</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p
                  css={css`
                    max-width: 105px;
                  `}
                >
                  {formData.details.address}
                </p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Base Rate</p>
                <p className="right">&#163;70</p>
              </div>
              <div>
                <p>Additional Time</p>
                <p>1hr</p>
                <p className="right">&#163;20</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Rehearsal</p>
                <p className="right">&#163;30</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#DE8E0E',
                }}
              >
                <p>Discount</p>
                <p
                  className="right"
                  style={{
                    color: '#DE8E0E',
                  }}
                >
                  0%
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Your budget</p>
                <p className="right">&#163;120</p>
              </div>
            </div>
            <div tw="py-8">
              <Button
                variant="primary"
                onClick={() => {
                  setModalChild(
                    <RequestSubmitted
                      setOpenModal={setOpenModal}
                      setServicePhase={setServicePhase}
                    />,
                  )
                  setOpenModal(true)
                }}
              >
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          h4 {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            color: #1a1a1a;
            font-family: Montserrat;
          }
          display: none;
          @media (max-width: 1140px) {
            display: block;
            h4 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      >
        <div
          css={css`
            width: clamp(300px, 100vw, 511px);
            padding: 20px 38px;
            border-radius: 4px;
            margin: 0 auto;
            h4 {
              margin-bottom: 28px;
            }
            @media (max-width: 1140px) {
              padding: 18px 20px;
              h4 {
                margin-bottom: 18px;
              }
            }
          `}
        >
          <h4>Request Summary</h4>
          <div
            css={css`
              font-weight: 600;
              font-size: 12px;
              line-height: 18px;
              color: #343434;
              & > div {
                border-bottom: 1px solid #e5e5e5;
                > div {
                  display: grid;
                  grid-template-columns: 105px 1fr 40px;
                  margin: 18px 0;
                }
              }

              .right {
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: #1a1a1a;
                text-align: right;
              }
              @media (max-width: 1140px) {
                .right {
                  color: #de8e0e;
                }
                > div > div {
                  margin: 12px 0;
                  > :first-child {
                    color: #8c8c8c;
                    font-weight: 400;
                    line-height: 18px;
                  }
                }
                .money {
                  color: #1a1a1a;
                }
              }
            `}
          >
            <div>
              <div>
                <p>Service:</p>
                <p>Bass Guitarist</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Event Type:</p>
                <p>{formData.eventType.type}</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Date:</p>
                <p>9th May 2020</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Time:</p>
                <p>13:00 - 16:00</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
              <div>
                <p>Dress Code:</p>
                <p>{formData.dressCode.dressCode}</p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p
                  css={css`
                    max-width: 105px;
                  `}
                >
                  {formData.details.address}
                </p>
                <p
                  className="right"
                  tw="cursor-pointer"
                  onClick={() => {
                    setServicePhase(1)
                  }}
                >
                  Edit
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Base Rate</p>
                <p className="right money">&#163;70</p>
              </div>
              <div>
                <p>Additional Time</p>
                <p>1hr</p>
                <p className="right money">&#163;20</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Rehearsal</p>
                <p className="right money">&#163;30</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#DE8E0E',
                }}
              >
                <p>Discount</p>
                <p
                  className="right"
                  style={{
                    color: '#DE8E0E',
                  }}
                >
                  0%
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p>Your budget</p>
                <p className="right money">&#163;120</p>
              </div>
            </div>
            <div tw="py-8">
              <Button
                variant="primary"
                onClick={() => {
                  setModalChild(
                    <RequestSubmitted
                      setOpenModal={setOpenModal}
                      setServicePhase={setServicePhase}
                    />,
                  )
                  setOpenModal(true)
                }}
              >
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
