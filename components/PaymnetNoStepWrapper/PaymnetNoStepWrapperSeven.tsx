/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function PaymnetNoStepWrapperSeven({ stepperButtonBack }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs after_payNoStep7" />
        <Box className="consult_support_s step_relative_main">
          <Container fixed>
            <Box className="consult_support_innrs contact_supported_NoPay wdthNopaymnt">
              <figure className="main_img">
                <Image
                  src={assest?.thank_you_icon}
                  width={195}
                  height={215}
                  alt=""
                />
              </figure>
              <Box className="cmn_consult_headbt">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">Thanks </Typography> you
                </Typography>
                <Box className="para_headbtSec">
                  <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </Typography>
                  <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </Typography>
                </Box>
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns lg_btninput"
                  onClick={stepperButtonBack}
                >
                  <Typography variant="caption">
                    <i className="next_arr backbtns" />
                    Back to home
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

export default PaymnetNoStepWrapperSeven;
