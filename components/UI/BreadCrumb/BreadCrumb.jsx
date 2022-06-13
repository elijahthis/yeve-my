import tw, { css } from 'twin.macro'

const BreadCrumb = ({ pages }) => {
  return (
    <div tw="mt-6">
      {pages.map((crumb, ind) => (
        <span
          key={`crumb${ind}`}
          css={
            !crumb.last
              ? css`
                  cursor: pointer;
                  color: #767676;
                `
              : null
          }
          onClick={crumb?.onClick && crumb?.onClick}
        >
          {crumb.name}
          {crumb.last ? ' ' : ' / '}
        </span>
      ))}
    </div>
  )
}

export default BreadCrumb
