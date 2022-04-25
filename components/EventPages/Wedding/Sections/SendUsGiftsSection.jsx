import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import { formCoreStyles } from '../../../../styles/GeneralStyles'
import Button from '../../../UI/Buttons/Button'

const SendUsGiftsSection = () => {
  const giftList = ['Dishwasher', 'Tesla Model S', 'Washing Machine']
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
        <h4>GIFTS REGISTRY</h4>
        <h2>Send us Gifts</h2>
        <p className="text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
          lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. A magna ut lorem consequat.Lorem ipsum dolor sit amet
        </p>
        <form css={formCoreStyles} tw="font-semibold w-9/12 mt-9">
          <div className="form-div">
            {giftList.map((gift, ind) => (
              <div
                tw="text-base flex flex-row items-center justify-between border border-[#E5E5E5] rounded-lg px-4 py-5"
                key={ind}
              >
                {gift}
                <span tw="text-gold font-normal text-sm cursor-pointer">
                  Gift
                </span>
              </div>
            ))}
            <div
              css={css`
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 8px;
                padding: 16px;
              `}
            >
              <div tw="mb-4">
                <p tw="text-base mb-3">Cash Gifts</p>
                <label>
                  Select an amount
                  <div
                    tw=" flex flex-row items-center gap-4 justify-between"
                    css={css`
                      > * {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 24px;
                        color: #1a1a1a;
                        padding: 12px 47px;
                        background: #fafafa;
                        border: 1px solid #d2d2d2;
                        border-radius: 4px;
                        cursor: pointer;
                      }
                    `}
                  >
                    <div>&#163;5</div>
                    <div>&#163;10</div>
                    <div>&#163;20</div>
                  </div>
                </label>
              </div>
              <label htmlFor="">
                Or Enter custom amount
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
                  />
                </div>
              </label>
              <div tw="flex flex-col items-center gap-6">
                <div tw="flex flex-row items-center gap-9 w-full">
                  <Button variant="secondary">Cancel</Button>
                  <input type="submit" value="Continue" tw="w-full" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SendUsGiftsSection
