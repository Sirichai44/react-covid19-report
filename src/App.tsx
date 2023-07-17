import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Store from "./store/Store";
import { Provider } from "react-redux/es/exports";

//Components
import Navber from "./components/Navber";
import OverallReport from "./components/OverallReport";
import BarChartPage from "./components/BarChartPage";
import NotFound from "./components/NotFound";
import LineChartPage from "./components/LineChartPage";
import PieChartPage from "./components/PieChartPage";

function App() {
  //formatNumber
  function formatMoney(money: number): string {
    if (money === undefined) {
      return "";
    }
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route
            path="/"
            element={
              <OverallReport
                formatMoney={formatMoney as (money: number) => string}
              />
            }
          ></Route>
          <Route path="/barchart" element={<BarChartPage />}></Route>
          <Route path="/linechart" element={<LineChartPage />}></Route>
          <Route path="/piechart" element={<PieChartPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/info" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
