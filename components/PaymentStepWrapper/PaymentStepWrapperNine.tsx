/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function PaymentStepWrapperNine({ stepperButtonBack }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box
              className="brthplace_whr"
              sx={{
                maxWidth: "1071px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    Unfortunately based on your answer you would not be suitable
                    for treatment.
                  </Typography>{" "}
                  We work hard to ensure we on only prescribe the right
                  treatment for the right patient.
                </Typography>
              </Box>

              <Box className="birth_place_forms">
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns no_gap_topdiv"
                  onClick={stepperButtonBack}
                >
                  <Typography variant="caption">
                    <i className="next_arr backbtns" />
                    Back
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

export default PaymentStepWrapperNine;
