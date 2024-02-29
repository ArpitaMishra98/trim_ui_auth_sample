/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { ethnicbackRadio } from "@/json/mock/ethnicbackRadio.mock";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState
} from "react";
import { Controller } from "react-hook-form";

function StepFormWrappersTen({
  stepperButton,
  register,
  errors,
  handleSubmit,
  onSubmit,
  control,
  setValue
}: any) {
  const [checkedItems, setCheckedItems] = useState(
    new Array(ethnicbackRadio.length).fill(false)
  );
  const initialCheckboxItemList =
    JSON.parse(localStorage?.getItem("checkboxeItemList") ?? "null") ||
    ethnicbackRadio;
  const [checkboxeItemList, setCheckboxeItemList] = useState(
    initialCheckboxItemList
  );
  // const [checkboxeItemList, setCheckboxeItemList] = useState(ethnicbackRadio);

  // const handleCheckboxChange = (id: any) => {
  //   const newCheckedItems = checkboxeItemList?.map((item) => {
  //     if (item.id == id) {
  //       return { ...item, status: !item.status };
  //     } else {
  //       return { ...item };
  //     }
  //   });
  //   const checkitems = newCheckedItems
  //     .filter((item) => {
  //       return item.status;
  //     })
  //     .map((i: any) => {
  //       return i.name;
  //     });
  //   setValue("checkbox", checkitems);

  //   setCheckboxeItemList(newCheckedItems);
  // };

  // Update local storage whenever the checkboxeItemList changes
  useEffect(() => {
    localStorage.setItem(
      "checkboxeItemList",
      JSON.stringify(checkboxeItemList)
    );
  }, [checkboxeItemList]);

  const handleCheckboxChange = (id: any) => {
    const newCheckedItems = checkboxeItemList.map(
      (item: { id: any; status: any }) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return { ...item };
        }
      }
    );

    const checkitems = newCheckedItems
      .filter((item: { status: any }) => item.status)
      .map((i: { name: any }) => i.name);

    setValue("checkbox", checkitems);
    setCheckboxeItemList(newCheckedItems);
  };

  return (
    <StepFormWrappersStyled>
      <Box className="consult_wrap_gap shape_backs">
        <Box className="shape_backs_imgs step10" />
        <Box className="consult_work_steps step_relative_main">
          <Container fixed>
            <Box className="ethnic_bakc_wrappers">
              <Box className="head_center_tps">
                <Typography variant="h2" className="cmn_head">
                  <Typography variant="caption">What is </Typography>your ethnic
                  background?
                </Typography>
              </Box>

              <Box className="ethnic_bakc_wrappers_frm">
                <Typography variant="body1" className="choose_applypara">
                  Choose all that apply.
                </Typography>
                <Box className="ethnic_bakc_wrappers_frm_in">
                  <FormGroup>
                    {/* {ethnicbackRadio.map((item: any, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={checkedItems[index] || false}
                            onChange={() => handleCheckboxChange(index)}
                          />
                          }
                        label={item?.name}
                      />
                    ))} */}

                    {checkboxeItemList.map(
                      (
                        item: {
                          status: boolean | undefined;
                          id: any;
                          name:
                            | string
                            | number
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | ReactFragment
                            | ReactPortal
                            | null
                            | undefined;
                        },
                        index: Key | null | undefined
                      ) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Controller
                              name={`checkbox`}
                              control={control}
                              render={({ field }) => (
                                <Checkbox
                                  {...field}
                                  checked={item?.status}
                                  onChange={() =>
                                    handleCheckboxChange(item?.id)
                                  }
                                />
                              )}
                            />
                          }
                          label={item?.name}
                        />
                      )
                    )}
                  </FormGroup>
                </Box>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns ethnic_back_gapst"
                  // onClick={stepperButton}
                  onClick={handleSubmit(onSubmit)}
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

export default StepFormWrappersTen;
function item(
  value: { id: number; name: string; status: boolean },
  index: number,
  array: { id: number; name: string; status: boolean }[]
): unknown {
  throw new Error("Function not implemented.");
}
