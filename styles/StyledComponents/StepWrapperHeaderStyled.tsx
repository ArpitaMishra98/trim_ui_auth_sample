import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StepWrapperHeaderStyled = styled(Box)`
  .header_follow_top {
    background: ${primaryColors?.colorDFF000};
    padding: 6px 0;
  }
  .header_followerin {
    display: flex;
    align-items: center;
    justify-content: center;
    .flw_btnhead {
      font-size: 14px;
      line-height: 1.2;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
      color: ${primaryColors?.color03202E};
    }
    .social_md_hdr {
      margin-left: 10px;
      ul {
        padding: 0;
        margin: 0;
        li {
          margin: 0;
          padding: 0;
          display: inline-block;
          width: auto;
          vertical-align: middle;
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
          a {
            transition: 0.6s ease-in-out;
            &:hover {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
  }
`;
