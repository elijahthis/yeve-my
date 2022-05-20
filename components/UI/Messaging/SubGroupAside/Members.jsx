import tw, { css } from 'twin.macro'
import { SearchBar } from '../../../formTools'
import MemberPerson from './pieces/MemberPerson'
import { AddPersonIcon } from '../../../pieces/svgs'

const Members = () => {
  const members = [
    {
      name: 'Elijah',
      image: '/images/Ellipse 56.png',
      role: 'Admin',
      you: true,
    },
    {
      name: 'John',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Derek',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
    {
      name: 'Mike',
      image: '/images/Ellipse 56.png',
      role: 'Member',
      you: false,
    },
  ]
  return (
    <div
      css={css`
        padding-top: 1rem;
      `}
    >
      <SearchBar placeholder="Search member" />
      <div tw="flex flex-row items-center gap-4 mb-4 mt-4 cursor-pointer">
        <AddPersonIcon size="32" />
        <p>Add Member</p>
      </div>
      {members.map((member, ind) => (
        <MemberPerson key={ind} member={member} selectable={false} />
      ))}
    </div>
  )
}

export default Members
