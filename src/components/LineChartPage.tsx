import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LineChartPage.css'

const LineChartPage = ({data}:any) => {
  // console.log(data);
  return (
    <div className="line-container">
      <ResponsiveContainer width="100%" aspect={3} className={"chart"}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="publishdate" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalCases" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="totalRecovered" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartPage