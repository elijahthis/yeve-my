import tw, { css } from 'twin.macro'
import { Form, Input, Checkbox, message } from 'antd'
import DropdownMenu from '../DropdownMenu'
import BooleanToggle from '../BooleanToggle'
import DatePickerr from '../DatePickerr'
import { DatePicker, TimePicker, Select } from 'antd'
import { InputBlockStyles } from './styles'
import { DateTimeStyles } from './styles'
import moment from 'moment'
import 'moment/locale/en-gb'
import locale from 'antd/lib/locale/en_GB'
import { useEffect } from 'react'
// import

const { TextArea } = Input
const { Option } = Select

const InputBlock = ({
  variant,
  properties,
  data,
  value,
  onChange,
  name,
  maxLength = 200,
  required = true,
  errorMessage,
  onKeyPress,
  disabled,
  ...rest
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
    // case 'text':
    //   return (
    //     <label htmlFor="" css={InputBlockStyles}>
    //       {label}
    //       <input
    //         id=""
    //         name=""
    //         type="text"
    //         placeholder={placeholder}
    //         value={value}
    //         onChange={onChange}
    //       />
    //     </label>
    //   )
    //   break

    // case 'email':
    //   break

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

    case 'date':
      return (
        <Form.Item
          name={name}
          label={label}
          rules={[
            {
              required: required,
              message: errorMessage
                ? errorMessage
                : `Please input your ${label}!`,
            },
          ]}
          initialValue={value ? moment(value) : undefined}
        >
          <DatePicker
            css={DateTimeStyles}
            value={value ? moment(value) : moment()}
            onChange={onChange}
          />
        </Form.Item>
      )
      break
    case 'time':
      return (
        <Form.Item
          name={name}
          label={label}
          rules={[
            {
              required: required,
              message: errorMessage
                ? errorMessage
                : `Please input your ${label}!`,
            },
          ]}
          initialValue={value ? moment(value) : undefined}
        >
          <TimePicker
            css={DateTimeStyles}
            use12Hours={true}
            format="HH:mm"
            value={value ? moment(value, 'HH:mm') : moment('00:00', 'HH:mm')}
            onChange={onChange}
          />
        </Form.Item>
      )
      break

    case 'dropdown':
      return (
        // <label htmlFor="" css={InputBlockStyles}>
        //   {label}
        //   <DropdownMenu
        //     list={list}
        //     placeholder={placeholder}
        //     onChange={onChange}
        //   />
        //   {additionalText && <p tw="text-right">{additionalText}</p>}
        // </label>
        <Form.Item
          name={name}
          label={label}
          initialValue={value || ''}
          rules={[
            {
              required: required,
              message: errorMessage
                ? errorMessage
                : `Please input your ${label}!`,
            },
          ]}
        >
          <Select
            defaultValue={value}
            style={{
              width: 120,
            }}
            onChange={onChange}
          >
            {list.map(item => (
              <Option value={item?.value ?? item}>{item?.label ?? item}</Option>
            ))}
          </Select>
        </Form.Item>
      )
      break

    case 'textarea':
      return (
        <Form.Item
          name={name}
          label={label}
          initialValue={value}
          rules={[
            {
              required: required,
              message: errorMessage
                ? errorMessage
                : `Please input your ${label}!`,
            },

            // {
            //   min: min,
            //   message: `Characters should not be less than ${min} words`,
            // },
          ]}
          // type={variant}
        >
          <TextArea
            // rows={4}
            style={{ height: 150, marginLeft: 0 }}
            placeholder={placeholder}
            onChange={onChange}
            // onKeyPress={onKeyPress}
            showCount={true}
            maxLength={maxLength}
            css={css`
              textarea {
                margin-left: 0 !important;
              }
            `}
            // {...rest}
          />
        </Form.Item>
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
      return (
        <Form.Item
          name={name}
          rules={[
            {
              required: required,
              message: errorMessage
                ? errorMessage
                : `Please input your ${label}!`,
            },
            // {
            //   type: name === 'email' ? name : type === 'url' ? 'url' : '',
            //   message: errorMessage
            //     ? errorMessage
            //     : name === 'email'
            //     ? `Please input a correct ${name}`
            //     : type === 'url'
            //     ? `Please enter a valid ${name} url`
            //     : '',
            // },
          ]}
          type={variant}
          initialValue={value}
          label={label}
        >
          <Input
            id={variant}
            // onBlur={onBlur}
            // onFocus={onFocus}
            // className={`${className}`}
            placeholder={placeholder}
            type={variant}
            value={value}
            onChange={onChange}
            defaultValue={value}
            onKeyPress={onKeyPress}
            disabled={disabled}
            // required={required}
            {...rest}
          />
        </Form.Item>
      )
      break
  }
}

export default InputBlock
