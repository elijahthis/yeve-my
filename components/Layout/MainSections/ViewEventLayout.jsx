import tw, { css } from 'twin.macro'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { sectionStyles } from '../../../styles/GeneralStyles'
import Button from '../../UI/Buttons/Button'
import BackButton from '../../UI/Buttons/BackButton'
import { BsShop } from 'react-icons/bs'
import { SearchBar } from '../../formTools'
import SortComponent from '../../pieces/sort'

const ViewEventLayout = ({
  children,
  title,
  button,
  eventTitle,
  backFunc,
  cards,
}) => {
  return (
    <section css={sectionStyles}>
      <div>
        <div tw="flex flex-row items-center gap-6 mb-2">
          <BackButton onClick={backFunc} />
          <h5>{eventTitle}</h5>
        </div>
        <div
          tw="flex flex-row items-center justify-between mb-6"
          css={css`
            button {
              padding: 16px 32px;
            }
          `}
        >
          <h3>{title}</h3>
          {button ? (
            <Button
              variant={button?.variant}
              fill={button?.fill}
              bg={button?.bg}
              href={button?.href}
              onClick={button?.onClick}
            >
              Add
            </Button>
          ) : (
            <span />
          )}
        </div>
        {cards && cards}
        <div>
          <div tw="flex flex-row items-center justify-between mb-6">
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
      </div>
    </section>
  )
}

export default ViewEventLayout
