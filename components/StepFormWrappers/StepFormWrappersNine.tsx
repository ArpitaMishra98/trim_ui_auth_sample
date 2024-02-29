/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import FemaleGroup from "@/ui/Icons/FemaleGroup";
import MaleGroup from "@/ui/Icons/MaleGroup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import RadioFieldGender from "../RadioFieldGender/RadioFieldGender";

function StepFormWrappersNine({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  control,
  setValue
}: any) {
  // const { control, setValue } = useForm();
  const [value, setValueState] = React.useState(
    JSON.parse(localStorage?.getItem("gender") ?? "null") || ""
  );

  useEffect(() => {
    localStorage.setItem("gender", JSON.stringify(value));
  }, [value]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValueState(event.target.value);
    setValue("gender", event.target.value);
  };
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step9 cmn_htFormbl" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="brthplace_whr">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">What was your </Typography>sex
                  at birth?
                </Typography>
              </Box>

              <Box className="birth_place_forms">
                <Box className="birth_place_frmcol">
                  {/* <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={
                        <RadioFieldGender
                          content="Male"
                          image={<MaleGroup />}
                        />
                      }
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={
                        <RadioFieldGender
                          content="Female"
                          image={<FemaleGroup />}
                        />
                      }
                    />
                  </RadioGroup> */}
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      // <RadioGroup
                      //   aria-labelledby="demo-controlled-radio-buttons-group"
                      //   name="controlled-radio-buttons-group"
                      //   value={value}
                      //   onChange={handleChange}
                      //      >
                      //   <FormControlLabel
                      //     value="male"
                      //     control={<Radio {...field} />}
                      //     label="Male"
                      //   />
                      //   <FormControlLabel
                      //     value="female"
                      //     control={<Radio {...field} />}
                      //     label="Female"
                      //   />
                      // </RadioGroup>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label={
                            <RadioFieldGender
                              content="Male"
                              image={<MaleGroup />}
                            />
                          }
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label={
                            <RadioFieldGender
                              content="Female"
                              image={<FemaleGroup />}
                            />
                          }
                        />
                      </RadioGroup>
                    )}
                  />
                </Box>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns gap_btms_nextarextr"
                  // onClick={stepperButton}
                  onClick={handleSubmit(onSubmit)}
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

export default StepFormWrappersNine;
