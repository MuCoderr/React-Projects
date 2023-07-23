import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion> */}

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
          animi repellat alias illo dolor veniam ipsa eum facilis explicabo.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LessonAccordion;
