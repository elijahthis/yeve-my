import tw, { css } from 'twin.macro'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import loginBg from '../images/login-bg.png'
import { BsPeopleFill, BsShop, BsArrowLeft } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import { YeveLogo1 } from '../components/Logo'
import { signin } from '../services/requests/auth'
import { inputFunc } from '../services/helpers'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export const LoginNav = () => (
  <header
    css={css`
      padding: 28px 80px;
      @media (max-width: 1024px) {
        padding: clamp(12px, 4vw, 36px) clamp(20px, 6vw, 48px);
      }
    `}
  >
    <YeveLogo1 />
  </header>
)

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
    cursor: pointer;
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
      > :nth-child(3) {
        display: none;
      }
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

const Login = () => {
  const router = useRouter()
  const [access, setAccess] = useState(0)
  const accessList = [
    { title: 'Customer', icon: <BsPeopleFill />, value: 'client' },
    { title: 'Vendor', icon: <BsShop />, value: 'vendor' },
  ]

  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  })

  const handleInput = ev => inputFunc(ev, formInput, setFormInput)

  const submitFunc = async ev => {
    ev.preventDefault()
    console.log(formInput)
    try {
      await signin(formInput)
      toast.success('Login Successful')
      setTimeout(() => {
        router.push(`${accessList[access].value}s/my-profile`)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <LoginNav />
      <section css={loginSection}>
        <div tw="flex flex-row items-center">
          <BsArrowLeft size={16} />
          <h3>Login to Yeve</h3>
        </div>
        <div
          tw="justify-self-start"
          css={css`
            max-width: 630px;
          `}
        >
          <div>
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
          <h3
            className="dfdf"
            onClick={() => {
              toast('erjekrjekjk')
              console.log('sdgfer')
            }}
          >
            Login to Yeve
          </h3>
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
          <form action="" tw="flex flex-col gap-6" onSubmit={submitFunc}>
            <label htmlFor="" tw="flex flex-col text-[#343434] font-semibold">
              Email address
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter email address..."
                tw="px-4 py-3 rounded bg-[#FAFAFA]"
                onChange={handleInput}
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
              />
            </label>
            <a href="" tw="text-right text-gold font-semibold">
              Forgot Password?
            </a>
            <input
              type="submit"
              value="Log In"
              tw="px-4 py-3 rounded bg-gold text-white"
            />
          </form>
          <p>
            Not registered?
            <Link href="/register" passHref>
              <a tw="text-gold font-semibold ml-4">Create an account</a>
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
