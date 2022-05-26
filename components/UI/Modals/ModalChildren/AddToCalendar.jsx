import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FiLink } from 'react-icons/fi'
import Button from '../../Buttons/Button'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import { InvitationSent } from './'
import InputBlock from '../../FormTools/InputBlock'
import FormDiv from '../../FormTools/FormDiv'
import moment from 'moment'
import 'moment/locale/en-gb'
import locale from 'antd/lib/locale/en_GB'

const AddToCalendar = ({
  setOpenModal,
  setModalChild,
  dateInfo,
  eventList,
  setEventList,
}) => {
  const [formData, setFormData] = useState({
    eventName: '',
    start: { date: dateInfo.dateStr, time: '00:00' },
    end: { date: dateInfo.dateStr, time: '00:00' },
    location: '',
    people: [],
    description: '',
  })

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;
        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin: 0;
        }
        > * {
          width: 100%;
        }
        form {
          margin-top: 20px;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <div css={formCoreStyles}>
        <IoClose
          size={24}
          tw="absolute right-6 cursor-pointer"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <h4>Add to Calendar</h4>
        <form action="">
          <div className="form-div">
            <InputBlock
              variant="text"
              properties={{ label: 'Event Name', placeholder: 'Event Name' }}
              value={formData.eventName}
              onChange={ev => {
                const newData = { ...formData }
                newData.eventName = ev.target.value
                setFormData(newData)
              }}
            />
            <div>
              <h4>Date & Time</h4>
              <FormDiv>
                <div className="double">
                  <InputBlock
                    variant="date"
                    properties={{
                      label: 'Select Date',
                    }}
                    value={formData.start.date}
                    onChange={(date, dateString) => {
                      if (date <= moment(formData.end.date)) {
                        const newData = { ...formData }
                        newData.start.date = dateString
                        setFormData(newData)
                      }
                    }}
                  />
                  <InputBlock
                    variant="time"
                    properties={{
                      label: 'Select Time',
                    }}
                    value={formData.start.time}
                    onChange={(time, timeString) => {
                      if (time <= moment(formData.end.time, 'HH:mm')) {
                        const newData = { ...formData }
                        newData.start.time = timeString
                        setFormData(newData)
                      }
                    }}
                  />
                </div>
              </FormDiv>
              <FormDiv>
                <div className="double">
                  <InputBlock
                    variant="date"
                    properties={{
                      label: 'Select Date',
                    }}
                    value={formData.end.date}
                    onChange={(date, dateString) => {
                      if (date >= moment(formData.start.date)) {
                        const newData = { ...formData }
                        newData.end.date = dateString
                        setFormData(newData)
                      }
                    }}
                  />
                  <InputBlock
                    variant="time"
                    properties={{
                      label: 'Select Time',
                    }}
                    value={formData.end.time}
                    onChange={(time, timeString) => {
                      if (time >= moment(formData.start.time, 'HH:mm')) {
                        const newData = { ...formData }
                        newData.end.time = timeString
                        setFormData(newData)
                      }
                    }}
                  />
                </div>
              </FormDiv>
            </div>
            <InputBlock
              variant="address"
              properties={{
                label: 'Add Location',
                placeholder: 'Enter Location',
              }}
              value={formData.location}
              onChange={ev => {
                const newData = { ...formData }
                newData.location = ev.target.value
                setFormData(newData)
              }}
            />
            <InputBlock
              variant="text"
              properties={{
                label: 'Add people',
                placeholder: 'Enter email adddress then comma to add more',
              }}
            />
            <InputBlock
              variant="text"
              properties={{
                label: 'Add description',
                placeholder: 'Add description',
              }}
              value={formData.description}
              onChange={ev => {
                const newData = { ...formData }
                newData.description = ev.target.value
                setFormData(newData)
              }}
            />
          </div>
        </form>
        <div tw="w-full mt-6 flex flex-row items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(formData.start.date)
              setEventList([
                ...eventList,
                {
                  title: formData.eventName,
                  start: formData.start.date,
                  end: formData.end.date,
                  // allDay: false,
                },
              ])
              setOpenModal(false)
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddToCalendar
