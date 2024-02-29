/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function PaymnetNoStepWrapperSix({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box
              className="brthplace_whr"
              sx={{
                maxWidth: "953px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    Our doctor is going to review your file, did you have any
                    questions about semaglutide or is there anything else
                  </Typography>{" "}
                  we could help you with in the meantime?
                </Typography>
              </Box>

              <Box className="type_answer_form center_wrapper_cmns cmn_input_wrapsInner">
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} className="label_input_yrds">
                    <Typography variant="h3" className="hdng_inputheads">
                      This question is optional, press Next to continue.
                    </Typography>

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
                        Submit
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

export default PaymnetNoStepWrapperSix;
