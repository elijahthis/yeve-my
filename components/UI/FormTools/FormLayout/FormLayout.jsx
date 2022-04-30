import tw, { css } from 'twin.macro'
import { formStyles } from './styles'

const FormLayout = ({ children }) => {
  return (
    <form action="" css={formStyles}>
      {children}
    </form>
  )
}

export default FormLayout
