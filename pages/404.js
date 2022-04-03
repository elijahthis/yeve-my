import tw, { css } from 'twin.macro'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginNav } from '../pages/login'
import { ProceedButton } from '../components/pieces/Buttons'
import { errorStyles } from '../styles/GeneralStyles'

const ErrorPage = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router)
  })

  return (
    <section css={errorStyles}>
      <LoginNav />
      <div>
        <div>
          <h1>You seem lost</h1>
          <p>Let's help you find your way back.</p>
          <div className="lost-btns">
            <ProceedButton
              content="Go Back"
              onClick={() => {
                router.back()
              }}
            />
            <ProceedButton
              bg="#f8f8f8"
              col="#767676"
              content="Go Home"
              onClick={() => {
                router.push('/')
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
