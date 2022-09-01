import tw, { css } from 'twin.macro'
import { formStyles } from './styles'
import { Form } from 'antd'

const FormLayout = ({ children, onSubmit }) => {
  return (
    <Form
      // name="Startup-Profile"
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      // onSubmit={onSubmit}
      onFinish={onSubmit}
      // className="px-3"
    >
      <div action="" css={formStyles}>
        {children}
      </div>
    </Form>
  )
}

export default FormLayout
