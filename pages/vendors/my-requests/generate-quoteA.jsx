import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useRouter } from 'next/router'
import VendorsLayout from '../../../layouts/vendorsLayout'
import { sectionStyles } from '../../../styles/GeneralStyles'
import { BackButton } from '../../../components/pieces/Buttons'
import keyboardistBadge from '../../../images/Rectangle 444.png'

export const GenerateQuoteContent = () => {
  const router = useRouter()

  return (
    <>
      <section css={sectionStyles} style={{ backgroundColor: '#ffffff' }}>
        <div
          tw="flex flex-row items-center"
          css={css`
            margin-bottom: 16px;
            @media (max-width: 1140px) {
              margin-bottom: 10px;
            }
          `}
        >
          <BackButton
            onClick={() => {
              router.push('/vendors/my-requests')
            }}
          />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            Generate Quote
          </h3>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 316px 1fr;
            form > * {
              width: 471px;
              margin-bottom: 24px;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              font-weight: 600;
            }
            > * {
              // margin: 0 auto;
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
            h4 {
              margin: 16px 0;
            }
          `}
        >
          <div></div>
          <form
            action=""
            onSubmit={ev => {
              ev.preventDefault()
              router.push('/vendors/my-requests/preview-quote')
            }}
          >
            <div className="form-div">
              <label htmlFor="">
                Service
                <div
                  tw="px-1 py-1 rounded-l bg-[#fafafa] border border-[#d2d2d2] w-full flex flex-row items-center gap-4"
                  css={css`
                    height: 47px;
                  `}
                >
                  <Image src={keyboardistBadge} alt="" />
                  Keyboardist
                </div>
              </label>
              <label htmlFor="moreInfo">
                Event description
                <textarea
                  name="moreInfo"
                  id="moreInfo"
                  tw="resize-none"
                  placeholder="Event description..."
                  // value={formData.details.moreInfo}
                  // onChange={ev => {
                  //   const newData = { ...formData }
                  //   newData.details.moreInfo = ev.target.value
                  //   setFormData(newData)
                  // }}
                ></textarea>
                <p tw="text-right">0/200</p>
              </label>
              <label htmlFor="">
                How much would you want to charge?
                <div tw="flex flex-row items-center">
                  <div
                    tw="px-4 py-3 rounded-l bg-[#fafafa] border border-[#d2d2d2]"
                    css={css`
                      height: 47px;
                    `}
                  >
                    &#163;
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{
                      borderRadius: '0 4px 4px 0',
                      borderLeft: 0,
                    }}
                    tw="w-full"
                    // value={formData.budget[ind].from}
                    // onChange={ev => {
                    //   const newData = { ...formData }
                    //   newData.budget[ind].from = Number.isNaN(
                    //     parseInt(ev.target.value),
                    //   )
                    //     ? 0
                    //     : parseInt(ev.target.value)
                    //   setFormData(newData)
                    // }}
                  />
                </div>
              </label>
              <div tw="w-full">
                <input type="submit" value="Continue" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

const GenerateQuote = () => {
  return (
    <VendorsLayout>
      <GenerateQuoteContent />
    </VendorsLayout>
  )
}

export default GenerateQuote
