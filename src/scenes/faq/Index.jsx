import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { ExpandMoreOutlined } from "@mui/icons-material";
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
        <Header title={"FAQ's"} subtitle={"Frequently Asked Questions"} />
      </Box>
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails color={colors.primary[100]}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
            accusamus suscipit a fugit provident, ipsum exercitationem est
            deleniti dolorum consequatur voluptate blanditiis maiores amet at ab
            minima laudantium reprehenderit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails color={colors.primary[100]}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
            accusamus suscipit a fugit provident, ipsum exercitationem est
            deleniti dolorum consequatur voluptate blanditiis maiores amet at ab
            minima laudantium reprehenderit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails color={colors.primary[100]}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
            accusamus suscipit a fugit provident, ipsum exercitationem est
            deleniti dolorum consequatur voluptate blanditiis maiores amet at ab
            minima laudantium reprehenderit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails color={colors.primary[100]}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
            accusamus suscipit a fugit provident, ipsum exercitationem est
            deleniti dolorum consequatur voluptate blanditiis maiores amet at ab
            minima laudantium reprehenderit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails color={colors.primary[100]}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maxime
            accusamus suscipit a fugit provident, ipsum exercitationem est
            deleniti dolorum consequatur voluptate blanditiis maiores amet at ab
            minima laudantium reprehenderit?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Index;
