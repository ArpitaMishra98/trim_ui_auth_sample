/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function StepFormWrappersFour({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  watch
}: any) {
  const emaildata = watch("email");
  console.log("🚀 ~ emaildata:", emaildata);

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step4" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="consult_work_steps_wrpsd step4">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">Please enter</Typography> your
                  email?
                </Typography>
                <Typography variant="body1">
                  This is where we'll send information from your practitioner
                  and pharmacy.
                </Typography>
              </Box>

              <Box className="lets_start_nameGrid">
                <Grid
                  container
                  rowSpacing={3.8}
                  columnSpacing={{ xs: 2, sm: 5, md: 10 }}
                  className="lets_start_nameGrid_row"
                >
                  <Grid
                    item
                    md={12}
                    xs={12}
                    className="lets_start_nameGrid_col"
                  >
                    <InputFieldCommon
                      placeholder="your email address"
                      {...register("email")}
                    />
                    {emaildata === "" ? (
                      <p style={{ color: "red" }}>{"Email is required"}</p>
                    ) : (
                      <p style={{ color: "red" }}>{errors.email?.message}</p>
                    )}
                  </Grid>
                  <Grid
                    item
                    md={12}
                    xs={12}
                    className="lets_start_nameGrid_col"
                  >
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                      className="next_arrow_btns gap_btms_nextar"
                      // onClick={stepperButton}
                      disabled={emaildata == ""}
                      onClick={handleSubmit(onSubmit)}
                    >
                      <Typography variant="caption">
                        Next
                        <i className="next_arr" />
                      </Typography>
                    </CustomButtonPrimary>
                  </Grid>

                  <Grid
                    item
                    md={12}
                    xs={12}
                    className="lets_start_nameGrid_col"
                  >
                    <Box className="already_account_text">
                      <Typography variant="body1">
                        Already have an account ?{" "}
                        <Link href="/">Log in here</Link>
                      </Typography>
                    </Box>
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

export default StepFormWrappersFour;
