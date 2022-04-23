import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import { BooleanToggle } from '../../../formTools'
import { BiChevronRight } from 'react-icons/bi'

const RSVPSection = () => {
  return (
    <section css={weddingSection} style={{ padding: '72px' }}>
      <div
        css={css`
          width: 50%;
          display: flex;
          flex-direction: column;
          align-self: flex-start;

          h4,
          h2,
          .text-body {
            text-align: left;
          }
        `}
      >
        <h4>SAVE THE DATE</h4>
        <h2>RSVP</h2>
        <p className="text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. A magna ut lorem consequat.Lorem ipsum dolor sit amet
        </p>
        <form css={formCoreStyles} tw="font-semibold w-9/12 mt-4">
          <div className="form-div">
            <label>
              Can you attend this event?
              <BooleanToggle list={['Yes', 'No', 'Maybe']} />
            </label>
            <label htmlFor="">
              Email address
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="">
              Full name
              <div
                css={css`
                  input:first-of-type {
                    width: 50%;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                  }
                  input:nth-of-type(2) {
                    width: 50%;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                  }
                `}
              >
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
              </div>
            </label>
          </div>
          <div tw="flex flex-col items-center gap-6">
            <div
              css={css`
                position: relative;
                margin-top: 2rem;
                width: 100%;

                > input[type='submit'] {
                  margin: 0;
                  width: 100%;
                }
                p {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  background-color: #000000;
                  border-radius: 4px;
                  color: white;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  gap: 16px;
                  cursor: pointer;
                }
              `}
            >
              <input type="submit" value="Proceed" />
              <p>
                <span>Proceed</span>
                <BiChevronRight size={24} />
              </p>
            </div>
            <p>or</p>
            <button tw="w-full text-center font-semibold py-3 border border-[#e5e5e5] rounded">
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RSVPSection
