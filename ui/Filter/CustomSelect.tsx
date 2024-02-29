/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import React, { useEffect } from "react";
import { InputFieldWrapper } from "../CommonInput/CommonInput";

const CustomSelectWrapper = styled(Select)`
  &.MuiOutlinedInput-root {
    height: auto;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid ${primaryColors?.black};
    border-radius: 0;
    font-size: 15px;
    line-height: 1.1;
    font-family: "roslindaletext_regular";

    &.roundColored_inout {
      border-color: ${primaryColors.primary1};
      border-radius: 99px;

      > svg {
        margin-right: 10px;
        min-width: 20px;

        &.MuiSvgIcon-root {
          margin-right: 0;
        }
      }
    }
    .MuiSelect-select {
      color: ${primaryColors?.color3B3B3B};
      border: 0;
      padding: 0;
      font-family: "roslindaletext_regular";
      text-transform: capitalize;
      padding-bottom: 7px;
      white-space: inherit;
      background: url("/assets/images/down_Arrow.svg") no-repeat right 6px;
      background-size: 17px;
      padding-right: 30px;
      @media (max-width: 767px) {
        font-size: 12px;
        background-position: right 3px;
        background-size: 15px;
      }
    }
    .MuiSelect-nativeInput {
      display: none;
      & + .MuiSvgIcon-root {
        display: none;
      }
    }

    fieldset {
      display: none;
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
      right: 25px;
    }
  }
  .menu_item {
    &.MuiMenuItem-root {
      color: ${primaryColors.black};
    }
    &.continent_label {
      background: red;
    }
  }
`;
interface CustomSelectProps extends SelectProps {
  children: React.ReactNode;
  initialValue: string | JSX.Element;
  classNameEnable?: boolean;
  customPropsEnable?: boolean;
  customProps?: any;
  valueOnSlect?: string;
  isLabel?: boolean;
  isLabelValue?: string;
}
const CustomSelect = (props: CustomSelectProps) => {
  const MenuProps = {
    PaperProps: {
      sx: {
        width: "auto",
        // backgroundColor: "#000",
        boxShadow: "none",
        borderRadius: "0px",
        filter: "none",
        "& .MuiList-root": {
          maxHeight: "300px",
          overflow: "auto"
        }
      }
    }
  };

  const MenuPropsFormProfile = {
    PaperProps: {
      sx: {
        width: "auto",
        boxShadow: "none",
        filter: "none",

        "& .MuiList-root": {
          height: "150px",
          overflowY: "auto"
        }
      }
    }
  };

  const [value, setValue] = React.useState<any>("");

  const [emptyValue, setEmptyValue] = React.useState<any>(true);

  const handleChange = (event: SelectChangeEvent | any) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setEmptyValue(props?.valueOnSlect);
  }, [props?.valueOnSlect]);

  return (
    <InputFieldWrapper>
      {props?.isLabel && (
        <InputLabel className="label_top_input">
          {props?.isLabelValue}
        </InputLabel>
      )}
      <CustomSelectWrapper
        displayEmpty
        input={<OutlinedInput />}
        IconComponent={props?.IconComponent}
        MenuProps={
          props?.classNameEnable
            ? MenuPropsFormProfile
            : props?.customPropsEnable
            ? props?.customProps
            : MenuProps
        }
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
        value={value}
        className={!emptyValue ? "value_empty" : ""}
        {...props}
      >
        <MenuItem value="" sx={{ display: "none" }}>
          {props?.initialValue}
        </MenuItem>
        {/* {dataset.map((name) => (
          <MenuItem key={name} value={name} className="menu_item">
            {name}
          </MenuItem>
        ))} */}
        {props.children}
      </CustomSelectWrapper>
    </InputFieldWrapper>
  );
};

export default CustomSelect;
