import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import loginBg from '../images/login-bg.png'
import { BsPeopleFill, BsShop, BsArrowLeft } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import { LoginNav, loginSection, accessButton } from './login'
import { signup } from '../services/requests/auth'
import { inputFunc } from '../services/helpers'

const Register = () => {
  const router = useRouter()
  const [access, setAccess] = useState(0)
  const accessList = [
    { title: 'Customer', icon: <BsPeopleFill />, value: 'client' },
    { title: 'Vendor', icon: <BsShop />, value: 'vendor' },
  ]
  const [formInput, setFormInput] = useState({
    userType: accessList[access].value,
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  })

  const handleInput = ev => inputFunc(ev, formInput, setFormInput)

  const submitFunc = async ev => {
    ev.preventDefault()
    console.log(formInput)
    if (formInput.password === formInput.confirmPassword) {
      const newObj = { ...formInput }
      delete newObj['confirmPassword']
      try {
        await signup(newObj)
        router.push(`${accessList[access].value}s/my-profile`)
      } catch (error) {
        console.log(error)
      }
    }
  }

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
                onClick={() => {
                  console.log(ind)
                  setAccess(ind)
                  setFormInput({
                    ...formInput,
                    userType: accessList[ind].value,
                  })
                }}
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
          <form action="" tw="flex flex-col gap-6" onSubmit={submitFunc}>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Full Name
              <div tw="flex flex-row">
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder="First Name"
                  tw="px-4 py-3 rounded-tl rounded-bl bg-[#FAFAFA]"
                  onChange={handleInput}
                  required={true}
                />
                <input
                  type="text"
                  name="lastName"
                  id=""
                  placeholder="Last Name"
                  tw="px-4 py-3 rounded-tr rounded-br bg-[#FAFAFA]"
                  onChange={handleInput}
                  required={true}
                />
              </div>
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Email address
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter email address..."
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Phone
              <input
                type="text"
                name="phone"
                id=""
                placeholder="Enter phone number..."
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Password
              <input
                type="password"
                name="password"
                id=""
                placeholder="********"
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="********"
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Address Line 1
              <input
                type="text"
                name="address"
                id=""
                placeholder=""
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-row text-[#343434] font-semibold">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  id=""
                  placeholder="Lagos"
                  tw="px-4 py-3 rounded-tl rounded-bl bg-[#FAFAFA]"
                  onChange={handleInput}
                  required={true}
                />
              </label>
              <label>
                State
                <input
                  type="text"
                  name="state"
                  id=""
                  placeholder="State"
                  tw="px-4 py-3 rounded-tr rounded-br bg-[#FAFAFA]"
                  onChange={handleInput}
                  required={true}
                />
              </label>
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Country
              <input
                type="text"
                name="country"
                id=""
                placeholder="Nigeria"
                tw="px-4 py-3 rounded-tr rounded-br bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
              />
            </label>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Postal Code
              <input
                type="text"
                name="postalCode"
                id=""
                placeholder="121101"
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
                required={true}
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
