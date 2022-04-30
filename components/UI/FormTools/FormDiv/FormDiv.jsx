import tw, { css } from 'twin.macro'
import { formDivStyles } from './styles'

const FormDiv = ({ children }) => {
  return <div css={formDivStyles}>{children}</div>
}

export default FormDiv
