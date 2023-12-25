import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Index = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"LINE CHART"} subtitle={"Simple Line Chart"} />
      </Box>
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Index;
