import { useTheme } from "@emotion/react";
import React from "react";
import { tokens } from "../theme";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import LineChart from "./LineChart";
import { mockTransactions } from "../data/mockData";

const Row2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTab = useMediaQuery("(min-width: 800px)");
  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Box
        gridColumn={!isTab ? "span 12" : "span 8"}
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt={"25px"}
          p={"0 30px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={"600"}
              color={colors.grey[100]}
            >
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              color={colors.greenAccent[500]}
            >
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton>
              <DownloadOutlined
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height={"250px"} mt={"-20px"}>
          <LineChart isDashoard={true} />
        </Box>
      </Box>
      {/* Transactions */}
      <Box
        gridColumn={!isTab ? `${!isMobile ? "span 12" : "span 6"}` : "span 4"}
        gridRow={"span 2"}
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={`4px solid ${colors.grey[100]}`}
          color={colors.grey[100]}
          p={"15px"}
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight={"600"}>
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`2px solid ${colors.grey[100]}`}
            p={"15px"}
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight={"600"}
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p={"5px 10px"}
              borderRadius={"4px"}
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Row2;
