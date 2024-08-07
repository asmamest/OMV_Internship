import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the purpose of this dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The dashboard is designed to monitor and visualize key parameters such as temperature, pressure, tank levels, and flow rates of oil, gas, and water in real-time. It helps in making informed decisions and ensuring efficient operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What information can I view on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The dashboard displays real-time data on temperature trends, pressure levels, tank levels, current flow rates of oil, gas, and water, and the net flow rate. It may also include historical data and trend analysis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How often is the data updated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The data on the dashboard is updated in real-time, with new readings being displayed as soon as they are received from the sensors and connected systems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I navigate through different sections of the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The dashboard features a user-friendly interface with tabs or navigation links that allow you to switch between different sections such as temperature trends, pressure levels, tank monitoring, and flow rates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What should I do if I encounter an issue with the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you encounter any issues, such as data not updating or system errors, please contact the technical support team or refer to the troubleshooting section in the user manual.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I export data from the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The dashboard typically provides an export function, allowing you to download data in formats such as CSV or Excel. Look for an export or download button on the interface.          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
