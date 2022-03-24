import tw, { css } from 'twin.macro'
import VendorLayout from '../../../layouts/vendorsLayout'
import TabBar from '../../../components/pieces/tabBar'
import { ProfileInfo, Payment } from '../../../components/clients/accountParts'
import { sectionStyles } from '../../../styles/GeneralStyles'

const AccountRoot = () => {
  const accountTabData = [
    { title: 'Personal Information', component: <ProfileInfo /> },
    { title: 'Payment', component: <Payment /> },
  ]
  return (
    <section css={sectionStyles}>
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

const Account = () => {
  return (
    <VendorLayout>
      <AccountRoot />
    </VendorLayout>
  )
}

export default Account
