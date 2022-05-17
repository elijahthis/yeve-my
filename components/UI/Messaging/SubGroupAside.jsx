import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import TabBar from '../TabBar'

const SubGroupAside = ({ currentSubGroup }) => {
  const dataList = [
    { title: 'Members (5)', component: <></> },
    { title: 'Files', component: <></> },
    { title: 'Calendar', component: <></> },
  ]

  return (
    <aside
      css={css`
        background-color: white;
        border-left: 1px solid #e5e5e5;
        padding: 18px 16px;
      `}
    >
      <AiOutlineCloseCircle />
      {currentSubGroup ? (
        <div>
          <div>
            <Image src={currentSubGroup.image} width="80" height="80" />
            <p>{currentSubGroup.subGroup}</p>
            <p>5 members</p>
          </div>
          <div>
            <p>About</p>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
          </div>
          <div
            css={css`
              >: first-child {
                .titleBar {
                  justify-content: space-between;
                }
                .title {
                  font-size: 12px;
                  line--height: 18px;
                  padding: 12px;
                }
              }
            `}
          >
            <TabBar dataList={dataList} />
          </div>
        </div>
      ) : null}
    </aside>
  )
}

export default SubGroupAside
