/* eslint-disable no-restricted-globals */
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import DownArrowChv from "@/ui/Icons/downArrowChv";
import UpArrowChv from "@/ui/Icons/upArrowChv";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

interface InputFieldNumberProps {
  placeholder?: string;
  register: any;
}

const InputFieldNumberStyled = styled(Box)`
  .type_ans_numbrs {
    position: relative;
    .MuiFormControl-root {
      .MuiInputBase-root {
        padding-right: 30px;
        .MuiInputBase-input {
          padding-bottom: 11px;
          appearance: textfield;
          -ms-appearance: textfield;
          -webkit-appearance: textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }
    .arrow_typer_ind {
      display: table;
      position: absolute;
      right: 0;
      top: 5px;
      .MuiButtonBase-root {
        min-width: inherit;
        width: auto;
        height: auto;
        padding: 0;
        display: table;
        min-height: inherit;
        line-height: 0;
        margin-bottom: 4px;
        background: transparent !important;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

function InputFieldNumber({ placeholder }: InputFieldNumberProps) {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (event: any) => {
    // Handle change of input value
    const newValue = event.target.value as any;
    setValue(newValue === "" ? 0 : parseFloat(newValue));
  };
  const handleIncrement = () => {
    // Handle increment button click
    setValue((prevValue) =>
      prevValue !== null ? parseFloat((prevValue + 0.1).toFixed(2)) : 0
    );
  };

  const handleDecrement = () => {
    // Handle decrement button click
    setValue((prevValue) =>
      prevValue !== null ? parseFloat((prevValue - 0.1).toFixed(2)) : 0
    );
  };

  return (
    <InputFieldNumberStyled>
      <Box className="type_ans_numbrs">
        <InputFieldCommon
          placeholder={placeholder}
          // value={value}
          onChange={handleChange}
          type="number"
        />
        <Box className="arrow_typer_ind">
          <Button
            className="arrow_typer_incr arrowcmn"
            onClick={handleIncrement}
          >
            <UpArrowChv />
          </Button>
          <Button
            className="arrow_typer_dcr arrowdwn"
            onClick={handleDecrement}
          >
            <DownArrowChv />
          </Button>
        </Box>
      </Box>
    </InputFieldNumberStyled>
  );
}

export default InputFieldNumber;
