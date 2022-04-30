import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { GiHotMeal } from 'react-icons/gi'
import { BiChevronRight } from 'react-icons/bi'
import { FoodSelect } from './'
import Button from '../../../../UI/Buttons/Button'
import { formCoreStyles } from '../../../../../styles/GeneralStyles'

const FoodDropdown = ({ title, info }) => {
  const [open, setOpen] = useState(false)
  const [food, setFood] = useState('')
  const [foodTemp, setFoodTemp] = useState('')
  return (
    <div>
      <div
        css={css`
          width: 100%;
          padding: 8px 16px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 16px;
        `}
        onClick={() => {
          setOpen(true)
        }}
      >
        <div>
          <p tw="flex flex-row items-center gap-1 ">
            <span tw="text-[#1a1a1a]">{title}</span> <GiHotMeal />
          </p>
          <p tw="text-[#8c8c8c] text-xs">{food?.title || 'None selected'}</p>
        </div>
        <BiChevronRight size="18" />
      </div>
      {open ? (
        <>
          {food ? (
            <>
              <div css={formCoreStyles}>
                <label htmlFor="">
                  Allergy or special meal requirement?
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter allergy"
                  />
                </label>
                <div tw="flex flex-row items-center gap-8 mt-16">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Submit</Button>
                </div>
              </div>
            </>
          ) : (
            <div
              css={css`
                background: #ffffff;
                border-radius: 4px;
                padding: 28px 24px;
              `}
            >
              <h3 tw="mb-6">Select Meals</h3>
              <div tw="flex flex-col items-start gap-4">
                {info.map((item, ind) => (
                  <FoodSelect
                    info={item}
                    key={ind}
                    onClick={() => {
                      setFoodTemp(item)
                    }}
                    active={foodTemp === item}
                  />
                ))}
              </div>
              <div tw="flex flex-row items-center gap-8 mt-16">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setFoodTemp('')
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setFood(foodTemp)
                  }}
                >
                  Select
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p tw="text-xs text-[#8C8C8C] font-semibold">
          Tap the food tray icon on your seat in the table to select food
        </p>
      )}
    </div>
  )
}

export default FoodDropdown
