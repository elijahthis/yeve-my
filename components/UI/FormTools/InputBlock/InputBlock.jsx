import tw, { css } from 'twin.macro'
import DropdownMenu from '../DropdownMenu'
import BooleanToggle from '../BooleanToggle'
import DatePickerr from '../DatePickerr'
import { DatePicker, TimePicker } from 'antd'
import { InputBlockStyles } from './styles'
import { DateTimeStyles } from './styles'
import moment from 'moment'
import 'moment/locale/en-gb'
import locale from 'antd/lib/locale/en_GB'
import { useEffect } from 'react'

const InputBlock = ({
  variant,
  properties,
  data,
  value,
  onChange,
  maxLength = 200,
}) => {
  const VARIANTS = [
    'text',
    'email',
    'number',
    'address',
    'postcode',
    'date',
    'time',
    'dropdown',
    'textarea',
    'BoolToggle',
  ]

  const { label, placeholder, additionalText } = properties
  const { list, valueList } = data ?? {}

  useEffect(() => {
    console.log(data)
  }, [])

  switch (variant) {
    case 'text':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <input
            id=""
            name=""
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      )
      break
    case 'email':
      break

    case 'number':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <input type="number" name="" id="" />
        </label>
      )
      break

    case 'money':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
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
      )
      break

    case 'address':
      return (
        <label htmlFor="address" css={InputBlockStyles}>
          {label}
          <input
            type="text"
            name=""
            id=""
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      )
      break

    case 'postcode':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <input
            id=""
            name=""
            type="text"
            inputmode="numeric"
            pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      )
      break

    case 'date':
      return (
        <label htmlFor="date" css={InputBlockStyles}>
          {label}
          <DatePicker
            css={DateTimeStyles}
            value={value ? moment(value) : moment()}
            onChange={onChange}
          />
        </label>
      )
      break
    case 'time':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          Select Time
          <TimePicker
            css={DateTimeStyles}
            use12Hours={true}
            format="HH:mm"
            value={value ? moment(value, 'HH:mm') : moment('00:00', 'HH:mm')}
            onChange={onChange}
          />
        </label>
      )
      break

    case 'dropdown':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <DropdownMenu
            list={list}
            placeholder={placeholder}
            onChange={onChange}
          />
          {additionalText && <p tw="text-right">{additionalText}</p>}
        </label>
      )
      break

    case 'textarea':
      return (
        <label htmlFor="moreInfo" css={InputBlockStyles}>
          {label}
          <textarea
            name="moreInfo"
            id="moreInfo"
            tw="resize-none"
            placeholder={placeholder}
            value={value}
            onChange={ev => {
              if (ev.target.value.length <= maxLength) onChange(ev)
            }}
          ></textarea>
          <p tw="text-right">
            {value.length}/{maxLength}
          </p>
        </label>
      )
      break

    case 'BoolToggle':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <BooleanToggle
            list={list}
            value={value}
            valueList={valueList}
            onChange={onChange}
          />
        </label>
      )
      break

    default:
      return <p>Invalid input type</p>
      break
  }
}

export default InputBlock
