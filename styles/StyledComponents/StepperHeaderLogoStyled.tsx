import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StepperHeaderLogoStyled = styled(Box)`
  .stepper_back_heads_inr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 52px;
    margin-top: 31px;
    @media (max-width: 767px) {
      min-height: 32px;
      margin-top: 21px;
    }
    .stepper_bakcbg {
      padding: 0;
      margin: 0;
      min-height: inherit;
      font-size: 15px;
      line-height: 1.2;
      color: ${primaryColors?.black};
      background: transparent !important;
      min-width: inherit;
      display: flex;
      align-items: center;
      @media (max-width: 767px) {
        font-size: 12px;
      }
      i {
        margin-right: 13px;
        line-height: 0;
        margin-bottom: -1px;
        @media (max-width: 767px) {
          margin-right: 10px;
          img {
            width: 5px;
          }
        }
      }
      &:hover {
        color: ${primaryColors?.color554545};
      }
    }

    .logosec_step {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      img {
        @media (max-width: 767px) {
          width: 66px;
        }
      }
    }
  }
`;
