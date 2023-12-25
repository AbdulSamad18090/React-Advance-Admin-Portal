import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"GEOGRAPHY CHART"} subtitle={"Simple Geography Chart"} />
      </Box>
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Index;
