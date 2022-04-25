import tw, { css } from 'twin.macro'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { LoginNav } from '../pages/login'
import Button from '../components/UI/Buttons/Button'
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
            <Button
              variant="primary"
              onClick={() => {
                router.back()
              }}
            >
              Go Back
            </Button>
            <Button variant="secondary" href="/">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
