import tw, { css } from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import { BsPeopleFill, BsShop, BsArrowLeft } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import loginBg from '../../images/login-bg.png'
import { LoginNav } from '../login'

export const loginSection = css`
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 48px 176px 16px 64px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;

  > :first-child {
    display: none;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
  }
  .select {
    font-size: 18px;
    font-weight: 700;
    color: #767676;
  }
  input {
    font-family: Open Sans;
    border: 1px solid #d2d2d2;
    width: 100%;
  }
  input[type='submit'] {
    border: 0;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding: 12px clamp(20px, 6vw, 48px);

    > :first-child {
      display: flex;
      gap: 67px;
    }
    h3 {
      font-size: 24px;
    }
    > :nth-child(3) {
      > :nth-child(1),
      > :nth-child(2),
    
        display: none;
     
    }
  }
`
export const accessButton = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`

const Register = () => {
  return (
    <main>
      <LoginNav />
      <section css={loginSection}>
        <div tw="flex flex-row items-center">
          <BsArrowLeft size={16} />
          <h3>Register as a Yeve Admin</h3>
        </div>
        <div>
          <div
            css={css`
              max-width: 630px;
            `}
          >
            <Image src={loginBg} />
          </div>
        </div>
        <div
          css={css`
            // width: 416px;
            > * {
              margin-bottom: 24px;
            }
          `}
        >
          <div tw="flex flex-row items-center mb-4">
            <BiChevronLeft
              size={38}
              color="#DE8E0E"
              style={{ transform: 'translateX(-25%' }}
            />
            Back
          </div>
          <h3>Register as a Yeve Admin</h3>
          <div tw="flex flex-row gap-2"></div>
          <form action="" tw="flex flex-col gap-6">
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Full Name
              <div tw="flex flex-row">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  tw="px-4 py-3 rounded-tl rounded-bl bg-[#FAFAFA]"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  tw="px-4 py-3 rounded-tr rounded-br bg-[#FAFAFA]"
                />
              </div>
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Email address
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter email address..."
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Password
              <input
                type="password"
                name=""
                id=""
                placeholder="********"
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Confirm Password
              <input
                type="password"
                name=""
                id=""
                placeholder="********"
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
              />
            </label>
            <input
              type="submit"
              value="Next"
              tw="px-4 py-3 rounded bg-gold text-white"
            />
          </form>
          <p>
            Already have an account?
            <Link href="/admin/login" passHref>
              <a tw="text-gold font-semibold ml-4">Login</a>
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register
