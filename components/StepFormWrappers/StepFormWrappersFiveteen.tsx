/* eslint-disable react/jsx-curly-brace-presence */
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

function StepFormWrappersFiveteen({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="crtaccntYrn_wrapper">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">Let's create </Typography>an
                  account and connect with a practitioner
                </Typography>
                <Typography variant="body1">
                  To ensure your information is saved and your practitioner can
                  contact you, create an account.
                </Typography>
              </Box>

              <Box className="yrsd_answer_wrapper_frm">
                <Grid
                  container
                  rowSpacing={4.4}
                  justifyContent="center"
                  columnSpacing={{ xs: 2, md: 3.1 }}
                >
                  <Grid item md={6} xs={12} className="label_input_yrds">
                    <InputFieldCommon
                      placeholder="debra.holt@example.com"
                      isLabel
                      isLabelValue="Email"
                    />
                  </Grid>

                  <Grid item md={6} xs={12} className="label_input_yrds">
                    <InputFieldCommon
                      placeholder="Type your Phone number here..."
                      isLabel
                      isLabelValue="Phone"
                    />
                  </Grid>

                  <Grid item md={6} xs={12} className="label_input_yrds">
                    <InputFieldCommon
                      placeholder="Type your Password here..."
                      isLabel
                      isLabelValue="Password"
                    />
                  </Grid>

                  <Grid item md={6} xs={12} className="label_input_yrds">
                    <InputFieldCommon
                      placeholder="Type your Password here..."
                      isLabel
                      isLabelValue="Confirm Password"
                    />
                  </Grid>

                  <Grid item md={12} xs={12} className="label_input_yrds">
                    <Box className="already_account_text">
                      <Typography variant="body1">
                        By clicking below you confirm you have read and agree to
                        our {""}
                        <Link href="/"> Terms & Conditions</Link> and
                        <Link href="/"> Privacy Policy.</Link>
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item md={12} xs={12} className="cnansweryrds">
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                      className="next_arrow_btns centerbtns"
                      onClick={stepperButton}
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

export default StepFormWrappersFiveteen;
