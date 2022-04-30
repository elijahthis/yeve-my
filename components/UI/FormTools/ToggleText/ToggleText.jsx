import tw, { css } from 'twin.macro'
import 'antd/dist/antd.css'
import 'antd/dist/antd.css'
import { Switch } from 'antd'

const ToggleText = ({ checkedChildren, unCheckedChildren, changeFunc }) => {
  return (
    <div
      css={css`
        button {
          height: 32px;
          width: 92px;
          > * {
            padding: 5px 0;
          }
          .ant-switch-handle {
            width: 25px;
            height: 25px;
            top: 3px;
            ::before {
              border-radius: 50%;
            }
          }
        }
        .ant-switch-checked > div {
          left: calc(100% - 25px - 2px);
        }
      `}
    >
      <Switch
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        defaultChecked
        size="default"
        onClick={ev => {
          changeFunc(ev)
        }}
      />
    </div>
  )
}

export default ToggleText
