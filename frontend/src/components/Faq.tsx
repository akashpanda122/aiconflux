import { useState, SyntheticEvent } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CaretDown from "../assets/caret-down.svg";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.40)",
  padding: "12px 8px",
  background: "rgba(255, 255, 255, 0.08)",
  boxShadow:
    "0px 0px 0px 1px #2D2641, 0px 0px 4px 2px rgba(168, 128, 255, 0.10), 0px 0px 4px 4px rgba(168, 128, 255, 0.10) inset",
  "&:not(:last-child)": {
    marginBottom: "24px",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<img src={CaretDown} alt="caret" />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginRight: theme.spacing(1),
  },
  "& p": {
    fontSize: "20px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  border: 0,
  padding: "0 32px 0 16px",
  margin: "8px 0",
  textAlign: "left",
}));

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="mt-12 max-w-[70%] mx-auto">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p>What is AIConflux?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            It aims to revolutionize the digital art landscape 
            by combining the popularity of NFTs with the creative 
            power of AI. The project simplifies the process of NFT 
            creation for artists and collectors, leveraging AIs 
            ability to generate unique digital artworks.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p>How do I get started on AIConflux?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <p>What is the main goal of this project?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <p>
            How does this project benefit artists and collectors?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <p>Is there any cost associated with using this platform?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
