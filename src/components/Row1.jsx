import React from "react";
import StatBox from "./StatBox";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";

const Row1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTab = useMediaQuery("(min-width: 1077px)");
  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 3"}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
          }
        />
      </Box>
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 3"}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.50"
          increase="+21%"
          icon={
            <PointOfSale
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 3"}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.30"
          increase="+5%"
          icon={
            <PersonAdd
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 3"}
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,325,134"
          subtitle="Traffic Received"
          progress="0.80"
          increase="+43%"
          icon={
            <Traffic
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </>
  );
};

export default Row1;
