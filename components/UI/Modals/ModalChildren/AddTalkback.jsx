import tw, { css } from 'twin.macro'
import { IoClose } from 'react-icons/io5'
import { FiLink } from 'react-icons/fi'
import Button from '../../Buttons/Button'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import { InvitationSent } from './'
import { SearchBar } from '../../../formTools'
import MemberPerson from '../../Messaging/SubGroupAside/pieces/MemberPerson'
import { AddPersonIcon } from '../../../pieces/svgs'
import { useState } from 'react'
import { useRouter } from 'next/router'

const AddTalkback = ({ setOpenModal, setModalChild, members }) => {
  const [selectAll, setSelectAll] = useState(false)
  const router = useRouter()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 24px;
        width: 466px;
        text-align: left;
        font-weight: 600;
        position: relative;
        h4 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: Montserrat;
          margin: 0;
          margin-bottom: 24px;
        }
        > * {
          width: 100%;
        }
      `}
      onClick={ev => {
        ev.stopPropagation()
      }}
    >
      <div>
        <IoClose
          size={24}
          tw="absolute right-6 cursor-pointer"
          onClick={() => {
            setOpenModal(false)
          }}
        />
        <h4>Add to talkback session</h4>
        <div tw="mb-4">
          <SearchBar placeholder="Search member" />
          <div>
            <div tw="flex flex-row items-center justify-between">
              <div tw="flex flex-row items-center gap-4 mb-4 mt-4 cursor-pointer">
                <AddPersonIcon size="32" />
                <p>Add Member</p>
              </div>
              <p
                tw="text-gold text-sm cursor-pointer"
                onClick={() => {
                  setSelectAll(true)
                }}
              >
                Select All
              </p>
            </div>
            {members.map(member => (
              <MemberPerson
                member={member}
                selectable={true}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
              />
            ))}
          </div>
        </div>
        <div tw="w-full mt-6 flex flex-row items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => {
              setOpenModal(false)
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              router.push(
                '/clients/events/view-event/yeve-group/virtual-talkback',
              )
            }}
          >
            Start Session
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddTalkback
