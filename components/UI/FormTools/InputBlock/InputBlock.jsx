import tw, { css } from 'twin.macro'
import DropdownMenu from '../DropdownMenu'
import BooleanToggle from '../BooleanToggle'
import DatePickerr from '../DatePickerr'
import { InputBlockStyles } from './styles'

const InputBlock = ({ variant, properties, data }) => {
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

  const { label, placeholder } = properties
  const { list } = data ?? {}

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
            // value={formData.details.postcode}
            // onChange={ev => {
            //   const newData = { ...formData }
            //   newData.details.postcode = ev.target.value
            //   setFormData(newData)
            // }}
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
          <input type="text" name="" id="" placeholder={placeholder} />
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
          />
        </label>
      )
      break

    case 'date':
      return (
        <label htmlFor="date" css={InputBlockStyles}>
          {label}
          <DatePickerr />
        </label>
      )
      break
    case 'time':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          Select Time
          <input type="text" name="" id="" />
        </label>
      )
      break

    case 'dropdown':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <DropdownMenu list={list} placeholder={placeholder} />
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
          ></textarea>
          <p tw="text-right">0/200</p>
        </label>
      )
      break

    case 'BoolToggle':
      return (
        <label htmlFor="" css={InputBlockStyles}>
          {label}
          <BooleanToggle
            list={list}
            // value={formData.vendorPreferences.experienceLevel}
            // onChange={val => {
            //   const newData = { ...formData }
            //   newData.vendorPreferences.experienceLevel = val
            //   setFormData(newData)
            // }}
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
