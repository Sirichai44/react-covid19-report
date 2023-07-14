import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navber from "./components/Navber";
import OverallReport from "./components/OverallReport";
import BarChartPage from "./components/BarChartPage";
import NotFound from "./components/NotFound";
import LineChartPage from "./components/LineChartPage";
import PieChartPage from "./components/PieChartPage";

function App() {
  const [data, setData] = useState<any>(null);

  //formatNumber
  function formatMoney(money:number):string {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://covid19.traffy.in.th/api/state-covid19"
        );
        localStorage.setItem("data", JSON.stringify(res.data));
        const storageData = localStorage.getItem("data");
        const parseData = typeof storageData === "string" ? JSON.parse(storageData) : null;
        const dataForChart = parseData.results.map((item:any) =>{
          const { 
            publishdate,
            newCases,
            newDeaths,
            newRecovered,  
            totalCases, 
            totalRecovered,
            currentlyInfectedPatients, 
            totalDeaths, 
            totalAirlinesAndShipsPUI,
            totalPrivateHospital,
            totalPublicHospital,
            totalOtherPUI
          } = item

          const formattedDate = publishdate.split("-").reverse().join("-");
          const dateObj = new Date(formattedDate);
          const month = dateObj.getMonth() + 1;

          return { 
            publishdate,
            newCases,
            newDeaths,
            newRecovered, 
            totalCases, 
            totalRecovered, 
            currentlyInfectedPatients,
            totalDeaths, 
            month,
            totalAirlinesAndShipsPUI,
            totalPrivateHospital,
            totalPublicHospital,
            totalOtherPUI,
            setDate:dateObj
          }
        });

        const dataForChartSorded = dataForChart.sort((a:any,b:any) =>{
          const dateA:any = a.setDate.getTime();
          const dateB:any = b.setDate.getTime();
          return dateA - dateB;
        });
        setData(dataForChartSorded);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // console.log(data);
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route
          path="/"
          element={
            data ? <OverallReport data={data} formatMoney={formatMoney as (money: number) => string}  /> : <p>Loading...</p>
          }
        ></Route>
        <Route
          path="/barchart"
          element={
            data ? <BarChartPage data={data} /> : <p>Loading...</p>
          }
        ></Route>
        <Route
          path="/linechart"
          element={
            data ? <LineChartPage data={data} /> : <p>Loading...</p>
          }
        ></Route>
                <Route
          path="/piechart"
          element={
            data ? <PieChartPage data={data} /> : <p>Loading...</p>
          }
        ></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/info" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
