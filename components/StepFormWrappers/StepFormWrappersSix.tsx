/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function StepFormWrappersSix({
  stepperButton,
  register,
  errors,
  // handleSubmit,
  onSubmit,
  watch,
  updateSet,
  set
}: any) {
  console.log("🚀 ~ seasdasdt:", set);

  const storedMonth = localStorage.getItem("month");
  const storedYear = localStorage.getItem("year");
  const storedDay = localStorage.getItem("day");

  const storedDOB = {
    month: storedMonth ? JSON.parse(storedMonth) : "",
    year: storedYear ? JSON.parse(storedYear) : "",
    day: storedDay ? JSON.parse(storedDay) : ""
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setDOB((prevDOB) => ({
      ...prevDOB,
      [name]: value
    }));
  };
  const [dob, setDOB] = useState(storedDOB);
  const isValidMonth = (month: string) => {
    const monthNumber = parseInt(month, 10);
    return !isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12;
  };

  const isValidDay = (day: string, month: any, year: any) => {
    const dayNumber = parseInt(day, 10);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return !isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= lastDayOfMonth;
  };

  const isValidYear = (year: string) => {
    const yearNumber = parseInt(year, 10);
    return (
      !isNaN(yearNumber) && yearNumber >= 1800 && yearNumber <= 400000
      // new Date().getFullYear()
    );
  };

  const isValidDateOfBirth = () => {
    const { month, day, year } = dob;
    return (
      isValidMonth(month) && isValidDay(day, month, year) && isValidYear(year)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidDateOfBirth()) {
      console.log("Date of Birth is valid!");

      // Your further logic here

      // Update state
      updateSet((prevSet: number) => prevSet + 1);

      // Store data in localStorage

      localStorage.setItem("month", JSON.stringify(dob?.month));
      localStorage.setItem("year", JSON.stringify(dob?.year));
      localStorage.setItem("day", JSON.stringify(dob?.day));
      // Your further logic here
    } else {
      console.log("Invalid Date of Birth");
    }
  };

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step6 cmn_htFormbl" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="data_birth_wraps">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">What is</Typography> your date
                  of birth?
                </Typography>
                <Typography variant="body1">
                  Please enter your date of birth as it appears on your ID.
                </Typography>
              </Box>

              <Box className="data_birth_forms">
                <Box className="date_birth_grids">
                  <Box className="date_birth_grids_col">
                    <InputFieldCommon
                      type="text"
                      name="month"
                      value={dob.month}
                      onChange={handleChange}
                      placeholder="MM"
                    />
                    {dob.month === "" ? (
                      <p style={{ color: "red" }}> Month is required</p>
                    ) : isValidMonth(dob.month) ? (
                      ""
                    ) : (
                      "Invalid month"
                    )}
                  </Box>
                  <Box className="date_birth_grids_col">
                    <InputFieldCommon
                      type="text"
                      name="day"
                      value={dob.day}
                      onChange={handleChange}
                      placeholder="DD"
                    />
                    {/* <p style={{ color: "red" }}>{errors.day?.message}</p> */}
                    {/* {isValidDay(dob.day, dob.month, dob.year)
                      ? ""
                      : "Invalid day"} */}
                    {dob.day === "" ? (
                      <p style={{ color: "red" }}>day is required</p>
                    ) : isValidDay(dob.day, dob.month, dob.year) ? (
                      ""
                    ) : (
                      "Invalid day"
                    )}
                  </Box>

                  <Box className="date_birth_grids_col">
                    <InputFieldCommon
                      type="text"
                      name="year"
                      value={dob.year}
                      onChange={handleChange}
                      placeholder="YYYY"
                    />
                    {/* <p style={{ color: "red" }}>{errors.year?.message}</p> */}
                    {/* {dob.year && isValidYear(dob.year) ? "" : "Invalid year"} */}
                    {dob.year === "" ? (
                      <p style={{ color: "red" }}>Year is required</p>
                    ) : isValidYear(dob.year) ? (
                      ""
                    ) : (
                      "Invalid year"
                    )}
                  </Box>
                </Box>

                <CustomButtonPrimary
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns gap_btms_nextar"
                  // onClick={stepperButton}
                  onClick={handleSubmit}
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

export default StepFormWrappersSix;

{
  /* <form onSubmit={handleSubmit}>
                <Box className="data_birth_forms">
                  <Box className="date_birth_grids">
                    <Box className="date_birth_grids_col">
                      <InputFieldCommon
                        placeholder="MM"
                        isLabel
                        isLabelValue="Month"
                        value={dob.month}
                        onChange={handleChange}
                        // {...register("month")}
                      />

                      <p style={{ color: "red" }}>{errors.month?.message}</p>
                    </Box>
                    <Box className="date_birth_grids_col">
                      <InputFieldCommon
                        type="text"
                        placeholder="DD"
                        isLabel
                        isLabelValue="Day"
                        value={dob.day}
                        onChange={handleChange}
                        // {...register("day")}
                      />
                      <p style={{ color: "red" }}>{errors.day?.message}</p>
                    </Box>

                    <Box className="date_birth_grids_col">
                      <InputFieldCommon
                        type="text"
                        placeholder="YYYY"
                        isLabel
                        isLabelValue="Year"
                        value={dob.year}
                        onChange={handleChange}
                        // {...register("year")}
                      />{" "}
                      <p style={{ color: "red" }}>{errors.year?.message}</p>
                    </Box>
                  </Box>
                  <Box className="date_birth_grids_col">
                    <InputFieldCommon
                      placeholder="YYYY"
                      isLabel
                      isLabelValue="Year"
                    />
                  </Box>
                </Box>

                  <CustomButtonPrimary
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={monthdata || daydata || yeardata === undefined}
                    className="next_arrow_btns gap_btms_nextar"
                    // onClick={stepperButton}
                    // onChange={handleSubmit(onSubmit)}
                  >
                    <Typography variant="caption">
                      Next
                      <i className="next_arr" />
                    </Typography>
                  </CustomButtonPrimary>
                </Box>
              </form> */
}
