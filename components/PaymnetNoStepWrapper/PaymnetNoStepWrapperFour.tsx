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

function PaymnetNoStepWrapperFour({ stepperButton }: any) {
  const [value, setValue] = React.useState("");

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
                maxWidth: "897px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    To the best of your knowledge,
                  </Typography>{" "}
                  how many calories do you consume daily?*
                </Typography>
              </Box>

              <Box className="birth_place_forms">
                <Box className="birth_place_frmcol forlabel_brths">
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="2000"
                      control={<Radio />}
                      label={
                        <RadioFieldGender
                          content="Less than 2000"
                          imageValues
                          image="A"
                        />
                      }
                    />
                    <FormControlLabel
                      value="2000-2500"
                      control={<Radio />}
                      label={
                        <RadioFieldGender
                          content="2000 - 2500"
                          imageValues
                          image="B"
                        />
                      }
                    />
                    <FormControlLabel
                      value="Over-2500"
                      control={<Radio />}
                      label={
                        <RadioFieldGender
                          content="Over 2500"
                          imageValues
                          image="C"
                        />
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

export default PaymnetNoStepWrapperFour;
