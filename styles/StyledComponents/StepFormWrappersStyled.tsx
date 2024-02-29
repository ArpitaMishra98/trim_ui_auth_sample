import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StepFormWrappersStyled = styled(Box)`
  .consult_wrap_gap {
    padding-top: 50px;
    padding-bottom: 141px;
    min-height: calc(100vh - 82px);
    display: flex;
    align-items: center;
    justify-content: center;
    /* &.auth_pages{
      min-height: calc(100vh - 120px);
    } */
    @media (max-width: 1199px) {
      padding-bottom: 80px;
      padding-top: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 40px;
      padding-top: 37px;
      align-items: inherit;
    }
    > * {
      width: 100%;
    }
    &.btm_zero {
      padding-bottom: 0;
    }
  }
  .wraps_form_stlwrp {
    max-width: 653px;
    margin: 0 auto;
  }
  .welcome_consult_tops {
    border-radius: 25px;
    background: ${primaryColors?.white};
    box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
    padding: 30px;

    @media (max-width: 767px) {
      padding: 14px 12px;
      border-radius: 20px;
      box-shadow: 0px 9px 65px 0px #0000000d;
    }
    .welcome_consult_tops_otrs {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -4px;
      margin-bottom: -8px;
    }
    .welcome_consult_tops_inrs {
      flex-basis: 25%;
      max-width: 25%;
      line-height: 0;
      padding: 0 4px;
      margin-bottom: 8px;
      /* @media (max-width: 767px) {
        flex-basis: 50%;
        max-width: 50%;
      } */
      .main_img {
        position: relative;
        border-radius: 5px;
        padding-bottom: 101%;
        overflow: hidden;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
      }
    }
  }

  .welcome_consult_btms {
    margin-top: 42px;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }

  .cmn_consult_headbt {
    text-align: center;
    .cmn_head {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .next_arrow_btns {
      margin-top: 32px;
      @media (max-width: 767px) {
        margin-top: 25px;
        width: 100%;
      }
    }
  }

  .welcome_consultant_btmsd {
    position: relative;
    /* background: ${primaryColors?.colorf5f3ed}; */
    z-index: 2;
    /* &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 173px;
      background: url("/assets/images/shape_before_in.png");
      background-size: 100% 100%;
      z-index: 1;
    } */
  }

  .welcome_consultant_tpsd {
    position: relative;
    z-index: 3;
  }

  .shape_backs {
    position: relative;
    .shape_backs_imgs {
      height: 490px;
      background: ${primaryColors?.colorf5f3ed};
      position: absolute;
      bottom: 0;
      width: 100%;
      @media (max-width: 767px) {
        height: calc(100vh - 240px);
      }
      &.steptwo {
        @media (max-width: 767px) {
          height: calc(100vh + 180px);
        }
      }
      &.step3,
      &.cmn_htFormbl {
        @media (max-width: 767px) {
          height: calc(100vh - 304px);
        }
      }
      &.step4 {
        @media (max-width: 767px) {
          height: calc(100vh - 304px);
        }
      }
      &.step5 {
        @media (max-width: 767px) {
          height: calc(100vh - 290px);
        }
      }
      &.step10 {
        @media (max-width: 767px) {
          height: calc(100vh - 210px);
        }
      }
      &.step12 {
        @media (max-width: 767px) {
          height: calc(100vh - 280px);
        }
      }
      &.step13 {
        @media (max-width: 767px) {
          height: calc(100vh - 285px);
        }
      }
      &.step14 {
        @media (max-width: 767px) {
          height: calc(100vh - 117px);
        }
      }
      &.after_paystep1 {
        @media (max-width: 767px) {
          height: calc(100vh - 507px);
        }
      }
      &.after_paystep2 {
        @media (max-width: 767px) {
          height: calc(100vh - 322px);
        }
      }
      &.after_paystep3 {
        @media (max-width: 767px) {
          height: calc(100vh - 285px);
        }
      }
      &.after_paystep4 {
        @media (max-width: 767px) {
          height: calc(100vh - 285px);
        }
      }
      &.after_paystep6 {
        @media (max-width: 767px) {
          height: calc(100vh - 275px);
        }
      }
      &.after_paystep7 {
        @media (max-width: 767px) {
          height: calc(100vh - 275px);
        }
      }
      &.after_paystep8 {
        @media (max-width: 767px) {
          height: calc(100vh - 285px);
        }
      }
      &.after_payNoStep1 {
        @media (max-width: 767px) {
          height: calc(100vh - 285px);
        }
      }
      &.after_payNoStep7 {
        @media (max-width: 767px) {
          height: calc(100vh - 275px);
        }
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
        @media (max-width: 360px) {
          height: 30px;
        }
      }
    }
  }

  .head_center_tps {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 34px;

    @media (max-width: 767px) {
      margin-bottom: 22px;
    }
    .cmn_head {
      margin-bottom: 21px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .step_relative_main {
    position: relative;
    z-index: 3;
  }

  .gap_btms_nextar {
    display: table;
    margin: 0 auto;
    margin-top: 32px;
  }

  .consult_work_steps_wrpsd {
    max-width: 653px;
    margin: 0 auto;
    text-align: center;
    .head_center_tps {
      max-width: 564px;
    }
    &.step4 {
      max-width: 546px;
      .head_center_tps {
        max-width: 100%;
      }
    }
    &.step1Wrap {
      max-width: 342px;
      margin: 0 auto;
    }
    &.step2Wrap {
      .lets_start_nameGrid {
        max-width: 510px;
        margin: 0 auto;
      }
      .head_center_tps {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .lets_start_nameGrid_col {
    .next_arrow_btns {
      margin-top: 5px;
    }
    .MuiTypography-body2 {
      text-align: left;
      margin-top: 6px;
    }
    /* &.password_field {
      .MuiInputAdornment-root {
        .MuiButtonBase-root {
          svg {
            path {
              fill: #c6c6c6;
            }
          }
        }
      }
    } */
  }

  .already_account_text {
    text-align: center;
    /* margin-top: 10px; */
    p {
      a {
        color: ${primaryColors?.black};
        text-decoration: underline !important;
        &:hover {
          color: ${primaryColors?.secondaryFont};
        }
      }
    }
    &.gaptp {
      margin-top: 27px;
    }
  }

  .consult_support_innrs {
    text-align: center;
    max-width: 564px;
    margin: 0 auto;
    .main_img {
      margin-bottom: 31px;
      @media (max-width: 767px) {
        margin-bottom: 20px;
      }
      img {
        @media (max-width: 767px) {
          max-width: 138px;
        }
      }
    }
    .cmn_consult_headbt {
      .cmn_head {
        margin-bottom: 25px;
        @media (max-width: 767px) {
          margin-bottom: 10px;
        }
      }
    }
    .para_bodysec {
      p {
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &.fullwdth {
      max-width: 100%;
    }
    &.stepwdths {
      max-width: 974px;
      margin: 0 auto;
    }
    &.wdthNopaymnt {
      max-width: 884px;
      margin: 0 auto;
    }
  }

  .data_birth_wraps {
    .head_center_tps {
      max-width: 610px;
      margin: 0 auto;
      margin-bottom: 36px;
    }
    .data_birth_forms {
      max-width: 425px;
      margin: 0 auto;
      .gap_btms_nextar {
        margin-top: 35px;
      }
    }
  }

  .date_birth_grids {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -29px;
    @media (max-width: 767px) {
      margin: 0 -10px;
    }
    .date_birth_grids_col {
      width: 33.33%;
      flex-basis: 33.33%;
      padding: 0 29px;
      text-align: center;
      @media (max-width: 767px) {
        padding: 0 10px;
      }
      .MuiFormControl-root {
        position: relative;
        &:after {
          position: absolute;
          content: "";
          right: -46px;
          bottom: 0;
          background: url("/assets/images/lines.svg") no-repeat center center;
          background-size: 9px;
          width: 25px;
          height: 25px;
          @media (max-width: 767px) {
            background-size: 6px;
            width: 20px;
            height: 20px;
            right: -22px;
          }
        }
        .MuiInputBase-root {
          .MuiInputBase-input {
            text-align: center;
            padding: 0 10px 7px 10px;
          }
        }
      }

      &:last-child {
        .MuiFormControl-root {
          &:after {
            display: none;
          }
        }
      }
    }
  }

  .hetmsrd_wraps {
    max-width: 717px;
    margin: 0 auto;
    text-align: center;
    &.paystepStepFour {
      max-width: 761px;
      .type_answer_form {
        max-width: 717px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .birth_place_frmcol {
    .MuiFormGroup-root {
      margin-bottom: -23px;
      display: inline-block;
      @media (max-width: 767px) {
        margin-bottom: -16px;
      }
      .MuiFormControlLabel-root {
        display: inline-block;
        width: auto;
        margin: 0;
        margin-right: 30px;
        margin-bottom: 23px;
        @media (max-width: 767px) {
          margin-bottom: 16px;
        }
        @media (max-width: 575px) {
          margin-right: 12px;
        }
        &:last-child {
          margin-right: 0;
        }
        .MuiRadio-root {
          display: none;
          &.Mui-checked {
            + span {
              .radio_gender_wraps {
                border-color: transparent;
                background: ${primaryColors?.white};
                box-shadow: 0px 30px 65px 0px rgba(0, 0, 0, 0.15);
                i {
                  svg {
                    path {
                      fill: ${primaryColors?.colorDFF000};
                    }
                  }
                }
                .textr_span {
                  color: ${primaryColors?.colorDFF000};
                }
              }
            }
          }
        }
      }
    }

    &.after_paymnts {
      .MuiFormGroup-root {
        .MuiFormControlLabel-root {
          @media (max-width: 767px) {
            min-width: 135px;
          }
        }
      }
    }
    &.forlabel_brths {
      .MuiFormGroup-root {
        .MuiFormControlLabel-root {
          @media (max-width: 767px) {
            min-width: 158px;
          }
          @media (max-width: 360px) {
            min-width: 130px;
          }
        }
      }
    }
  }

  .birth_place_forms {
    text-align: center;
  }

  .gap_btms_nextarextr {
    margin-top: 32px;
  }

  .ethnic_bakc_wrappers_frm {
    text-align: center;
    .choose_applypara {
      margin-bottom: 27px;
    }
  }

  .ethnic_bakc_wrappers_frm_in {
    .MuiFormGroup-root {
      display: inline-block;
      @media (max-width: 479px) {
        display: block;
      }
    }
    .MuiFormControlLabel-root {
      display: inline-block;
      margin: 0;
      width: auto;
      margin-right: 14px;
      margin-bottom: 29px;
      text-align: left;
      @media (max-width: 1199px) {
        margin-bottom: 20px;
      }
      @media (max-width: 767px) {
        margin-right: 10px;
        margin-bottom: 16px;
      }
      @media (max-width: 479px) {
        display: block;
        margin-right: 0;
      }

      &:last-child {
        margin-right: 0;
      }
      .MuiCheckbox-root {
        display: none;
        & + .MuiFormControlLabel-label {
          display: inline-block;
          width: 100%;
          position: relative;
          padding: 19px 28px 19px 46px;
          border: 1px solid ${primaryColors?.colorD2D2D2};
          background: ${primaryColors?.white};
          border-radius: 15px;
          @media (max-width: 767px) {
            padding: 19px 15px 19px 54px;
          }

          &:after {
            position: absolute;
            content: "";
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid ${primaryColors?.color03202E};
            box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
            left: 19px;
            top: 18px;
            @media (max-width: 767px) {
              left: 15px;
              top: 16px;
            }
          }
          &:before {
            position: absolute;
            content: "";
            transform: rotate(45deg);
            height: 12px;
            width: 7px;
            border-bottom: 2px solid ${primaryColors?.colorDFF000};
            border-right: 2px solid ${primaryColors?.colorDFF000};
            left: 26px;
            top: 20px;
            opacity: 0;
            z-index: 1;
            @media (max-width: 767px) {
              left: 22px;
              top: 18px;
            }
          }
        }

        &.Mui-checked {
          & + .MuiFormControlLabel-label {
            background: ${primaryColors?.white};
            border-color: transparent;
            box-shadow: 0px 30px 65px 0px rgba(0, 0, 0, 0.15);
            &:before {
              opacity: 1;
            }
            &:after {
              background: ${primaryColors?.color03202E};
            }
          }
        }
      }
    }
  }

  .ethnic_bakc_wrappers {
    max-width: 838px;
    margin: 0 auto;
    &.hear_wrap {
      max-width: 1015px;
    }
  }
  .ethnic_back_gapst {
    margin-top: 20px !important;
    @media (max-width: 767px) {
      margin-top: 10px !important;
    }
  }

  .confirm_answer_boxs {
    border-radius: 25px;
    background: ${primaryColors?.white};
    box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
    .head_sec_cnfrns {
      border-bottom: 1px solid ${primaryColors?.color031F2C};
      padding: 36px 31px;
      @media (max-width: 767px) {
        padding: 20px 16px;
      }
      .sechds {
        font-size: 24px;
        line-height: 1.1;
        font-family: "roslindaledisplay_semi_bold";
        @media (max-width: 767px) {
          font-size: 16px;
        }
      }
    }
    .head_sec_cnfrnsBody {
      display: inline-block;
      width: 100%;
      padding: 32px 31px 37px 31px;
      @media (max-width: 767px) {
        padding: 10px 16px 30px 16px;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          padding: 0;
          margin: 0;
          margin-bottom: 13px;
          align-items: flex-start;
          &:last-child {
            margin-bottom: 0;
          }
          strong {
            font-weight: normal;
            font-family: "roslindaledisplay_semi_bold";
            margin-right: 3px;
          }
        }
      }
    }
  }

  .confirm_answer_btms {
    display: table;
    margin: 0 auto;
    margin-top: 32px;
    text-align: center;
    @media (max-width: 767px) {
      margin-top: 25px;
      width: 100%;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        padding: 0;
        margin: 0;
        margin-bottom: 19px;
        @media (max-width: 767px) {
          margin-bottom: 15px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        .MuiButtonBase-root {
          min-width: 280px;
          @media (max-width: 767px) {
            min-width: inherit;
            width: 100%;
          }
          &.next_arrow_btns {
            margin-top: 0;
          }
        }
      }
    }
  }

  .confirm_answer_wrapper {
    max-width: 650px;
    margin: 0 auto;
  }

  .cnansweryrds {
    .confirm_answer_btms {
      margin-top: 0;
    }
  }

  .crtaccntYrn_wrapper {
    .head_center_tps {
      max-width: 905px;
      margin-left: auto;
      margin-right: auto;
    }
    .yrsd_answer_wrapper_frm {
      max-width: 990px;
      margin: 0 auto;
    }
  }

  .next_arrow_btns {
    margin-top: 32px;
    @media (max-width: 767px) {
      margin-top: 26px;
      width: 100%;
    }
    &.centerbtns {
      display: table;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
    }
  }

  .include_thing_top {
    margin-bottom: -100px;
    position: relative;
    z-index: 1;
    .head_center_tps {
      max-width: 779px;
      margin: 0 auto;
      margin-bottom: 32px;
      .cmn_head {
        max-width: 685px;
        margin: 0 auto;
        margin-bottom: 24px;
        @media (max-width: 767px) {
          margin-bottom: 14px;
        }
      }
    }
  }

  .include_thing_btm {
    background: ${primaryColors?.colorf5f3ed};
    padding-top: 167px;
    padding-bottom: 100px;
    position: relative;
    @media (max-width: 767px) {
      padding-top: 100px;
      padding-bottom: 50px;
    }
    &:after {
      position: absolute;
      content: "";
      background: url("/assets/images/sucss_prgm_back.png") no-repeat;
      background-size: 100% 100%;
      height: 173px;
      width: 100%;
      left: 0;
      top: 0;
      @media (max-width: 767px) {
        height: 33px;
      }
    }
    .head_center_tps {
      max-width: 558px;
      margin: 0 auto;
      margin-bottom: 45px;
      @media (max-width: 767px) {
        margin-bottom: 21px;
      }
    }
  }

  .head_center_tps {
    &.center {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .successon_program_row {
    .averg_body_wtin {
      text-align: center;
      .main_img {
        margin-bottom: 3px;
        @media (max-width: 767px) {
          margin-bottom: 10px;
        }
      }
      .averg_body_wtin_btm {
        .head_cls {
          font-family: "roslindaledisplay_semi_bold";
          color: ${primaryColors?.color3B3B3B};
          margin-bottom: 10px;
          @media (max-width: 767px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  .confirm_payment_bxdv {
    margin-top: 42px;
    text-align: center;
    .head_h3 {
      font-size: 24px;
      line-height: 1.2;
      font-family: "roslindaledisplay_semi_bold";
      color: ${primaryColors?.color3B3B3B};
      margin-bottom: 25px;
      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 12px;
      }
    }
  }

  .include_thing_btm_wraps {
    max-width: 915px;
    margin: 0 auto;
  }

  .forgot_pass {
    margin-bottom: 11px;
    p {
      a {
        color: ${primaryColors?.black};
        &:hover {
          color: ${primaryColors?.secondaryFont};
        }
      }
    }
  }

  .full_ht_inputsecd {
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .custom_login_primary_btns {
    margin-top: 30px;
    text-align: center;
    .next_arrow_btns {
      display: table;
      margin: 0 auto;
      min-width: 309px;
      @media (max-width: 767px) {
        min-width: 250px;
      }
    }
    .backLogin {
      display: table;
      margin: 0 auto;
      margin-top: 22px;
      padding: 0;
      background: transparent !important;
      min-height: inherit;
      color: ${primaryColors?.black};
      &:hover {
        color: ${primaryColors?.secondaryFont};
      }
    }
  }

  .provide_delivery_box {
    border-radius: 25px;
    background: ${primaryColors?.white};
    box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
    padding: 25px;
    padding-bottom: 39px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 767px) {
      padding: 25px 22px;
      border-radius: 20px;
      box-shadow: 0px 0px 65px 0px rgba(0, 0, 0, 0.05);
    }
  }

  .provd_heads {
    font-size: 24px;
    line-height: 1.2;
    font-family: "roslindaledisplay_semi_bold";
    margin-bottom: 30px;
    text-transform: capitalize;
    color: ${primaryColors?.color3B3B3B};
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 23px;
    }
  }

  .questn_form {
    .qtn_formcls {
      font-size: 18px;
      line-height: 1.2;
      color: ${primaryColors?.black};
      font-family: "roslindaledisplay_semi_bold";
      margin-bottom: 10px;
      text-transform: capitalize;
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }

  .discount_code_sec {
    .dicountHd {
      font-size: 24px;
      line-height: 1.3;
      font-family: "roslindaledisplay_semi_bold";
      color: ${primaryColors?.color3B3B3B};
      margin-bottom: 13px;
      @media (max-width: 767px) {
        font-size: 18px;
      }
      @media (max-width: 479px) {
        font-size: 16px;
      }
    }
  }

  .discount_code_sec_innr {
    display: flex;
    flex-wrap: wrap;
    .boxes_input_lft {
      width: calc(100% - 145px);
      flex-basis: calc(100% - 145px);
      padding-right: 28px;
      align-self: flex-end;
      @media (max-width: 479px) {
        width: 100%;
        flex-basis: 100%;
        padding: 0;
        margin-bottom: 19px;
      }
    }
    .apply_btns {
      width: 145px;
      flex-basis: 145px;
      min-width: 145px;
      border-radius: 0;
      @media (max-width: 479px) {
        width: 100%;
        flex-basis: 100%;
        min-width: inherit;
        padding: 10px 20px;
        font-size: 12px;
      }
    }
  }

  .provide_cards_frm {
    margin-top: 48px;
    padding: 0 14px;
    @media (max-width: 767px) {
      padding: 0;
      margin-top: 20px;
    }
    .next_arrow_btns {
      margin-top: 33px;
      min-width: 265px;
      @media (max-width: 767px) {
        min-width: inherit;
        width: 100%;
        padding: 15px 16px;
        margin-top: 24px;
      }
    }
  }

  .provide_cards_frm_top {
    border-radius: 25px;
    background: ${primaryColors?.white};
    box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
    padding: 30px 32px 37px 30px;
    @media (max-width: 767px) {
      padding: 25px 15px;
      margin: 0 -10px;
    }
  }
  .provide_cards_frm_top_labels {
    margin-bottom: 21px;
    &:last-child {
      margin-bottom: 0;
    }
    > .MuiFormControlLabel-root {
      display: table;
      margin: 0;
      width: 100%;
      .MuiRadio-root {
        display: none;
        & + .MuiTypography-root {
          font-size: 24px;
          line-height: 1.2;
          font-family: "roslindaledisplay_semi_bold";
          color: ${primaryColors?.color3B3B3B};
          position: relative;
          padding-left: 35px;
          display: inline-block;
          width: 100%;
          @media (max-width: 479px) {
            font-size: 18px;
          }
          &:after {
            position: absolute;
            content: "";
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 1px solid ${primaryColors?.black};
            left: 0;
            top: 4px;
            @media (max-width: 479px) {
              top: 1px;
            }
          }

          &:before {
            position: absolute;
            content: "";
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${primaryColors?.black};
            left: 3px;
            top: 7px;
            opacity: 0;
            @media (max-width: 479px) {
              top: 4px;
            }
          }
        }

        &.Mui-checked {
          & + .MuiTypography-root {
            &:before {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .another_payment_zip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "roslindaletext_regular";
    @media (max-width: 360px) {
      display: block;
    }
    .logo_pt_lft {
      display: flex;
      align-items: center;
      /* @media (max-width: 479px) {
        justify-content: space-between;
        margin-bottom: 10px;
      } */
      @media (max-width: 360px) {
        margin-bottom: 10px;
      }
      .mn_icon {
        line-height: 0;
        margin-right: 16px;
      }
      .lern_mr {
        font-size: 12px;
        text-decoration: underline !important;
        color: ${primaryColors?.black};
        &:hover {
          color: ${primaryColors?.secondaryFont};
        }
      }
    }
  }

  .card_Details_outers {
    margin-top: 20px;
    .card_Details_innerss {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      @media (max-width: 767px) {
        margin-bottom: 12px;
      }
    }
  }

  .custom_Card_num {
    position: relative;
    .card_icon {
      position: absolute;
      left: 0;
      top: 2px;
      @media (max-width: 767px) {
        top: -2px;
      }
    }
    .main_input_sums {
      .MuiInputBase-root {
        .MuiInputBase-input {
          padding-bottom: 15px;
          padding-left: 40px;
          padding-right: 120px;
          @media (max-width: 767px) {
            font-size: 12px;
            padding-bottom: 7px;
            padding-right: 100px;
          }
        }
      }
    }

    .cvv_mnth {
      display: flex;
      position: absolute;
      right: -7px;
      top: 3px;
      /* @media (max-width: 479px) {
        position: static;
        margin-top: 11px;
        justify-content: space-between;
        margin-left: -5px;
        margin-right: -5px;
      } */
      @media (max-width: 767px) {
        top: 0;
      }
      .mn_sec {
        padding: 0 3px;
        @media (max-width: 767px) {
          flex: 1;
          padding: 0 1px;
        }
        .MuiInputBase-root {
          border: 0;
          padding: 0;
          margin: 0;
          /* @media (max-width: 479px) {
            border-bottom: 1px solid ${primaryColors?.black};
            padding-bottom: 5px;
          } */
          .MuiInputBase-input {
            padding: 0;
            margin: 0;
          }
        }
        .mnth_year {
          .MuiInputBase-root {
            .MuiInputBase-input {
              width: 65px;
              @media (max-width: 767px) {
                font-size: 12px;
                width: 52px;
              }
            }
          }
        }
        .cvv {
          .MuiInputBase-root {
            @media (max-width: 767px) {
              text-align: right;
            }
            .MuiInputBase-input {
              width: 42px;
              text-align: right;
              @media (max-width: 767px) {
                font-size: 12px;
                width: 32px;
              }
            }
          }
        }
      }
    }
  }

  .visa_sec_method {
    position: relative;
    .MuiInputBase-root {
      .MuiInputBase-input {
        padding-bottom: 27px;
        padding-left: 120px;
        padding-right: 40px;
        padding-top: 5px;
        /* @media (max-width: 479px) {
          padding: 0;
          padding-bottom: 10px;
        } */
      }
    }
    .visa_cardsec {
      position: absolute;
      left: 0;
      top: 0;
      /* @media (max-width: 479px) {
        position: static;
      } */
    }
    .visa_cardsecrt {
      position: absolute;
      right: 0;
      top: 0;
      /* @media (max-width: 479px) {
        position: static;
      } */
    }
  }
  .visa_sec_method_nxtd {
    @media (max-width: 479px) {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
  }

  .found_suitable_ulsec {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-top: 22px;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 2px 0;
        margin-bottom: 13px;
        background: url("/assets/images/tickIcon.svg") no-repeat 0 4px;
        background-size: 16px;
        padding-left: 33px;
        &:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 767px) {
          background-position: 0 0;
        }
      }
    }
  }

  .proivide_delivery_wrapper {
    margin-top: 30px;
    position: relative;
    z-index: 2;
  }

  .wrap_cmn_payment_mth {
    margin-bottom: -160px;
    @media (max-width: 767px) {
      margin-bottom: -50px;
    }
  }

  .next_arrow_btns {
    &.lg_btninput {
      min-width: 241px;
    }
    &.no_gap_topdiv {
      margin-top: 0;
    }
    &.gap_reducesec {
      margin-top: 5px;
    }
  }

  .payment_box_wraprs {
    background: ${primaryColors?.white};
    border-radius: 20px;
    padding: 57px 55px 53px 55px;
    @media (max-width: 899px) {
      padding: 47px 35px 43px 35px;
    }
    @media (max-width: 767px) {
      padding: 0 26px 38px 26px;
    }
    &.stepwrapsOne {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .payment_successMsg {
    text-align: center;
    .payment_mainImg {
      margin-bottom: 22px;
    }
  }

  .payment_scuccessmgBtm {
    .cmn_consult_headbt {
      .cmn_head {
        margin-bottom: 30px;
        @media (max-width: 767px) {
          margin-bottom: 15px;
        }
      }
      .cmn_consult_pargrphs {
        p {
          font-size: 24px;
          line-height: 1.3;
          color: ${primaryColors?.color3B3B3B};
          font-family: "roslindaledisplay_semi_bold";
          margin-bottom: 30px;
          @media (max-width: 899px) {
            font-size: 18px;
          }
          @media (max-width: 767px) {
            font-size: 12px;
            margin-bottom: 14px;
          }
          &:last-child {
            margin-bottom: 0;
          }
          a {
            color: ${primaryColors?.color3B3B3B};
            &:hover {
              color: ${primaryColors?.mainFontColor};
            }
          }
        }
      }
    }
  }

  .wight_loss_sectns {
    text-align: center;
    .main_imgs {
      display: table;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    .wight_loss_sectns_btms {
      .cmn_consult_headbt {
        .cmn_head {
          max-width: 625px;
          margin-left: auto;
          margin-right: auto;
        }
        .para_grphBtmd {
          border-top: 1px solid ${primaryColors?.black};
          padding-top: 48px;
          margin-top: 20px;
          @media (max-width: 767px) {
            padding-top: 18px;
          }
        }
      }
    }
  }

  .hdng_inputheads {
    font-size: 15px;
    line-height: 1.3;
    font-family: "roslindaletext_regular";
    margin-bottom: 28px;
    @media (max-width: 767px) {
      font-size: 12px;
      margin-bottom: 22px;
    }
  }
  .center_wrapper_cmns {
    text-align: center;
  }
  .cmn_input_wrapsInner {
    max-width: 717px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact_supported_NoPay {
    .main_img {
      margin-bottom: 36px;
      @media (max-width: 767px) {
        margin-bottom: 15px;
      }
    }
  }

  .para_headbtSec {
    p {
      margin-bottom: 28px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .visa_method_paymnt {
    border-bottom: 1px solid ${primaryColors?.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    @media (max-width: 767px) {
      padding-bottom: 5px;
    }
  }

  .provide_cards_frm_btns {
    @media (max-width: 767px) {
      margin: 0 -20px;
    }
  }

  .consultant_pmBtns {
    @media (max-width: 767px) {
      margin: 0 -26px;
      margin-top: 12px;
    }
  }
`;
