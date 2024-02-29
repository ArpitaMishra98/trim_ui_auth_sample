/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function PaymentStepWrapperFour({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs after_paystep4" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="hetmsrd_wraps paystepStepFour">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    {" "}
                    Please list the medications, over the counter medicines, or
                  </Typography>{" "}
                  recreations drugs you are using*
                </Typography>
              </Box>

              <Box className="type_answer_form">
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item md={12} xs={12} className="label_input_yrds">
                    <InputFieldCommon placeholder="Type your answer here..." />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                      className="next_arrow_btns no_gap_topdiv"
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

export default PaymentStepWrapperFour;
