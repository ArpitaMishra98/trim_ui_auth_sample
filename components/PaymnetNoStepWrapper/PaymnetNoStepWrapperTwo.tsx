/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import React from "react";
import RadioFieldGender from "../RadioFieldGender/RadioFieldGender";

function PaymnetNoStepWrapperTwo({ stepperButton }: any) {
  const [value, setValue] = React.useState("No");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box
              className="brthplace_whr"
              sx={{
                maxWidth: "1139px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    Have you previously received a diagnosis for conditions like
                    ulcerative colitis, Crohn’s disease, or diabetic
                    gastroparesis?
                  </Typography>{" "}
                  Or, have there been any historical issues with your pancreas?*
                </Typography>
              </Box>

              <Box className="birth_place_forms">
                <Box className="birth_place_frmcol after_paymnts">
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label={
                        <RadioFieldGender content="Yes" imageValues image="A" />
                      }
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label={
                        <RadioFieldGender content="No" imageValues image="B" />
                      }
                    />
                  </RadioGroup>
                </Box>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns gap_btms_nextarextr"
                  onClick={stepperButton}
                >
                  <Typography variant="caption">
                    Next
                    <i className="next_arr" />
                  </Typography>
                </CustomButtonPrimary>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default PaymnetNoStepWrapperTwo;
