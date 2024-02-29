/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-nested-ternary */
import StepperHeaderLogo from "@/components/StepperHeaderLogo/StepperHeaderLogo";
import WrapperSteps from "@/layout/StepWrapper/StepWrapper";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <WrapperSteps>
      <StepperHeaderLogo backBtnHide>
        <StepFormWrappersStyled>
          <Box className="consult_wrap_gap shape_backs">
            <Box className="shape_backs_imgs after_payNoStep1" />
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
                        Unfortunately based on your answer you would not be
                        suitable for treatment. We work hard to ensure
                      </Typography>{" "}
                      we on only prescribe the right treatment for the right
                      patient.
                    </Typography>
                  </Box>

                  <CustomButtonPrimary
                    type="button"
                    variant="contained"
                    color="primary"
                    className="next_arrow_btns centerbtns"
                  >
                    <Typography variant="caption">
                      <i className="next_arr backbtns" />
                      Back
                    </Typography>
                  </CustomButtonPrimary>
                </Box>
              </Container>
            </Box>
          </Box>
        </StepFormWrappersStyled>
      </StepperHeaderLogo>
    </WrapperSteps>
  );
}
