import tw, { css } from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import phone from '../../../images/phone.png'
import { BiChevronDown } from 'react-icons/bi'
import { BsYoutube, BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaTelegramPlane } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #1a1a1a;
        color: #d2d2d2;

        > :first-child {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 72px 58px;
        }

        > :last-child {
          margin: 0 auto;
          text-align: center;
          padding: 32px 0;
          border-top: 1px solid #343434;
          text-transform: uppercase;
          color: #767676;
        }
      `}
    >
      <div>
        <div
          css={css`
            margin-right: 46px;
          `}
        >
          <Image src={phone} />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 72px 58px;
            font-weight: 600;

            form {
              width: 360px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 44px;
              color: #8c8c8c;
              font-weight: 600;
              font-size: 14px;
              line-height: 16px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              overflow: hidden;

              input {
                padding: 14px 16px;
              }

              input[type='email'] {
                background-color: transparent;
                width: 100%;
              }

              input[type='submit'] {
                border-radius: inherit;
                padding: 14px 32px;
                height: 100%;
                color: #1a1a1a;
                cursor: pointer;
              }
            }
            ul {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;

              li {
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #767676;
              }
            }
          `}
        >
          <div
            css={css`
              margin-right: 65px;
            `}
          >
            <p tw="text-base text-white mb-6">Stay tuned for updates</p>
            <form
              action=""
              onSubmit={ev => {
                ev.preventDefault()
              }}
            >
              <input type="email" placeholder="Your email" />
              <input type="submit" value="Send" />
            </form>
          </div>
          <div
            css={css`
              margin-right: 95px;
            `}
          >
            <p tw="text-base text-white mb-6">Useful Links</p>
            <ul>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p tw="text-base text-white mb-6">Contact Us</p>
            <ul>
              <li>07599503430</li>
              <li>www.yeve.co.uk</li>
              <li>support@yeve.co.uk</li>
            </ul>
            <div
              css={css`
                margin-top: 2rem;

                > :nth-child(2) {
                  margin-top: 1.5rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 2rem;
                  svg {
                    color: #767676;
                    cursor: pointer;
                  }
                }
              `}
            >
              <p>Join the community</p>
              <div>
                <Link href="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="#">
                  <BsYoutube size={24} />
                </Link>
                <Link href="#">
                  <FaFacebook size={24} />
                </Link>
                <Link href="#">
                  <BsTwitter size={24} />
                </Link>
                <Link href="#">
                  <BsYoutube size={24} />
                </Link>
                <Link href="#">
                  <FaTelegramPlane size={24} />
                </Link>
                <Link href="#">
                  <SiDiscord size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div tw="absolute right-20 flex flex-row items-center gap-4 ">
            <p tw="flex flex-row items-center gap-3">
              English <BiChevronDown />
            </p>
            <span>|</span>
            <p tw="flex flex-row items-center gap-3">
              USD <BiChevronDown />
            </p>
          </div>
        </div>
      </div>
      <div>2020 Yeve.co.uk</div>
    </footer>
  )
}

export default Footer
