import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Typography from "@mui/material/Typography";
import './PieChartPage.css';
import { useSelector } from "react-redux";

const PieChartPage = () => {
  const { data } = useSelector((state:any) => state.data)
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  
  const newData = [
    {
      name: "TotalPublicHospital",
      value: data.slice(-1)[0].totalPublicHospital,
    },
    {
      name: "TotalPrivateHospital",
      value: data.slice(-1)[0].totalPrivateHospital,
    },
    { name: "TotalOtherPUI", value: data.slice(-1)[0].totalOtherPUI },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
          x={x}
          y={y}
          fill="#333"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="custom-label"
        >
          {`${name}  ${(percent * 100).toFixed(2)}%`}
        </text>
    );
  };

  return (
    <div className="pie-container">
      <Typography variant="h5" className="text">
        รายงานข้อมูล Covid-19 ของวันที่ {data.slice(-1)[0].publishdate}
      </Typography>
      <ResponsiveContainer width="100%" aspect={3} className={"chart"}>
        <PieChart >
          <Pie
            data={newData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartPage;
