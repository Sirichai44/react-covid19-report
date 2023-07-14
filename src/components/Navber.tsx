import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navber.css";
import covid_logo from '../Image/covid-logo.png'

export default function Navber() {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#96ceb4" }}>
          <Toolbar>
            <Link to="/" className="logo">
              <Button sx={{ color: "#fff" }}>
                <img src={covid_logo} alt="" />
              </Button>
            </Link>

            <Link to="/">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff", fontWeight:'bold'}}>Home</Button>
              </Box>
            </Link>

            <Link to="/barchart">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff", fontWeight:'bold'}}>BarChart</Button>
              </Box>
            </Link>

            <Link to="/linechart">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff", fontWeight:'bold' }}>LineChart</Button>
              </Box>
            </Link>

            <Link to="/piechart">
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff", fontWeight:'bold' }}>PieChart</Button>
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}
