/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function StepFormWrappersThirteen({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step13" />
        <Box className="consult_support_s step_relative_main">
          <Container fixed>
            <Box className="consult_support_innrs stepwdths">
              <Box className="cmn_consult_headbt">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    Our partner pharmacies currently have treatments in stock
                    and
                  </Typography>{" "}
                  available for eligible trim patients.
                </Typography>
                <Box className="para_bodysec">
                  <Typography variant="body1">
                    Complete your practitioner consult today to see if you're
                    eligible and start your journey to a healthier you.
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

export default StepFormWrappersThirteen;
