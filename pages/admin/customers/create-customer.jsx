import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import { sectionStyles, formStyles } from '../../../styles/GeneralStyles'
import profilePlaceholder from '../../../images/Ellipse 56.png'
import Modal from '../../../components/modal'
import { ProceedButton } from '../../../components/pieces/Buttons'
import { SendMessage } from '../../../components/modalChildren'

const CreateCustomersRoot = () => {
  const router = useRouter()
  return (
    <section css={sectionStyles}>
      <h3>Create Customer</h3>
      <p tw="my-6">
        <span
          onClick={() => router.push('/admin/customers')}
          tw="cursor-pointer text-[#767676]"
        >
          Customers
        </span>{' '}
        / Create Customer
      </p>
      <div css={formStyles}>
        <div></div>
        <div>
          <form
            action=""
            onSubmit={ev => {
              ev.preventDefault()
            }}
          >
            <div tw="mt-6">
              <div className="form-div">
                <label htmlFor="">
                  Profile Image
                  <div tw="flex flex-row items-center gap-4">
                    <div
                      css={css`
                        width: 100px;
                        height: 100px;
                      `}
                    >
                      <Image src={profilePlaceholder} />
                    </div>
                    <p tw="text-sm text-gold cursor-pointer">Add Image</p>
                  </div>
                </label>
                <label htmlFor="">
                  Username
                  <input type="text" name="" id="" placeholder="Username" />
                </label>
                <label htmlFor="">
                  First Name
                  <input type="text" name="" id="" placeholder="First name" />
                </label>
                <label htmlFor="">
                  Last Name
                  <input type="text" name="" id="" placeholder="Last name" />
                </label>
                <label htmlFor="">
                  Email
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Johndoe@gmail.com"
                  />
                </label>
                <label htmlFor="">
                  Mobile number
                  <input type="tel" name="" id="" placeholder="Mobile number" />
                </label>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '32px',
              }}
              css={css`
                > * {
                  width: 100%;
                }
              `}
            >
              <ProceedButton content="Cancel" bg="#F8F8F8" col="#343434" />
              <input type="submit" value="Continue" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const CreateCustomers = () => {
  return (
    <AdminLayout>
      <CreateCustomersRoot />
    </AdminLayout>
  )
}

export default CreateCustomers
