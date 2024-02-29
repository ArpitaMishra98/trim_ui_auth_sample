/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { primaryColors } from "@/themes/_muiPalette";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/system";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import React, { forwardRef } from "react";
import CloseEyeIcon from "../Icons/CloseEyeIcon";
import OpenEyeIcon from "../Icons/OpenEyeIcon";

export const InputFieldWrapper = styled(Box)`
  .label_top_input {
    display: block;
    margin-bottom: 10px;
    white-space: inherit;
  }
`;

const InputWrap = styled(TextField as any)`
  .MuiInputBase-adornedEnd {
    height: auto;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid ${primaryColors?.black};
    border-radius: 0;
    font-size: 15px;
    line-height: 1.1;
    font-family: "roslindaletext_regular";

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.black};
      border: 0;
      padding: 0;
      font-family: "roslindaletext_regular";
      /* text-transform: capitalize; */
      padding-bottom: 7px;
      @media (max-width: 767px) {
        font-size: 12px;
      }
      &::placeholder {
        color: ${primaryColors?.placeholderColor};
        opacity: 1;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      height: 125px !important;
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.errorMain};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
      /* border-color: var(--primaryD3D7DF); */
    }
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
    }
    button {
      background-color: transparent;
      color: var(--textPrimaryColor);
      padding: 0;
      &:focus {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      &:hover {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      img {
        position: static !important;
        transform: inherit !important;
        top: 0;
        left: 0;
        width: 20px;
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  isLabel?: boolean;
  isLabelValue?: string;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  (
    { isPassword = false, adorMentIcon, isLabel, isLabelValue, ...others },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputFieldWrapper>
        {isLabel && (
          <InputLabel className="label_top_input">{isLabelValue}</InputLabel>
        )}
        <InputWrap
          fullWidth
          variant="outlined"
          {...others}
          type={
            isPassword ? (showPassword ? "text" : "password") : others?.type
          }
          InputProps={{
            inputRef: ref,
            endAdornment: isPassword ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                </IconButton>
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {/* <SearchRoundedIcon/> */}
                  {adorMentIcon}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </InputFieldWrapper>
    );
  }
);

export default InputFieldCommon;
