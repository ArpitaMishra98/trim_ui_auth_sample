/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { consultantWork2 } from "@/json/mock/consultantWork.mock";
import { successonCard } from "@/json/mock/successonCard.mock";
import { ConsultantWorkCardStyled } from "@/styles/StyledComponents/ConsultantWorkCardStyled";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ConsultantWorkCard from "../ConsultantWorkCard/ConsultantWorkCard";

function StepFormWrappersSixteen({ stepperButton }: any) {
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap btm_zero">
        <Box className="consult_work_steps step_relative_main">
          <Box className="include_thing_top">
            <Container fixed>
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">
                    What's included in the{" "}
                  </Typography>{" "}
                  Metabolic Reset program
                </Typography>
                <Typography variant="body1">
                  Exclusive to patients on our program, benefit from all the
                  support tools you need for sustainable weight loss.
                </Typography>
              </Box>
              <ConsultantWorkCardStyled>
                <Box className="consultant_work_ottrs">
                  {consultantWork2.map((item, index) => (
                    <Box className="consultant_work_cols">
                      <ConsultantWorkCard paraShow key={index} {...item} />
                    </Box>
                  ))}
                </Box>
              </ConsultantWorkCardStyled>
            </Container>
          </Box>

          <Box className="include_thing_btm">
            <Container fixed>
              <Box className="include_thing_btm_wraps">
                <Box className="head_center_tps">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Trim men's </Typography>
                    successon the program
                  </Typography>
                </Box>

                <Box className="successon_program_row">
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 2, sm: 4, md: 6.9 }}
                  >
                    {successonCard.map((item, index) => (
                      <Grid item md={4} xs={12} key={index}>
                        <Box className="averg_body_wtin">
                          <figure className="main_img">
                            <Image
                              src={item?.image}
                              width={73}
                              height={87}
                              alt=""
                            />
                          </figure>
                          <Box className="averg_body_wtin_btm">
                            <Typography variant="h4" className="head_cls">
                              {item?.name}
                            </Typography>
                            <Typography variant="body1">
                              {item?.para}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box className="confirm_payment_bxdv">
                  <Typography variant="h3" className="head_h3">
                    Once you confirm payment for your first order and answer a
                    few medical questions we will schedule a call with your
                    practitioner.
                  </Typography>
                  <Typography variant="body1">
                    If you’re found unsuitable during your consult or decide not
                    to proceed with our program after your practitioner call, we
                    will refund you the amount in full.
                  </Typography>

                  <CustomButtonPrimary
                    type="button"
                    variant="contained"
                    color="primary"
                    className="next_arrow_btns gap_btms_nextar"
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
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersSixteen;
