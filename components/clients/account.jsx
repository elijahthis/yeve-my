import tw, { css } from 'twin.macro'
import TabBar from '../pieces/tabBar'
import { ProfileInfo, Payment } from './accountParts'
import { servicesSection } from './services'

const Account = () => {
  const accountTabData = [
    { title: 'Personal Information', component: <ProfileInfo /> },
    { title: 'Payment', component: <Payment /> },
  ]
  return (
    <section css={servicesSection}>
      <div>
        <h3>Account</h3>
        <div
          css={css`
            > div > :first-child > div > div {
              padding: 16px 20px;
            }
            @media (max-width: 1140px) {
              > div > div > div {
                justify-content: space-between;
              }
            }
          `}
        >
          <TabBar dataList={accountTabData} />
        </div>
      </div>
    </section>
  )
}

export default Account
