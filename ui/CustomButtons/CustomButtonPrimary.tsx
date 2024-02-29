import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  font-family: "Poppins", sans-serif;
  text-transform: none;
  min-width: 167px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  padding: 15px 30px;
  &.next_arrow_btns {
    .MuiTypography-root {
      color: ${primaryColors?.colorDFF000};
      font-size: 100%;
      font-family: "Poppins", sans-serif;
      .next_arr {
        font-size: 0;
        width: auto;
        height: auto;
        display: inline-block;
        margin-left: 5px;
        margin-top: -1px;
        vertical-align: middle;
        border: solid ${primaryColors?.colorDFF000};
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        &.backbtns {
          transform: rotate(130deg);
          -webkit-transform: rotate(130deg);
          margin-left: 0;
          margin-right: 5px;
        }
      }
    }
    &:hover {
      .MuiTypography-root {
        color: ${primaryColors?.color03202E};
        background: transparent;
        .next_arr {
          border-color: ${primaryColors?.color03202E};
        }
      }
    }
  }

  &.review_btns {
    border-radius: 0;
    .MuiTypography-root {
      color: ${primaryColors?.color03202E};
      font-size: 100%;
      font-family: "Poppins", sans-serif;
      .next_arr {
        font-size: 0;
        width: auto;
        height: auto;
        display: inline-block;
        margin-left: 5px;
        margin-top: -1px;
        vertical-align: middle;
        border: solid ${primaryColors?.color03202E};
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
    &:hover {
      .MuiTypography-root {
        color: ${primaryColors?.colorDFF000};
        background: transparent;
        .next_arr {
          border-color: ${primaryColors?.colorDFF000};
        }
      }
    }
  }
  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.black};
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: ${primaryColors?.white};
  }
  span {
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* img {
    width: 24px;
  } */
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
