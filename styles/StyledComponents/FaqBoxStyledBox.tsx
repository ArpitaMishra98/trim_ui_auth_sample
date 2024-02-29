import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const FaqBoxStyledBox = styled(Box)`
  .wrapper_faq_parent {
    background: ${primaryColors?.colorf5f3ed};
    position: relative;
    padding-top: 152px;
    @media (max-width: 767px) {
      padding-top: 50px;
    }
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 173px;
      background: url("/assets/images/shape_before_in.png");
      background-size: 100% 100%;
      z-index: 1;
      @media (max-width: 767px) {
        height: 33px;
      }
    }
    .wrap_cmn_capSteps {
      position: relative;
      z-index: 2;
    }
  }
`;
