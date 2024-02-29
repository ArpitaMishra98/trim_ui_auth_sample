/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

function PaymentStepWrapperOne({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs after_paystep1" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="payment_box_wraprs stepwrapsOne">
              <Box className="payment_successMsg">
                <figure className="payment_mainImg">
                  <Image
                    src={assest?.payment_graphics}
                    width={195}
                    height={178}
                    alt=""
                  />
                </figure>
                <Box className="payment_scuccessmgBtm">
                  <Box className="cmn_consult_headbt">
                    <Typography variant="h2" className="cmn_head">
                      <Typography variant="caption">Thanks for </Typography>your
                      payments
                    </Typography>
                    <Box className="cmn_consult_pargrphs">
                      <Typography variant="body1">
                        We have sent a receipt to{" "}
                        <Link href="mailto:loremexample@gmail.com">
                          loremexample@gmail.com
                        </Link>
                      </Typography>
                      <Typography variant="body1">
                        You just need to answer a few more questions before your
                        call with a practitioner
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

export default PaymentStepWrapperOne;
