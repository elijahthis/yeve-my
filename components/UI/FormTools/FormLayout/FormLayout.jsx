import tw, { css } from 'twin.macro'
import { formStyles } from './styles'

const FormLayout = ({ children, onSubmit }) => {
  return (
    <form action="" css={formStyles} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default FormLayout
