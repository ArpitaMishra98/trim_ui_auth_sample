/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { consultDoctorApi } from "@/json/mock/consultDoctorApi.mock";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function StepFormWrappersOne({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  watch
}: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="welcome_consult_sec">
          <Box className="welcome_consultant_tpsd">
            <Container>
              <Box className="wraps_form_stlwrp">
                <Box className="welcome_consult_tops">
                  <Box className="welcome_consult_tops_otrs">
                    {consultDoctorApi.map((item, index) => (
                      <Box className="welcome_consult_tops_inrs" key={index}>
                        <figure className="main_img">
                          <Image
                            src={item?.image}
                            width={140}
                            height={140}
                            alt=""
                          />
                        </figure>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>

          <Box className="welcome_consultant_btmsd">
            <Container>
              <Box className="wraps_form_stlwrp">
                <Box className="welcome_consult_btms">
                  <Box className="cmn_consult_headbt">
                    <Typography variant="h2" className="cmn_head">
                      <Typography variant="caption">Welcome to</Typography> your
                      consult
                    </Typography>
                    <Typography variant="body1">
                      To discover if the Metabolic Reset Program is right for
                      you, we'll start with some questions. All of your
                      responses are kept private and confidential.
                    </Typography>
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
            </Container>
          </Box>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersOne;
