import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
const Index = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"BARCHART"} subtitle={"Simple Bar Chart"} />
      </Box>
      <Box height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Index;
