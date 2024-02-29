/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import DownArrowChv from "@/ui/Icons/downArrowChv";
import UpArrowChv from "@/ui/Icons/upArrowChv";
import { Button, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
const InputFieldNumberStyled = styled(Box)`
  .type_ans_numbrs {
    position: relative;
    .MuiFormControl-root {
      .MuiInputBase-root {
        padding-right: 30px;
        .MuiInputBase-input {
          padding-bottom: 11px;
          appearance: textfield;
          -ms-appearance: textfield;
          -webkit-appearance: textfield;
        }
      }
    }
    .arrow_typer_ind {
      display: table;
      position: absolute;
      right: 0;
      top: 5px;
      .MuiButtonBase-root {
        min-width: inherit;
        width: auto;
        height: auto;
        padding: 0;
        display: table;
        min-height: inherit;
        line-height: 0;
        margin-bottom: 4px;
        background: transparent !important;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

function StepFormWrappersSeven({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  watch
}: any) {
  const heightdata = watch("height");

  const [value, setValue] = useState<string | null>("");

  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle change of input value
    const newValue = event.target.value;

    // Check if the input is a valid number and greater than or equal to 0
    const isValidHeight =
      /^[0-9]+(\.[0-9]{1,2})?$/.test(newValue) && parseFloat(newValue) >= 0;

    if (isValidHeight) {
      setValue(newValue);
      // Store the valid value in localStorage
      localStorage.setItem("storedValue", newValue);
    } else {
      // Clear the value and localStorage if the input is not valid
      setValue("");
      localStorage.removeItem("storedValue");
    }
  };

  // useEffect to retrieve value from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem("storedValue");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []); // Empty dependency array ensures useEffect runs only on mount

  const handleIncrement = () => {
    // Handle increment button click
    setValue((prevValue: string | null) =>
      prevValue !== null ? (parseFloat(prevValue) + 0.1).toFixed(2) : "0"
    );
  };

  const handleDecrement = () => {
    // Handle decrement button click
    setValue((prevValue: string | null) =>
      prevValue !== null && parseFloat(prevValue) > 0
        ? (parseFloat(prevValue) - 0.1).toFixed(2)
        : "0"
    );
  };

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step7 cmn_htFormbl" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="hetmsrd_wraps">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">What’s</Typography> your height
                  (in cms)?
                </Typography>
                <Typography variant="body1">
                  It’s important this is as accurate as possible.
                </Typography>
              </Box>

              <Box className="type_answer_form">
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    {/* <InputFieldNumber
                      placeholder="Type your answer here..."
                      // {...register("height")}
                      register={register}
                      // heightdata={heightdata}
                    /> */}

                    <InputFieldNumberStyled>
                      <Box className="type_ans_numbrs">
                        <InputFieldCommon
                          value={value}
                          onChange={handleChange}
                          type="number"
                        />
                        <Box className="arrow_typer_ind">
                          <Button
                            className="arrow_typer_incr arrowcmn"
                            onClick={handleIncrement}
                          >
                            <UpArrowChv />
                          </Button>
                          <Button
                            className="arrow_typer_dcr arrowdwn"
                            onClick={handleDecrement}
                          >
                            <DownArrowChv />
                          </Button>
                        </Box>
                      </Box>
                    </InputFieldNumberStyled>
                  </Grid>
                  {/* {value === null || value === " " ? (
                    <p style={{ color: "red" }}>
                      {"height(in cms) is required"}
                    </p>
                  ) : (
                    ""
                  )} */}

                  {/* Display validation error message */}
                  {value === null ||
                  value === undefined ||
                  value.trim() === "" ? (
                    <p style={{ color: "red" }}>Height (in cms) is required</p>
                  ) : !/^\d+(\.\d{1,2})?$/.test(value) ? (
                    <p style={{ color: "red" }}>
                      Please enter a valid Height (in cms)
                    </p>
                  ) : (
                    ""
                  )}
                  <Grid item xs={12}>
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                      className="next_arrow_btns no_gap_topdiv"
                      onClick={stepperButton}
                      disabled={value === null || value.trim() === ""}
                    >
                      <Typography variant="caption">
                        Next
                        <i className="next_arr" />
                      </Typography>
                    </CustomButtonPrimary>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersSeven;
