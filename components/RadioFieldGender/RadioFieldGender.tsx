import { RadioFieldGenderInterface } from "@/interface/commonAll.interface";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RadioFieldGenderStyled = styled(Box)`
  .radio_gender_wraps {
    border-radius: 15px;
    border: 1px solid ${primaryColors?.colorD2D2D2};
    background: transparent;
    display: flex;
    padding: 11px;
    padding-right: 30px;
    align-items: center;
    &.textrs {
      background: ${primaryColors?.white};
      /* @media (max-width: 767px) {
        min-width: 158px;
      }
      @media (max-width: 360px) {
        min-width: 120px;
      } */
    }
    @media (max-width: 767px) {
      padding: 7px;
    }
    i,
    .iconClasshead {
      border-radius: 10px;
      background: ${primaryColors?.color03202E};
      box-shadow: 0px 65px 65px 0px rgba(0, 0, 0, 0.05);
      width: 40px;
      height: 40px;
      flex-basis: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        width: 35px;
        height: 35px;
        flex-basis: 35px;
      }
    }
    .textr_span {
      color: ${primaryColors?.white};
    }
    .radio_gender_wraps_rt {
      width: calc(100% - 40px);
      flex-basis: calc(100% - 40px);
      font-size: 15px;
      padding-left: 19px;
      @media (max-width: 767px) {
        width: calc(100% - 35px);
        flex-basis: calc(100% - 35px);
        text-align: left;
        font-size: 12px;
      }
    }
  }
`;

function RadioFieldGender({
  image,
  content,
  imageValues
}: RadioFieldGenderInterface) {
  return (
    <RadioFieldGenderStyled>
      <Box
        className={
          imageValues ? "radio_gender_wraps textrs" : "radio_gender_wraps"
        }
      >
        {imageValues ? (
          <Typography variant="caption" className="textr_span iconClasshead">
            {image}
          </Typography>
        ) : (
          <i>{image}</i>
        )}

        <Box className="radio_gender_wraps_rt">{content}</Box>
      </Box>
    </RadioFieldGenderStyled>
  );
}

export default RadioFieldGender;
