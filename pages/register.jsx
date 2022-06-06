import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import loginBg from '../images/login-bg.png'
import { BsPeopleFill, BsShop, BsArrowLeft } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import { LoginNav, loginSection, accessButton } from './login'

const Register = () => {
  const [access, setAccess] = useState(0)
  const accessList = [
    { title: 'Customer', icon: <BsPeopleFill /> },
    { title: 'Vendor', icon: <BsShop /> },
  ]

  return (
    <main>
      <LoginNav />
      <section css={loginSection}>
        <div tw="flex flex-row items-center">
          <BsArrowLeft size={16} />
          <h3>Register with Yeve</h3>
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
          <h3>Register with Yeve</h3>
          <p className="select">Select your access</p>
          <div tw="flex flex-row gap-2">
            {accessList.map((item, ind) => (
              <div
                css={accessButton}
                key={ind}
                onClick={() => setAccess(ind)}
                style={
                  access === ind
                    ? { backgroundColor: '#1a1a1a', color: 'white' }
                    : {}
                }
              >
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>
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
            <Link href="/login" passHref>
              <a tw="text-gold font-semibold ml-4">Login</a>
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register
