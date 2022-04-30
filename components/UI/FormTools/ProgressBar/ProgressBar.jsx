import tw, { css } from 'twin.macro'
import 'antd/dist/antd.css'
import 'antd/dist/antd.css'

const ProgressBar = ({ percent }) => (
  <div
    css={css`
      width: 100%;
      border-radius: 20px;
      .bar {
        background-color: #de8e0e;
        height: 8px;
        width: ${percent}%;
        border-radius: 20px;
      }
    `}
  >
    <div tw="w-full">
      <div className="bar"></div>
    </div>
    <p>{percent}% complete</p>
  </div>
)

export default ProgressBar
