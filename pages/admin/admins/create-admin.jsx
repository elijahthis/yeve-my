import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AdminLayout from '../../../layouts/adminLayout'
import { sectionStyles, formStyles } from '../../../styles/GeneralStyles'
import profilePlaceholder from '../../../images/Ellipse 56.png'
import Modal from '../../../components/UI/Modals/Modal'
import Button from '../../../components/UI/Buttons/Button'
import { SendMessage } from '../../../components/UI/Modals/ModalChildren'
import { DropdownMenu } from '../../../components/formTools'

const CreateAdminRoot = () => {
  const router = useRouter()
  return (
    <section css={sectionStyles}>
      <h3>Create Admin</h3>
      <p tw="my-6">
        <span
          onClick={() => router.push('/admin/admins')}
          tw="cursor-pointer text-[#767676]"
        >
          Admins
        </span>{' '}
        / Create Admin
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
              <div>
                <div className="form-div">
                  <label htmlFor="">
                    Name
                    <input type="text" name="" id="" placeholder="Enter Name" />
                  </label>
                  <label htmlFor="">
                    Email
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                    />
                  </label>
                  <label htmlFor="">
                    Select roles
                    <DropdownMenu
                      placeholder="Select"
                      list={['Admin', 'Super Admin']}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div
              css={css`
                margin-top: 70px;
                > * > label {
                  flex-direction: row;
                  gap: 12px;
                }
              `}
            >
              <div tw="flex flex-row items-center justify-between">
                <h4>Select Priviledges</h4>
                <label tw="flex flex-row items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  All Priviledges
                </label>
              </div>
              <div className="form-div">
                <label tw="flex flex-row items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  View Financials
                </label>
                <label tw="flex flex-row items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  Manage Vendors
                </label>
                <label tw="flex flex-row items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  Manage Suppliers
                </label>
                <label tw="flex flex-row items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  Send Message to users
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
              <Button variant="secondary">Cancel</Button>
              <input type="submit" value="Continue" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const CreateAdmin = () => {
  return <CreateAdminRoot />
}

CreateAdmin.getLayout = page => <AdminLayout>{page}</AdminLayout>

export default CreateAdmin
