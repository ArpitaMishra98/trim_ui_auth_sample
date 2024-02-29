import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ProgrammeWrapper = styled(Box)`
  border-radius: 25px;
  background: ${primaryColors?.white};
  box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 767px) {
    box-shadow: 0px 0px 65px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }
  h3 {
    color: ${primaryColors?.color3B3B3B};
    font-family: "roslindaledisplay_semi_bold";
    font-size: 24px;
    text-transform: capitalize;
    margin-bottom: 25px;
  }
  .programme_content {
    padding: 25px;
    > h3 {
      margin-bottom: 30px;
      color: ${primaryColors?.color3B3B3B};
      @media (max-width: 767px) {
        font-size: 16px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
  .footer_content {
    padding: 25px;
    border-top: 1px solid ${primaryColors?.black};
    p {
      color: ${primaryColors?.color8b8b8b};
    }
  }
  .imgFigBig {
    height: 214px;
    line-height: 1;
    font-size: 0;
    margin-bottom: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 899px) {
      height: 300px;
    }
  }
  .imgFigSmall {
    height: 65px;
    line-height: 1;
    font-size: 0;
    margin-bottom: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 899px) {
      height: 100px;
    }
  }
  .content_fig {
    .slick-slider {
      .slick-slide {
        padding: 4px;
      }
      .slick-list {
        margin: -4px;
      }
    }
  }
  .content_text {
    h4 {
      font-family: "roslindaledisplay_semi_bold";
      font-size: 18px;
      text-transform: capitalize;
      margin-bottom: 10px;
      @media (max-width: 767px) {
        font-size: 14px;
      }
      span {
        display: inline-block;
        margin-left: 10px;
        @media (max-width: 767px) {
          font-size: 12px;
        }
      }
      &.sec_hds {
        margin-bottom: 20px;
        @media (max-width: 767px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
    ul {
      margin-top: 20px;
      li {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
        i {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
        }
      }
    }
  }
`;

export const CompletePaymentWrapper = styled(Box)`
  /* max-width: 740px;
  margin: 0 auto; */
  .cmn_head {
    margin-top: 35px;
  }
  .cmn_head_compltd {
    @media (max-width: 767px) {
      margin-bottom: 10px;
    }
  }
`;
