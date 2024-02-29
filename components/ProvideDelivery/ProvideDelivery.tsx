/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { selectListState } from "@/json/mock/commonAllSelect.mock";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CustomSelect from "@/ui/Filter/CustomSelect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

function ProvideDelivery() {
  return (
    <StepFormWrappersStyled>
      <Box className="wrap_cmn_payment_mth">
        <Container fixed>
          <Box className="wrap_cmn_capSteps">
            <Box className="proivide_delivery_wrapper">
              <Box className="provide_delivery_box">
                <Typography variant="h3" className="provd_heads">
                  Provide your delivery address
                </Typography>

                <Box className="yrsd_answer_wrapper_frm">
                  <Grid
                    container
                    rowSpacing={{ xs: 4, md: 4.4 }}
                    justifyContent="center"
                    columnSpacing={{ xs: 2, md: 3.1 }}
                  >
                    <Grid item md={12} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your Address here..."
                        isLabel
                        isLabelValue="Address Line 1"
                      />
                    </Grid>

                    <Grid item md={12} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your Address here..."
                        isLabel
                        isLabelValue="Address Line 2"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your town or city here..."
                        isLabel
                        isLabelValue="Town or City"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <CustomSelect
                        MenuProps={{
                          classes: { paper: "menu_props_dropdncm" }
                        }}
                        isLabel
                        isLabelValue="State"
                        initialValue=""
                      >
                        {selectListState?.map((items, index) => (
                          <MenuItem key={index} value={items.selctItemList}>
                            {items.selctItemList}
                          </MenuItem>
                        ))}
                      </CustomSelect>
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your postcode here...."
                        isLabel
                        isLabelValue="Postcode"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Australia"
                        isLabel
                        isLabelValue="Country"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your company name here..."
                        isLabel
                        isLabelValue="Company"
                      />
                    </Grid>

                    <Grid item md={6} xs={12} className="label_input_yrds">
                      <InputFieldCommon
                        placeholder="Type your building name here..."
                        isLabel
                        isLabelValue="Building"
                      />
                    </Grid>

                    <Grid item md={12} xs={12} className="label_input_yrds">
                      <Box className="questn_form">
                        <Typography variant="h3" className="qtn_formcls">
                          Where should the driver leave your order?
                        </Typography>
                        <Typography variant="body1">
                          Our carrier can only deliver to residential addresses
                          and easily-located business addresses. They can't
                          deliver to post offices, PO boxes, or parcel lockers
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={12} xs={12} className="label_input_yrds">
                      <CustomSelect
                        MenuProps={{
                          classes: { paper: "menu_props_dropdncm" }
                        }}
                        isLabel
                        isLabelValue="Delivery Option"
                        initialValue="Leave in a safe place"
                      >
                        {selectListState?.map((items, index) => (
                          <MenuItem key={index} value={items.selctItemList}>
                            {items.selctItemList}
                          </MenuItem>
                        ))}
                      </CustomSelect>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Box className="provide_delivery_box">
                <Typography variant="h3" className="provd_heads">
                  Choose a payment method
                </Typography>

                <Box className="discount_code_sec">
                  <Typography variant="h4" className="dicountHd">
                    Discount code
                  </Typography>
                  <Box className="discount_code_sec_innr">
                    <Box className="boxes_input_lft">
                      <InputFieldCommon />
                    </Box>
                    <CustomButtonPrimary
                      type="button"
                      variant="outlined"
                      color="info"
                      className="apply_btns"
                    >
                      Apply
                    </CustomButtonPrimary>
                  </Box>
                </Box>

                <Box className="provide_cards_frm">
                  <Box className="provide_cards_frm_top">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <Box className="provide_cards_frm_top_labels">
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Debit / Credit Card"
                        />
                        <Box className="card_Details_outers">
                          <Box className="card_Details_innerss">
                            <Box className="custom_Card_num">
                              <i className="card_icon">
                                <Image
                                  src={assest?.card_box}
                                  width={29}
                                  height={19}
                                  alt=""
                                />
                              </i>
                              <Box className="main_input_sums">
                                <InputFieldCommon placeholder="Card number" />
                              </Box>
                              <Box className="cvv_mnth">
                                <Box className="mn_sec">
                                  <InputFieldCommon
                                    className="mnth_year"
                                    placeholder="MM / YY"
                                  />
                                </Box>

                                <Box className="mn_sec">
                                  <InputFieldCommon
                                    className="cvv"
                                    placeholder="CVC"
                                  />
                                </Box>
                              </Box>
                            </Box>
                          </Box>

                          <Box className="card_Details_innerss">
                            {/* <Box className="visa_sec_method">
                              <Box className="visa_sec_method_nxtd">
                                <i className="visa_cardsec">
                                  <Image
                                    src={assest?.visa_card1}
                                    width={110}
                                    height={34}
                                    alt=""
                                  />
                                </i>
                                <i className="visa_cardsecrt">
                                  <Image
                                    src={assest?.visa_card2}
                                    width={38}
                                    height={32}
                                    alt=""
                                  />
                                </i>
                              </Box>
                              <InputFieldCommon placeholder="" />
                            </Box> */}
                            <Box className="visa_method_paymnt">
                              <Box className="visa_method_paymnt_lf">
                                <Image
                                  src={assest?.visa_card1}
                                  width={110}
                                  height={34}
                                  alt=""
                                />
                              </Box>

                              <Box className="visa_method_paymnt_rt">
                                <Image
                                  src={assest?.visa_card2}
                                  width={38}
                                  height={32}
                                  alt=""
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box className="provide_cards_frm_top_labels">
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label={
                            <Box className="another_payment_zip">
                              <Box className="logo_pt_lft">
                                <i className="mn_icon">
                                  <Image
                                    src={assest?.zip_logo}
                                    width={39}
                                    height={24}
                                    alt=""
                                  />
                                </i>
                                <Link href="/" className="lern_mr">
                                  learn more
                                </Link>
                              </Box>

                              <Box className="logo_pt_rtt">
                                <Typography variant="body1">
                                  from $10 a week
                                </Typography>
                              </Box>
                            </Box>
                          }
                        />
                      </Box>
                    </RadioGroup>
                  </Box>
                  <Box className="provide_cards_frm_btns">
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                      className="next_arrow_btns centerbtns"
                    >
                      <Typography variant="caption">
                        Confirm $375 payment
                      </Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>

                <Box className="found_suitable_ulsec">
                  <List>
                    <ListItem>
                      If you’re found unsuitable during your consult or decide
                      not to proceed with our program after your practitioner
                      call, we will refund you the amount in full
                    </ListItem>
                    <ListItem>30-day money back guarantee</ListItem>
                    <ListItem>Free cancellation anytime</ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default ProvideDelivery;
