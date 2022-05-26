import tw, { css } from 'twin.macro'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import { useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/en-gb'
import locale from 'antd/lib/locale/en_GB'

const DatePickerr = ({ value }) => {
  useEffect(() => {
    console.log(value)
  }, [])
  return (
    <DatePicker
      css={css`
        padding: 0 0.5rem;
        input {
          border: 0;
        }

        :hover,
        :focus,
        :active {
          color: #de8e0e;
          border-color: #de8e0e;
          box-shadow: 0 0 0 2px rgba(222, 142, 14, 0.2);
          *,
          input,
          .ant-picker-focused {
            color: #de8e0e;
            border-color: #de8e0e;
          }
        }
      `}
      value={moment(value) || {}}
    />
  )
}

export default DatePickerr
