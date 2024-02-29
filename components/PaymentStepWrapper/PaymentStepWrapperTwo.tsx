/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function PaymentStepWrapperTwo({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs after_paystep2" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="payment_box_wraprs stepwrapsOne">
              <Box className="wight_loss_sectns">
                <figure className="main_imgs">
                  <Image
                    src={assest?.payment_graphics2}
                    width={202}
                    height={190}
                    alt=""
                  />
                </figure>
                <Box className="wight_loss_sectns_btms">
                  <Box className="cmn_consult_headbt">
                    <Typography variant="h2" className="cmn_head">
                      <Typography variant="caption">
                        {" "}
                        Weight loss is{" "}
                      </Typography>
                      more than just numbers
                    </Typography>
                    <Box className="para_grphBtmd">
                      <Typography variant="body1">
                        Next, we're going to ask some questions about your
                        physical and mental health.
                      </Typography>
                    </Box>

                    <Box className="consultant_pmBtns">
                      <CustomButtonPrimary
                        type="button"
                        variant="contained"
                        color="primary"
                        className="next_arrow_btns"
                        onClick={stepperButton}
                      >
                        <Typography variant="caption">
                          Next
                          <i className="next_arr" />
                        </Typography>
                      </CustomButtonPrimary>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default PaymentStepWrapperTwo;
