import tw, { css } from 'twin.macro'
import React, { useState, cloneElement } from 'react'
import YeveGroupNavbar from '../components/UI/NavBars/YeveGroupNavbar'
import YeveGroupSidebar from '../components/UI/Sidebars/YeveGroupSidebar'

const YeveGroupLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false)
  const groups = [
    {
      name: 'Wedding band',
      'sub-groups': ['General'],
      image: '/images/WhenWhere-2.png',
    },
    {
      name: 'Choir',
      'sub-groups': ['General', 'Singers', 'Instrumentalists'],
      image: '/images/WhenWhere-1.png',
    },
  ]
  const [currentSubGroup, setCurrentSubGroup] = useState(null)

  return (
    <>
      <YeveGroupNavbar sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <main
        css={css`
          display: grid;
          grid-template-columns: clamp(240px, 45vw, 320px) 1fr;
          min-height: 0;
          height: calc(100vh - 102px);
          @media (max-width: 1140px) {
            display: block;
            overflow: ${sideOpen ? 'hidden' : 'visible'};
          }
        `}
      >
        <YeveGroupSidebar
          groups={groups}
          sideOpen={sideOpen}
          setSideOpen={setSideOpen}
          currentSubGroup={currentSubGroup}
          setCurrentSubGroup={setCurrentSubGroup}
        />
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
            position: fixed;
            top: 0;
            left: 0;
            display: ${sideOpen ? 'block' : 'none'};
            z-index: 6;
          `}
          onClick={() => {
            setSideOpen(false)
          }}
        ></div>
        {React.Children.map(children, child => {
          return child ? cloneElement(child, { currentSubGroup }) : null
        })}
        {/* {children} */}
      </main>
    </>
  )
}

export default YeveGroupLayout
