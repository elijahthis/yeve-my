import tw, { css } from 'twin.macro'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { GiHotMeal } from 'react-icons/gi'
import { Chart } from 'chart.js/auto'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
// import 'chartjs-plugin-doughnutlabel'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export const SeatingChart = ({ tableData }) => {
  return (
    <div
      css={css`
        width: 243px;
        height: 243px;
        border: 2px solid black;
        margin: 0 auto;
        border-radius: 50%;
        > * {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          position: relative;
          //   transform: translate(0, -50%);
          display: grid;
          place-items: center;
        }
      `}
    >
      <div>
        {Array(tableData.capacity)
          .fill()
          .map((section, ind) => (
            <>
              <div
                key={ind}
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 50%;
                  width: 50%;
                  transform: rotate(${30 * ind}deg) skew(60deg, 0);
                  border-bottom: 1px dashed #e5e5e5;
                  transform-origin: bottom right;
                `}
                className={`number ${ind}`}
                onClick={() => {
                  console.log(ind)
                }}
              >
                <div
                  css={css`
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    bottom: 30%;
                    //   background: red;
                    bottom: -10%;
                    transform: skew(-60deg, 0) rotate(${-30 * ind}deg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    > * {
                    }
                  `}
                ></div>
              </div>
            </>
          ))}

        <div
          css={css`
            width: 80px;
            height: 80px;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-radius: 50%;
            z-index: 1;
            display: grid;
            place-items: center;
            padding: 16px 0;
          `}
        >
          <p tw="text-base">{tableData.name}</p>
          <GiHotMeal color="#de8e0e" size={20} />
        </div>
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
          `}
        >
          <div
            css={css`
              width: 60%;
              height: 60%;
              position: relative;
              margin-left: 7%;
              margin-top: 15%;
            `}
          >
            {Array(tableData.capacity)
              .fill()
              .map((section, ind) => (
                <div
                  css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 50%;
                    transform: rotate(${30 * ind}deg);
                    transform-origin: bottom right;
                    > * {
                      display: inline-flex;
                      flex-direction: column;
                      transform: rotate(${-30 * ind}deg);
                      transform-origin: bottom right;
                      // position: absolute;
                      top: 0;
                      right: 0;
                    }
                  `}
                >
                  <div>
                    <BsPerson />
                    <span>{ind + 1}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const DoughnutChart = ({ chartData, pieData }) => {
  return (
    <div
      css={css`
        position: relative;
        width: 300px;
        height: 300px;

        > :nth-child(1) {
          position: absolute;
          top: 0;
          left: 0;
        }
        > div:nth-of-type(2) {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
        }
      `}
    >
      <div>
        <Doughnut
          data={chartData}
          options={{
            plugins: {
              ChartDataLabels,
              title: {
                display: false,
                // text: 'Seating Chart',
              },

              datalabels: {
                display: true,
                align: 'bottom',
                borderRadius: 3,
                color: '#fff',
                font: {
                  size: 10,
                },
                formatter: (val, ctx) => {
                  return ctx.dataIndex + 1
                },
              },
              legend: {
                display: false,
              },
            },
            // ChartDataLabels,
            cutout: 105,
            radius: '121.5',
          }}
          plugins={[
            ChartDataLabels,
            {
              tooltips: {
                enabled: false,
              },
            },
          ]}
        />
      </div>
      <div>
        <Pie
          data={pieData}
          options={{
            plugins: {
              ChartDataLabels,
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
            ChartDataLabels,
            cutout: 0,
            radius: '100',
            responsive: false,
          }}
          plugins={[
            {
              tooltips: {
                enabled: false,
              },
              tooltip: { callbacks: {} },
            },
          ]}
        />
      </div>
    </div>
  )
}

export const SeatingChart2 = ({ group, list, title }) => {
  const [chartData, setChartData] = useState()

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: 'My First Dataset',
        data: Array(12).fill(30),
        backgroundColor: [
          'rgb(26, 26, 26)',
          'rgb(26, 26, 26)',
          'rgb(222, 142, 14)',
        ],
        borderColor: '#e5e5e5',
        hoverOffset: 4,
      },
      // {
      //   label: 'My Second Dataset',
      //   data: Array(12).fill(30),
      //   backgroundColor: ['transparent', 'transparent', 'transparent'],
      //   borderColor: '#e5e5e5',
      //   hoverOffset: 4,
      // },
    ],
  }
  const pieData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: 'My Second Dataset',
        data: Array(12).fill(30),
        backgroundColor: ['#fafafa', '#fafafa', '#fafafa'],
        borderColor: '#e5e5e5',
      },
    ],
  }

  return (
    <div>
      <div
        css={css`
          width: 260px;
          height: 260px;
          position: relative;
          display: grid;
          place-items: center;
          > :first-child {
            position: absolute;
          }
        `}
      >
        <DoughnutChart chartData={data} pieData={pieData} />

        <div
          css={css`
            width: 80px;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #e5e5e5;
            border-radius: 50%;
            z-index: 1;
            background-color: #fafafa;
          `}
        >
          <p tw="text-base">{title}</p>
          <GiHotMeal color="#de8e0e" size={20} />
        </div>
      </div>
      <p tw="text-center text-base">{group.ind + '. ' + group.name}</p>
    </div>
  )
}
