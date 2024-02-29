/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function StepFormWrappersFive({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step5" />
        <Box className="consult_support_s step_relative_main">
          <Container fixed>
            <Box className="consult_support_innrs">
              <figure className="main_img">
                <Image
                  src={assest?.support_img1}
                  width={197}
                  height={173}
                  alt=""
                />
              </figure>
              <Box className="cmn_consult_headbt">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">We're here to </Typography>{" "}
                  support you
                </Typography>
                <Typography variant="body1">
                  If you have questions throughout the consult, you can chat
                  with us via the chat button in the corner of your screen.
                </Typography>
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns"
                  onClick={stepperButton}
                  // onClick={handleSubmit(onSubmit)}
                >
                  <Typography variant="caption">
                    Next
                    <i className="next_arr" />
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

export default StepFormWrappersFive;
