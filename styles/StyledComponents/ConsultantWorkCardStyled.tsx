import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ConsultantWorkCardStyled = styled(Box)`
  .consultant_work_ottrs {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    margin-bottom: -20px;
    justify-content: center;
    .consultant_work_cols {
      flex-basis: 33.33%;
      max-width: 33.33%;
      padding: 0 10px;
      margin-bottom: 20px;
      @media (max-width: 1199px) {
        flex-basis: 50%;
        max-width: 50%;
      }
      @media (max-width: 899px) {
        flex-basis: 100%;
        max-width: 100%;
      }
    }
  }
  .int_screen_mocks {
    display: flex;
    border-radius: 25px;
    border: 1px solid ${primaryColors?.colorE4E4E4};
    background: ${primaryColors?.white};
    padding: 20px 20px 24px 20px;
    transition: 0.6s ease-in-out;
    height: 100%;

    &.selected {
      box-shadow: 0px 85px 70px 0px rgba(0, 0, 0, 0.05);
      background: ${primaryColors?.white};
      border-color: transparent;
    }
    /* @media (max-width: 479px){
      display: block;
    } */
    &:hover {
      box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
      background: ${primaryColors?.white};
      border-color: transparent;
    }
    .main_img {
      width: 126px;
      flex-basis: 126px;
      @media (max-width: 360px) {
        width: 110px;
        flex-basis: 110px;
      }
      img {
        width: 100%;
      }
      /* @media (max-width: 479px){
        flex-basis: 100%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 20px;
      } */
    }
    .int_screen_mocks_rt {
      width: calc(100% - 126px);
      flex-basis: calc(100% - 126px);
      padding-left: 15px;
      align-self: center;
      @media (max-width: 360px) {
        width: calc(100% - 110px);
        flex-basis: calc(100% - 110px);
      }
      /* @media (max-width: 479px){
        flex-basis: 100%;
        width: 100%;
        padding: 0;
        text-align: center;
      } */
      .mock_head {
        font-size: 16px;
        line-height: 1.2;
        color: ${primaryColors?.color3B3B3B};
        text-transform: capitalize;
        font-family: "roslindaledisplay_semi_bold";
        margin-bottom: 6px;
      }
      p {
      }
    }
  }
`;
