import React, { ReactElement, useState, useEffect } from 'react'
import Layout from '../../components/layouts/layout'
import {
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Line, Bar, Pie } from 'react-chartjs-2'
import RefreshIcon from '@material-ui/icons/Refresh'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}))

interface Props {}

export default function Report({}: Props): ReactElement {
  const [chartType, setChartType] = useState('line')
  // const [chartData, setChartData] = useState([])

  // useEffect(() => {
  //   setChartData(getRandomInt())
  // }, [])

  // const getRandomInt = () => {
  //   let randoms = []
  //   for (let index = 0; index < 8; index++) {
  //     randoms.push(Math.floor(Math.random() * (5000 - 5 + 1)) + 5)
  //   }
  //   return randoms
  // }

  const chartData = [15, 25, 23, 30, 45, 55, 65, 25, 36, 50, 40, 60]
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Revenue 2021',
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: chartData,
      },
    ],
  }

  const chartOption = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            },
          },
        },
      ],
    },
  }
  return (
    <Layout>
      <Typography variant="h3">Sale Chart</Typography>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          variant={chartType === 'line' ? 'contained' : 'outlined'}
          onClick={() => setChartType('line')}
        >
          Line
        </Button>
        <Button
          variant={chartType === 'bar' ? 'contained' : 'outlined'}
          onClick={() => setChartType('bar')}
        >
          Bar
        </Button>
        <Button
          variant={chartType === 'pie' ? 'contained' : 'outlined'}
          onClick={() => setChartType('pie')}
        >
          Pie
        </Button>
      </ButtonGroup>
      {/* <IconButton
        aria-label="refresh"
        onClick={() => {
          setChartData(getRandomInt())
        }}
      >
        <RefreshIcon />
      </IconButton> */}

      <div style={{ height: 500 }}>
        {chartType === 'line' && <Line data={data} width={100} height={50} />}
        {chartType === 'pie' && <Pie data={data} width={100} height={50} />}
        {chartType === 'bar' && <Bar data={data} width={100} height={50} />}
      </div>
    </Layout>
  )
}
