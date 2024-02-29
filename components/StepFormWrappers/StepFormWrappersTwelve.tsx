/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function StepFormWrappersTwelve({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step12" />
        <Box className="consult_support_s step_relative_main">
          <Container fixed>
            <Box className="consult_support_innrs fullwdth">
              <figure className="main_img">
                <Image
                  src={assest?.support_img2}
                  width={197}
                  height={173}
                  alt=""
                />
              </figure>
              <Box className="cmn_consult_headbt">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">Great news! </Typography> our
                  program could work for you
                </Typography>
                <Box className="para_bodysec">
                  <Typography variant="body1">
                    Your answers indicate you could be suitable for the
                    Metabolic Reset Program.
                  </Typography>
                  <Typography variant="body1">
                    Next, see how our program supports you to achieve lasting
                    weight loss.
                  </Typography>
                </Box>
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
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersTwelve;
