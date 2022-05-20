import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import TabBar from '../../TabBar'
import Members from './Members'
import SubGroupCalendar from './SubGroupCalendar'
import Files from './Files'

const SubGroupAside = ({ currentSubGroup, showSide, setShowSide }) => {
  const dataList = [
    { title: 'Members (5)', component: <Members /> },
    { title: 'Files', component: <Files /> },
    { title: 'Calendar', component: <SubGroupCalendar /> },
  ]

  return (
    <aside
      css={css`
        background-color: white;
        border-left: 1px solid #e5e5e5;
        padding: 18px 16px;
        height: calc(100vh - 102px);
        overflow-y: scroll;

        svg {
          cursor: pointer;
        }
      `}
    >
      <AiOutlineCloseCircle
        size="20"
        color="#292D32"
        onClick={() => {
          setShowSide(false)
        }}
      />
      {currentSubGroup ? (
        <div
          tw="flex flex-col items-center gap-4"
          css={css`
            margin-top: 18px;
          `}
        >
          <div tw="text-center">
            <Image src={currentSubGroup.image} width="80" height="80" />
            <p tw="text-sm font-semibold text-black mb-1">
              {currentSubGroup.subGroup}
            </p>
            <p tw="text-xs">5 members</p>
          </div>
          <div>
            <p tw="text-xs font-semibold text-[#767676] mb-2">About</p>
            <p tw="p-3 text-black bg-[#FAFAFA] border border-[#e5e5e5] rounded">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
            </p>
          </div>
          <div
            css={css`
              width: 100%;
              >: first-child {
                .titleBar {
                  justify-content: space-between;
                }
                .title {
                  font-size: 12px;
                  line--height: 18px;
                  padding: 12px;
                  padding-top: 0;
                  font-weight: 600;
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
