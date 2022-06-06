import tw, { css } from 'twin.macro'
import Button from '../../UI/Buttons/Button'
import { SearchBar } from '../../formTools'
import SortComponent from '../../pieces/sort'
import { sectionStyles } from '../../../styles/GeneralStyles'

const DashboardLayout1 = ({ children, title, button }) => {
  return (
    <section css={sectionStyles}>
      <div tw="flex flex-row items-center justify-between mb-7">
        <h3>{title}</h3>
        {button ? (
          <Button
            variant={button?.variant}
            fill={button?.fill}
            bg={button?.bg}
            href={button?.href}
            onClick={button?.onClick}
          >
            Create +
          </Button>
        ) : (
          <span />
        )}
      </div>
      <div>
        <div tw="flex flex-row items-center justify-between">
          <div
            tw="flex flex-row items-center gap-6"
            css={css`
              > :first-child {
                height: 48px;
              }
              button {
                padding: 12px 20px;
                line-height: 24px;
              }
            `}
          >
            <SearchBar />
            <Button variant="tertiary">Export</Button>
          </div>
          <SortComponent />
        </div>
        {children}
      </div>
    </section>
  )
}

export default DashboardLayout1
