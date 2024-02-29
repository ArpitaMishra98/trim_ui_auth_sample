/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "../Login";
import Signup from "../Signup";
function StepFormWrappersThree({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  redirected
}: any) {
  // interface loginStepprops extends StepperNextInterface {
  //   redirected?: boolean;
  // }
  // function StepFormWrappersThree({ stepperButton,  }: loginStepprops) {
  const [stepWelcome, UpdateStepWelcome] = useState(0);

  useEffect(() => {
    if (redirected) {
      UpdateStepWelcome(1);
    }
  }, []);

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step3" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            {stepWelcome === 1 ? (
              <Box className="consult_work_steps_wrpsd step1Wrap">
                <Box className="head_center_tps">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Welcome</Typography> back
                  </Typography>
                </Box>

                {/* <Box className="lets_start_nameGrid">
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
                      <InputFieldCommon placeholder="Email" />
                    </Grid>
                    <Grid
                      item
                      md={12}
                      xs={12}
                      className="lets_start_nameGrid_col password_field"
                    >
                      <InputFieldCommon isPassword placeholder="Password" />
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
                      >
                        <Typography variant="caption">
                          Login
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
                      <Box className="forgot_pass">
                        <Typography variant="body1">
                          <Link
                            href="javascript:void(0)"
                            onClick={() => UpdateStepWelcome(2)}
                          >
                            Forgot your Password?
                          </Link>
                        </Typography>
                      </Box>
                      <Box className="already_account_text">
                        <Typography variant="body1">
                          Don’t have an account ?
                          <Link
                            href="javascript:void(0)"
                            onClick={() => UpdateStepWelcome(3)}
                          >
                            Sign Up
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box> */}

                <Login
                  stepWelcome={stepWelcome}
                  UpdateStepWelcome={UpdateStepWelcome}
                />
              </Box>
            ) : stepWelcome === 2 ? (
              <Box className="consult_work_steps_wrpsd step2Wrap">
                <Box className="head_center_tps">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Forgot</Typography> your
                    password?
                  </Typography>
                </Box>

                <Box className="lets_start_nameGrid">
                  <Grid
                    container
                    rowSpacing={3.8}
                    columnSpacing={{ xs: 2, sm: 5, md: 10 }}
                    className="lets_start_nameGrid_row"
                  >
                    <Grid item md={12} xs={12} className="full_ht_inputsecd">
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
                          <InputFieldCommon placeholder="Email" />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      md={12}
                      xs={12}
                      className="lets_start_nameGrid_col custom_login_primary_btns"
                    >
                      <CustomButtonPrimary
                        type="button"
                        variant="contained"
                        color="primary"
                        className="next_arrow_btns"
                      >
                        <Typography variant="caption">
                          Send
                          <i className="next_arr" />
                        </Typography>
                      </CustomButtonPrimary>

                      <Button
                        className="backLogin"
                        onClick={() => UpdateStepWelcome(1)}
                      >
                        Back to login
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ) : stepWelcome === 3 ? (
              // <Box className="consult_work_steps_wrpsd step3Wrap">
              //   <Box className="head_center_tps">
              //     <Typography variant="h2" className="cmn_head">
              //       <Typography variant="caption">Let’s</Typography> get started
              //     </Typography>
              //   </Box>

              //   <Box className="lets_start_nameGrid">
              //     <Grid
              //       container
              //       rowSpacing={3.8}
              //       columnSpacing={{ xs: 2, sm: 5, md: 10 }}
              //       className="lets_start_nameGrid_row"
              //     >
              //       <Grid item md={12} xs={12}>
              //         <Grid
              //           container
              //           rowSpacing={3.8}
              //           columnSpacing={{ xs: 2, sm: 5, md: 10 }}
              //           className="lets_start_nameGrid_row"
              //         >
              //           <Grid
              //             item
              //             md={6}
              //             xs={12}
              //             className="lets_start_nameGrid_col"
              //           >
              //             <InputFieldCommon placeholder="your first name*" />
              //           </Grid>

              //           <Grid
              //             item
              //             md={6}
              //             xs={12}
              //             className="lets_start_nameGrid_col"
              //           >
              //             <InputFieldCommon placeholder="your Last name*" />
              //           </Grid>

              //           <Grid
              //             item
              //             md={12}
              //             xs={12}
              //             className="lets_start_nameGrid_col"
              //           >
              //             <InputFieldCommon placeholder="Email" />
              //           </Grid>

              //           <Grid
              //             item
              //             md={12}
              //             xs={12}
              //             className="lets_start_nameGrid_col password_field"
              //           >
              //             <InputFieldCommon
              //               isPassword
              //               placeholder="Create Password"
              //             />
              //           </Grid>

              //           <Grid
              //             item
              //             md={12}
              //             xs={12}
              //             className="lets_start_nameGrid_col password_field"
              //           >
              //             <InputFieldCommon
              //               isPassword
              //               placeholder="Confirm Password"
              //             />
              //           </Grid>

              //           <Grid
              //             item
              //             md={12}
              //             xs={12}
              //             className="lets_start_nameGrid_col password_field"
              //           >
              //             <Box className="already_account_text">
              //               <Typography variant="body1">
              //                 By clicking below agree to our{" "}
              //                 <Link href="javascript:void(0)">
              //                   Terms & Conditions
              //                 </Link>{" "}
              //                 and{" "}
              //                 <Link href="javascript:void(0)">
              //                   Privacy Policy.
              //                 </Link>
              //               </Typography>
              //             </Box>
              //           </Grid>
              //         </Grid>
              //       </Grid>

              //       <Grid
              //         item
              //         md={12}
              //         xs={12}
              //         className="lets_start_nameGrid_col custom_login_primary_btns"
              //       >
              //         <CustomButtonPrimary
              //           type="button"
              //           variant="contained"
              //           color="primary"
              //           className="next_arrow_btns"
              //         >
              //           <Typography variant="caption">
              //             Sign Up
              //             <i className="next_arr" />
              //           </Typography>
              //         </CustomButtonPrimary>

              //         <Box className="already_account_text gaptp">
              //           <Typography variant="body1">
              //             Already have an account ?
              //             <Link
              //               href="javascript:void(0)"
              //               onClick={() => UpdateStepWelcome(1)}
              //             >
              //               Log in here
              //             </Link>
              //           </Typography>
              //         </Box>
              //       </Grid>
              //     </Grid>
              //   </Box>
              // </Box>
              <Signup
                stepWelcome={stepWelcome}
                UpdateStepWelcome={UpdateStepWelcome}
              />
            ) : (
              <Box className="consult_work_steps_wrpsd">
                <Box className="head_center_tps center">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Let's start with</Typography>{" "}
                    your name
                  </Typography>
                  <Typography variant="body1">
                    We require this to generate an electronic prescription if
                    your practitioner prescribes a treatment.
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
                      md={6}
                      xs={12}
                      className="lets_start_nameGrid_col"
                    >
                      <InputFieldCommon
                        placeholder="your first name*"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                      />
                      <p style={{ color: "red" }}>
                        {errors.firstName?.message}
                      </p>
                    </Grid>

                    <Grid
                      item
                      md={6}
                      xs={12}
                      className="lets_start_nameGrid_col"
                    >
                      <InputFieldCommon
                        placeholder="your Last name*"
                        {...register("lastName")}
                      />
                      <p style={{ color: "red" }}>{errors.lastName?.message}</p>
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
                          Already have an account ?
                          <Link
                            href="/auth/login"
                            // onClick={() => UpdateStepWelcome(1)}
                          >
                            log in here
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersThree;
