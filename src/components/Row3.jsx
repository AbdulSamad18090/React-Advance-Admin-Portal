import { useTheme } from "@emotion/react";
import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import GeographyChart from "./GeographyChart";
import BarChart from "./BarChart";

const Row3 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTab = useMediaQuery("(min-width: 800px)");
  const isMobile = useMediaQuery("(min-width: 600px)");


  return (
    <>
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 4"}
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
        p={"30px"}
      >
        <Typography variant="h5" fontWeight={"600"}>
          Campaign
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={"25px"}
        >
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            $48,352 revenue generated
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>

      <Box
        gridColumn={!isTab ? "span 12" : "span 4"}
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight={"600"}
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height={"250px"} mt={"-20px"}>
          <BarChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn={!isTab ? "span 12" : "span 4"}
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
        p={"30px"}
      >
        <Typography variant="h5" fontWeight={"600"} sx={{ mb: "15px" }}>
          Geography Based Traffic
        </Typography>
        <Box height={"200px"}>
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};

export default Row3;
