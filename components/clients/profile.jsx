import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { MyProfile, Reviews, Feed } from './profileStates'
import profileImg from '../../images/profile-img.png'
import CreatePost from './createPost'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiStar } from 'react-icons/hi'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'

const profileSection = css`
  background-color: #fafafa;
  color: #343434;
  padding: 24px;
  font-size: 14px;
  overflow: scroll;
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: Montserrat;
  }
`

const Profile = () => {
  const [phase, setPhase] = useState(0)
  const phases = ['My Profile', 'Feed', 'Events', 'Reviews']
  return (
    <section css={profileSection}>
      <h3
        css={css`
          margin-bottom: 60px;
        `}
      >
        My Profile
      </h3>
      <div tw="flex flex-col items-center">
        <Image src={profileImg} alt="" width="120px" height="120px" />
        <h4>Lillian Brooks</h4>
        <div tw="flex flex-row items-center gap-2 font-semibold">
          <HiOutlineLocationMarker /> London, United Kingdom
        </div>
        <div tw="flex flex-row items-center gap-4 font-semibold">
          <div tw="flex flex-row items-center">
            {Array(5)
              .fill()
              .map((n, ind) => (
                <HiStar color="#DE8E0E" key={ind} />
              ))}
          </div>
          4.5 (35 Gigs)
        </div>
        <p
          css={css`
            max-width: 490px;
            text-align: center;
            margin-top: 18px;
            margin-bottom: 56px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit.
        </p>
      </div>

      <section
        css={css`
          width: 1012px;
        `}
      >
        <div tw="flex flex-row justify-center items-center gap-16">
          {phases.map((item, ind) => (
            <span
              tw="py-4 font-semibold text-[#343434] cursor-pointer"
              css={css`
                border-bottom: ${phase === ind ? '1px solid #de8e0e' : '0'};
              `}
              onClick={() => {
                setPhase(ind)
              }}
              key={ind}
            >
              {item}
            </span>
          ))}
          <div tw="flex flex-row items-center gap-2 p-2 bg-[#1a1a1a] text-white rounded">
            Create <MdAdd color="white" />
            {/* <CreatePost></CreatePost> */}
          </div>
        </div>
        <form action="" tw="p-3 bg-white  rounded">
          <div tw="flex flex-row items-center gap-3 px-2 bg-[#fafafa] rounded">
            <FaSearch />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              tw="p-2 w-full bg-[#fafafa]"
            />
          </div>
        </form>
        <div>
          {phase === 0 ? (
            <MyProfile />
          ) : phase === 1 ? (
            <Feed />
          ) : phase === 2 ? (
            <MyProfile />
          ) : phase === 3 ? (
            <Reviews />
          ) : (
            <MyProfile />
          )}
        </div>
      </section>
    </section>
  )
}
export default Profile
