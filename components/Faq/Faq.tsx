/* eslint-disable react/no-array-index-key */
import { FaqBoxStyledBox } from "@/styles/StyledComponents/FaqBoxStyledBox";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import DropdownArrow from "@/ui/Icons/DropdownArrow";
import QuestionIcon from "@/ui/Icons/QuestionIcon";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export const FaqSec = styled(Box)`
  padding: 50px 0;
  h2 {
    text-align: center;
    font-family: "roslindaledisplayNarLt";
    margin-bottom: 25px;
  }
  .accordion_sec {
    .MuiAccordionSummary-root {
      @media (max-width: 767px) {
        padding: 0;
      }
    }
    .MuiAccordionSummary-content {
      color: ${primaryColors?.color3B3B3B};
      font-family: "roslindaledisplay_semi_bold";
      font-size: 24px;
      margin: 32px 0;
      @media (max-width: 767px) {
        margin: 26px 0;
      }
      &.Mui-expanded {
        margin: 20px 0;
      }
      @media (max-width: 899px) {
        font-size: 18px;
      }
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }
    .MuiAccordionDetails-root {
      padding: 16px 16px 30px 16px;
      @media (max-width: 767px) {
        padding: 0;
        padding-bottom: 30px;
      }
    }
    .MuiAccordionSummary-expandIconWrapper {
      svg {
        @media (max-width: 767px) {
          width: 21px;
        }
      }
    }
    .MuiPaper-root {
      box-shadow: none;
      border-bottom: 1px solid ${primaryColors?.black};
      background: transparent;
      border-radius: 0;
      &::before {
        display: none;
      }
      @media (max-width: 767px) {
        margin: 0;
      }
    }
  }
  .accordion_btm_sec {
    padding: 50px 60px;
    border-radius: 25px;
    background: ${primaryColors?.white};
    box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
    max-width: 565px;
    margin: 40px auto 0;
    @media (max-width: 767px) {
      justify-content: center;
      background: transparent;
      padding: 0;
      box-shadow: inherit;
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 135px;
    }
    .accor_btm_sec_text {
      flex-basis: calc(100% - 135px);
      padding-left: 50px;
      @media (max-width: 767px) {
        flex-basis: 100%;
        padding-left: 0;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .next_arrow_btns {
        margin: 20px 0 0 0;
        min-width: 219px;
      }
      h4 {
        color: ${primaryColors?.color3B3B3B};
        font-size: 24px;
        font-family: "roslindaledisplay_semi_bold";
        text-transform: capitalize;
        @media (max-width: 767px) {
          font-size: 16px;
        }
      }
    }
  }
`;

interface faqProps extends BoxProps {}

export const accorList = [
  {
    title: "What is your refund policy and cancellation procedure?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
  },
  {
    title: "How does the 30-day money-back guarantee work?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
  },
  {
    title: "Can I claim on private health insurance?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
  },
  {
    title: "How does practitioner consultation work?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
  },
  {
    title: "How does the practitioner determine this program is right for me?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum!"
  }
];

const Faq: React.FC<faqProps & BoxProps> = ({ ...props }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <FaqBoxStyledBox>
      <Box className="wrapper_faq_parent">
        <Container fixed>
          <Box className="wrap_cmn_capSteps">
            <FaqSec {...props}>
              <Typography variant="h2">FAQ’s</Typography>
              <Box className="accordion_sec">
                {accorList?.map((data, index) => (
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<DropdownArrow />}
                      aria-controls={`panel${index + 1}bh-content`}
                      id={`panel${index + 1}bh-header`}
                    >
                      {data?.title}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{data?.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                className="accordion_btm_sec"
              >
                <Typography component="i">
                  <QuestionIcon />
                </Typography>
                <Box className="accor_btm_sec_text">
                  <Typography variant="h4">Still have questions?</Typography>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    className="next_arrow_btns gap_btms_nextar"
                  >
                    <Typography variant="caption">Message us</Typography>
                  </CustomButtonPrimary>
                </Box>
              </Stack>
            </FaqSec>
          </Box>
        </Container>
      </Box>
    </FaqBoxStyledBox>
  );
};

export default Faq;
