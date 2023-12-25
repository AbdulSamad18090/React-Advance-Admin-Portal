import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { DownloadOutlined } from "@mui/icons-material";

import Row1 from "../../components/Row1";
import Row2 from "../../components/Row2";
import Row3 from "../../components/Row3";

const Dashbord = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box m={"20px"}>
      <Box
        display={isMobile ? "flex" : ""}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              width: "100%",
              mb: `${!isMobile ? "20px" : "0px"}`,
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID AND CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* ROW 1 */}
        <Row1 />
        {/* Row 2 */}
        <Row2 />
        {/* ROW 3 */}
        <Row3 />

        {/*  */}
      </Box>
    </Box>
  );
};

export default Dashbord;
