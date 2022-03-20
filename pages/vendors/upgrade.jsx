import tw, { css } from 'twin.macro'
import { LoginNav } from '../login'
import UpgradeCard from '../../components/pieces/upgradeCard'
import { useEffect, useState } from 'react'
import { BackButton } from '../../components/pieces/Buttons'

const Cards = ({ setPhase }) => {
  const [current, setCurrent] = useState(0)
  const cardList = [
    {
      plan: 'Freemium',
      monthlyFee: 0,
      features: ['20% Commission', 'No staff', 'One Location at a time'],
    },
    {
      plan: 'Premium',
      monthlyFee: 25,
      yearlyFee: 199.99,
      features: [
        'Early bird request',
        '10% Commission',
        'Up to 3 staff',
        'Up to 5 locations',
        'Ability to set your own prices and list services',
        'Professional reports',
        'Up to 5 media',
      ],
    },
    {
      plan: 'Elite',
      monthlyFee: 99.99,
      yearlyFee: 799.99,
      features: [
        'Early bird request',
        '5% Commission',
        'Unlimited staff',
        'Unlimited locations',
        'Ability to set your own prices and list services',
        'Professional reports',
        'High profile events',
      ],
    },
  ]
  return (
    <section
      css={css`
        display: flex;
        flex-direcction: row;
        justify-content: center;
        align-items: start;
        gap: 3.5rem;
        padding: 0 60px;
      `}
    >
      {cardList.map((card, ind) => (
        <UpgradeCard
          cardData={card}
          current={current === ind}
          setCurrent={setCurrent}
          ind={ind}
          setPhase={setPhase}
          key={ind}
        />
      ))}
    </section>
  )
}
const AccountInfo = ({ setPhase }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      position: absolute;
      top: 164px;
      bottom: 0;
      left: 0;
      right: 0;
      form {
        max-width: 471px;
        padding: 48px 0;
      }
      h4 {
        margin: 16px 0;
      }
      .form-div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      input,
      textarea {
        padding: 12px 16px;
        border-radius: 4px;
        background-color: #fafafa;
        border: 1px solid #d2d2d2;
        font-weight: 600;
        font-size: 14px;
      }
      .date-drop {
        top: 0;
      }
      input[type='submit'] {
        background-color: #de8e0e;
        color: #ffffff;
        border: 1px solid #de8e0e;
        margin: 16px 0;
        width: 100%;
        :hover {
          cursor: pointer;
          background-color: transparent;
          color: #de8e0e;
        }
      }
      @media (max-width: 1140px) {
        display: block;
        > :nth-child(2) > form > * {
          width: clamp(300px, 100%, 471px);
        }
      }
    `}
  >
    <form
      action=""
      onSubmit={ev => {
        ev.preventDefault()
      }}
    >
      <div>
        <div tw="flex flex-row items-center justify-between">
          <h4>Card details</h4>
          <span
            tw="text-sm text-gold cursor-pointer"
            //   onClick={() => {
            //     setPaymentPart(null)
            //   }}
          >
            Cancel
          </span>
        </div>
        <div className="form-div">
          <label htmlFor="">
            Email
            <input type="email" name="" id="" placeholder="Email" />
          </label>
          <label htmlFor="">
            Card number
            <input
              type="text"
              name=""
              id=""
              placeholder="1111 2222 3333 4444"
            />
          </label>
          <div
            tw=" flex flex-row items-center gap-4"
            css={css`
              > * {
                width: 100%;
              }
            `}
          >
            <label htmlFor="">
              Expiry Date
              <input type="text" name="" id="" placeholder="MM/YY" />
            </label>
            <label htmlFor="">
              CVV
              <input type="text" name="" id="" placeholder="123" />
            </label>
          </div>
        </div>
      </div>
      <div tw="w-full">
        <input type="submit" value="Subscribe" />
      </div>
    </form>
  </div>
)

const Upgrade = () => {
  const [phase, setPhase] = useState(0)
  return (
    <>
      <LoginNav />
      <main
        css={css`
          background-color: #fafafa;
          position: relative;
          min-height: calc(100vh - 73px);
          padding-bottom: 100px;
          h3 {
            font-size: 32px;
            font-weight: 700;
            color: #1a1a1a;
            font-family: Montserrat;
          }
          h4 {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            color: #1a1a1a;
            font-family: Montserrat;
          }
        `}
      >
        <div
          tw="text-center flex flex-col items-center gap-2 relative"
          css={css`
            padding-top: 32px;
            padding-bottom: 60px;
          `}
        >
          <h3>Upgrade your account</h3>
          <p tw="text-xs text-[#8C8C8C]">
            Upgrade your yeve account to enjoy more features
          </p>
          <div
            css={css`
              position: absolute;
              left: 80px;
              @media (max-width: 1140px) {
                left: clamp(20px, 6vw, 48px);
              }
            `}
          >
            <BackButton
              onClick={() => {
                if (phase) setPhase(0)
              }}
            />
          </div>
        </div>
        {phase === 0 ? (
          <Cards setPhase={setPhase} />
        ) : (
          <AccountInfo setPhase={setPhase} />
        )}
      </main>
    </>
  )
}

export default Upgrade
