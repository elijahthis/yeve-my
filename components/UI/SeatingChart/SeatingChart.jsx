import tw, { css } from 'twin.macro'
import { ResponsivePie } from '@nivo/pie'
import { BsPerson } from 'react-icons/bs'

export const MyResponsivePie = ({
  data,
  setDraggingVal,
  draggingVal,
  tableList,
  setTableList,
}) => (
  <div
    css={css`
      height: 243px;
      width: 243px;
    `}
  >
    {/* <BsPerson /> */}
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.716}
      padAngle={0.7}
      cornerRadius={0}
      activeOuterRadiusOffset={4}
      borderWidth={1}
      borderColor="transparent"
      arcLabel="label"
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="white"
      // arcLabelsComponent={({ datum, label, style }) => (
      //   <g transform={style.transform} style={{ pointerEvents: 'none' }}>
      //     <circle fill={style.textColor} cy={6} r={15} />
      //     <circle fill="#ffffff" stroke={datum.color} strokeWidth={2} r={16} />
      //     <text
      //       textAnchor="middle"
      //       dominantBaseline="central"
      //       fill={style.textColor}
      //       style={{
      //         fontSize: 10,
      //         fontWeight: 800,
      //       }}
      //     >
      //       {label}
      //     </text>
      //   </g>
      // )}
      colors={{ datum: 'data.color' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[]}
      legends={[]}
      onMouseEnter={(node, ev) => {
        // node.data = draggingVal
        const newTableList = [...tableList]

        console.log(node.data)
        // console.log(newTableList[node.data.tableNumber - 1])
        newTableList[node.data.tableNumber - 1].seats[node.data.id - 1].person =
          draggingVal?.attendee
        // console.log(newTableList[0].seats == tableList[1].seats)
        draggingVal ? setTableList(newTableList) : null
        setDraggingVal(null)
        console.log(draggingVal)
        // console.log(data)
      }}
    />
  </div>
)
