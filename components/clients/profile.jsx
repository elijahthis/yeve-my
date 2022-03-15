import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { MyProfile, Reviews, Feed } from './profileStates'
import profileImg from '../../images/profile-img.png'
import CreatePost from './createPost'
import { BsShop } from 'react-icons/bs'
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
  @media (max-width: 1140px) {
    h3 {
      font-size: 24px;
      line-height: 48px;
    }
    h4 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`

const Profile = () => {
  const [phase, setPhase] = useState(0)
  const phases = [
    ['My Profile', <BsShop size={18} />],
    ['Feed', <BsShop size={18} />],
    ['Events', <BsShop size={18} />],
    ['Reviews', <BsShop size={18} />],
  ]
  return (
    <section css={profileSection}>
      <div
        css={css`
          margin-bottom: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          > :last-child {
            display: none;
          }
          @media (max-width: 1140px) {
            margin-bottom: 32px;
            > :last-child {
              display: grid;
            }
          }
        `}
      >
        <h3>My Profile</h3>
        <button tw="grid place-items-center bg-gold text-white px-4 py-3 text-base font-bold rounded-lg">
          <MdAdd size={18} />
        </button>
      </div>
      <div tw="flex flex-col items-center">
        <div
          css={css`
            width: 120px;
            height: 120px;
            @media (max-width: 1140px) {
              width: 68px;
              height: 68px;
            }
          `}
        >
          <Image src={profileImg} alt="" />
        </div>
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
          <span
            css={css`
              @media (max-width: 1140px) {
                display: none;
              }
            `}
          >
            4.5 (35 Gigs)
          </span>
        </div>
        <p
          css={css`
            max-width: 490px;
            text-align: center;
            margin-top: 18px;
            margin-bottom: 56px;
            @media (max-width: 1140px) {
              color: #767676;
            }
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit.
        </p>
      </div>

      <section
        css={css`
          max-width: 1012px;
          @media (max-width: 1140px) {
            form {
              display: none;
            }
          }
        `}
      >
        <div
          tw="flex flex-row justify-center items-center gap-16"
          css={css`
            @media (max-width: 1140px) {
              border-bottom: 1px solid #e5e5e5;
              > :last-child {
                display: none;
              }
            }
          `}
        >
          {phases.map((item, ind) => (
            <span
              tw="py-4 font-semibold text-[#343434] cursor-pointer"
              css={css`
                border-bottom: ${phase === ind ? '1px solid #de8e0e' : '0'};
                > :nth-child(2) {
                  display: none;
                }
                @media (max-width: 1140px) {
                  border-bottom: 0;
                  > :first-child {
                    display: none;
                  }
                  > :nth-child(2) {
                    display: inline;
                  }
                }
              `}
              onClick={() => {
                setPhase(ind)
              }}
              key={ind}
            >
              <span>{item[0]}</span>
              <span
                css={css`
                  color: ${phase === ind ? '#DE8E0E' : '#9f9f9f'};
                `}
              >
                {item[1]}
              </span>
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
