import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import "./BarChartPage.css";


function BarChartPage({ data }: any) {
  const [month, setMonth] = useState("");
  const [filterData,setFilterData] = useState([]);

  //month for MenuItem
  const months = [
    { value: '1', monthName: "January" },
    { value: '2', monthName: "February" },
    { value: '3', monthName: "March" },
    { value: '4', monthName: "April" },
    { value: '5', monthName: "May" },
    { value: '6', monthName: "June" },
    { value: '7', monthName: "July" },
    { value: '8', monthName: "August" },
    { value: '9', monthName: "September" },
    { value: '10', monthName: "October" },
    { value: '11', monthName: "November" },
    { value: '12', monthName: "December" },
  ];
  const handleChange = (e: SelectChangeEvent) => {
    setMonth(e.target.value as string);
  };
  // console.log(month);

  //setDefaultMonth
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = String(currentDate.getMonth() + 1);
    console.log(currentMonth);
    setMonth(currentMonth);
  }, []);

  //filterData when month change
  useEffect(() =>{
    const result = data.filter((item:any) =>
      String(item.month) === month
    );
    // console.log(result);
    setFilterData(result);
  },[month])



  return (
    <div className="bar-container">
      <ResponsiveContainer width="100%" aspect={3} className={"chart"}>
        <BarChart
          width={800}
          height={600}
          data={filterData}
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
          <Bar dataKey="newCases" fill="rgba(255, 186, 186, 1)" />
          <Bar dataKey="newRecovered" fill="rgba(102, 123, 104, 1)" />
          <Bar dataKey="newDeaths" fill="rgba(192, 197, 206, 1)" />
        </BarChart>
      </ResponsiveContainer>

      <Box sx={{ minWidth: 120 }} style={{ width: "20%", marginTop: "50px" }}>
        <FormControl fullWidth>
          <InputLabel id="month-selection">Month</InputLabel>
          <Select
            labelId="month-selection"
            id="month-selection"
            value={month}
            label="Month"
            onChange={handleChange}
          >
            {months.map((month) => (
              <MenuItem key={month.value} value={month.value}>
                {month.monthName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default BarChartPage;
