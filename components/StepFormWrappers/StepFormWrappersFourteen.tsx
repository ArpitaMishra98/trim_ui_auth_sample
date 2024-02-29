/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import {
  ethnicbackRadio,
  hearAboutRadio
} from "@/json/mock/ethnicbackRadio.mock";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function StepFormWrappersFourteen({ stepperButton }: any) {
  const [hearaboutusItems, setCheckedItems] = useState(
    new Array(ethnicbackRadio.length).fill(false)
  );

  const handleCheckboxChange = (index: any) => {
    console.log("🚀 ~ handleCheckboxChange ~ index:", index);
    const newCheckedItems = [...hearaboutusItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  console.log("🚀 ~ hearaboutusItems:", hearaboutusItems);
  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step14" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="ethnic_bakc_wrappers hear_wrap">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">How did </Typography>you hear
                  about us?
                </Typography>
              </Box>

              <Box className="ethnic_bakc_wrappers_frm">
                <Box
                // className="ethnic_bakc_wrappers_frm_in"
                >
                  <FormGroup>
                    {hearAboutRadio.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={hearaboutusItems[index] || false}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        }
                        label={item?.name}
                      />
                    ))}
                  </FormGroup>
                </Box>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns gap_reducesec"
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

export default StepFormWrappersFourteen;
