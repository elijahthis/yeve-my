import tw, { css } from 'twin.macro'
import BackButton from '../../UI/Buttons/BackButton'
import { sectionStyles } from '../../../styles/GeneralStyles'

const FormSectionLayout = ({
  children,
  bg,
  content,
  back = true,
  style = {},
}) => {
  const { backFunc, title } = content ?? {}

  return (
    <section
      css={sectionStyles}
      style={{ backgroundColor: bg || '#fafafa', ...style }}
    >
      {back ? (
        <div tw="flex flex-row items-center mb-4">
          <BackButton onClick={backFunc || null} />
          <h3
            css={css`
              margin-left: 40px;
              @media (max-width: 1140px) {
                margin-left: 16px;
              }
            `}
          >
            {title}
          </h3>
        </div>
      ) : null}
      <div
        css={css`
          display: grid;
          grid-template-columns: 316px 1fr;
          > :nth-child(2) > form {
            max-width: 471px;

            > * {
              margin-bottom: 24px;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              font-weight: 600;
            }
          }
          @media (max-width: 1140px) {
            display: block;
            > :first-child {
              display: none;
            }

            > :nth-child(2) > form {
              max-width: 100%;
            }
          }
        `}
      >
        <div></div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default FormSectionLayout
