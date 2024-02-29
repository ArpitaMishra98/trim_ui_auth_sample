/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { consultantWork } from "@/json/mock/consultantWork.mock";
import { ConsultantWorkCardStyled } from "@/styles/StyledComponents/ConsultantWorkCardStyled";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";

function StepFormWrappersTwo({ stepperButton }: any) {
  const [valueName, setvalueName] = useState("");

  // Function to handle item click
  const handleItemClick = (name: any) => {
    // Set the value in localStorage
    localStorage.setItem("valueName", name);
    // Update the state
    setvalueName(name);
  };

  // useEffect to retrieve value from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem("valueName");
    if (storedValue) {
      setvalueName(storedValue);
    }
  }, []); // Empty dependency array ensures useEffect runs only on mount

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs steptwo" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="head_center_tps">
              <Typography variant="h2" className="cmn_head">
                <Typography variant="caption">How your</Typography> consult will
                work
              </Typography>
            </Box>
            <ConsultantWorkCardStyled>
              <Box className="consultant_work_ottrs">
                {consultantWork.map((item, index) => (
                  <Box className="consultant_work_cols">
                    {/* <ConsultantWorkCard key={index} {...item} /> */}
                    <Box
                      className={ valueName === item.name ? "int_screen_mocks selected" : "int_screen_mocks"}
                      onClick={(e) => handleItemClick(item?.name)}
                    >
                      <figure className="main_img">
                        <Image
                          src={item?.image}
                          width={126}
                          height={121}
                          alt=""
                        />
                      </figure>
                      <Box className="int_screen_mocks_rt">
                        <Typography variant="h3" className="mock_head">
                          {item?.name}
                        </Typography>
                        {item?.para ? (
                          ""
                        ) : (
                          <Typography variant="body1">{item?.para}</Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </ConsultantWorkCardStyled>

            <CustomButtonPrimary
              type="button"
              disabled={valueName === ""}
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
          </Container>
        </Box>
      </Box>
    </StepFormWrappersStyled>
  );
}

export default StepFormWrappersTwo;
