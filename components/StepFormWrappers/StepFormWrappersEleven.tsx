/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function StepFormWrappersEleven({ stepperButton, hookData }: any) {
  const checkbokdata = localStorage.getItem("checkboxeItemList");
  const [reviewStep, UpdateReviewStep] = useState(0);
  const incrReview = () => {
    UpdateReviewStep(reviewStep + 1);
  };

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            {reviewStep === 1 ? (
              <Box className="yrsd_answer_wrapper">
                <Box className="head_center_tps">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Your </Typography>answers
                  </Typography>
                </Box>

                <Box className="yrsd_answer_wrapper_frm">
                  <Grid
                    container
                    rowSpacing={4.4}
                    justifyContent="center"
                    columnSpacing={{ xs: 2, md: 3.1 }}
                  >
                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="25/02/2000"
                        isLabel
                        isLabelValue="What is your date of birth?"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="181 cm"
                        isLabel
                        isLabelValue="What is your height (in cms)?"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="65 kg"
                        isLabel
                        isLabelValue="What is your weight (kg)"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Male"
                        isLabel
                        isLabelValue="What was your sex at birth?"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Latino/Hispanic, African"
                        isLabel
                        isLabelValue="What is your ethnic background?"
                      />
                    </Grid>

                    <Grid item md={12} xs={12} className="cnansweryrds">
                      <Box className="confirm_answer_btms">
                        <List>
                          <ListItem>
                            <CustomButtonPrimary
                              type="button"
                              variant="contained"
                              color="primary"
                              className="next_arrow_btns"
                              onClick={() => UpdateReviewStep(0)}
                            >
                              <Typography variant="caption">
                                Go Back
                                <i className="next_arr" />
                              </Typography>
                            </CustomButtonPrimary>
                          </ListItem>

                          <ListItem>
                            <CustomButtonPrimary
                              type="button"
                              variant="outlined"
                              color="info"
                              className="review_btns"
                            >
                              <Typography variant="caption">
                                Restart Quiz
                              </Typography>
                            </CustomButtonPrimary>
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ) : (
              <Box className="confirm_answer_wrapper">
                <Box className="head_center_tps">
                  <Typography variant="h2" className="cmn_head">
                    <Typography variant="caption">Confirm </Typography>your
                    answers
                  </Typography>
                  <Typography variant="body1">
                    It’s important your answers are accurate, as your
                    practitioner will use them to determine your suitability.
                  </Typography>
                </Box>

                <Box className="confirm_answer_form">
                  <Box className="confirm_answer_boxs">
                    <Box className="head_sec_cnfrns">
                      <Typography variant="h3" className="sechds">
                        John D
                      </Typography>
                    </Box>

                    <Box className="head_sec_cnfrnsBody">
                      <Grid container spacing={1.8}>
                        <Grid item xs={8}>
                          <List>
                            <ListItem>
                              <strong>Age: </strong>23
                            </ListItem>
                            <ListItem>
                              <strong>Sex at birth: </strong>
                              {hookData?.gender}
                            </ListItem>
                            <ListItem>
                              <strong>Ethnicity: </strong>
                              {hookData?.checkbox
                                ? hookData.checkbox.map(
                                    (item: any, index: number) => (
                                      <div key={item.id}>
                                        <strong>{item}, </strong>
                                      </div>
                                    )
                                  )
                                : null}
                              {/* African, Latino/Hispanic */}
                            </ListItem>
                          </List>
                        </Grid>

                        <Grid item xs={4}>
                          <List>
                            <ListItem>
                              <strong>Height: </strong>100 cm
                            </ListItem>
                            <ListItem>
                              <strong>Weight: </strong>70 kg
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>

                  <Box className="confirm_answer_btms">
                    <List>
                      <ListItem>
                        <CustomButtonPrimary
                          type="button"
                          variant="contained"
                          color="primary"
                          className="next_arrow_btns"
                          onClick={stepperButton}
                        >
                          <Typography variant="caption">
                            Confirm Answer
                            <i className="next_arr" />
                          </Typography>
                        </CustomButtonPrimary>
                      </ListItem>

                      <ListItem>
                        <CustomButtonPrimary
                          type="button"
                          variant="outlined"
                          color="info"
                          className="review_btns"
                          onClick={incrReview}
                        >
                          <Typography variant="caption">Review All</Typography>
                        </CustomButtonPrimary>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersEleven;
