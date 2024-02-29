/* eslint-disable import/no-cycle */
/* eslint-disable react/no-unescaped-entities */
import Faq from "@/components/Faq/Faq";
import { Programme } from "@/components/Programme/Programme";
import ProvideDelivery from "@/components/ProvideDelivery/ProvideDelivery";
import assest from "@/json/assest";
import { CompletePaymentWrapper } from "@/styles/StyledComponents/ProgrammeWrapper";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import Icon5 from "@/ui/Icons/Icon5";
import Icon6 from "@/ui/Icons/Icon6";
import Icon7 from "@/ui/Icons/Icon7";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const productSlider = [
  {
    image: assest?.programme_image1
  },
  {
    image: assest?.programme_image2
  },
  {
    image: assest?.programme_image3
  },
  {
    image: assest?.programme_image4
  }
];

export const ProgrammeBottomWrapper = styled(Box)`
  margin-top: 30px;
  .each_block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
  }
`;

export const ProgrammeBottomSec = () => {
  return (
    <Container fixed>
      <Box className="wrap_cmn_capSteps">
        <ProgrammeBottomWrapper>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={4} xs={12}>
              <Box className="each_block">
                <Typography component="i">
                  <Icon5 />
                </Typography>
                <Typography>Full refund if unsuitable</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="each_block">
                <Typography component="i">
                  <Icon6 />
                </Typography>
                <Typography>No lock in contract</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="each_block">
                <Typography component="i">
                  <Icon7 />
                </Typography>
                <Typography>30-day money-back guarantee</Typography>
              </Box>
            </Grid>
          </Grid>
        </ProgrammeBottomWrapper>
      </Box>
    </Container>
  );
};
// export const PaymentDesignWrapperStyle = styled(Box)`
//   position: relative;
//   z-index: 2;
//   &:after {
//     content: "";
//     position: absolute;
//     background-color: ${primaryColors?.colorf5f3ed};
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 32%;
//     z-index: -1;
//   }
//   &:before {
//     position: absolute;
//     content: "";
//     left: 0;
//     bottom: 27%;
//     width: 100%;
//     height: 173px;
//     background: url("/assets/images/shape_before_in.png");
//     background-size: 100% 100%;
//     z-index: 1;
//     @media (max-width: 899px) {
//       height: 100px;
//       bottom: 30%;
//     }
//   }
// `;

// const PaymentDesignWrapper = ({ children }: any) => {
//   return <PaymentDesignWrapperStyle>{children}</PaymentDesignWrapperStyle>;
// };

const StepFormWrappersSeventeen = () => {
  return (
    <StepFormWrappersStyled>
      <CompletePaymentWrapper>
        <Box className="wrap_cmn_capSteps">
          <Container fixed>
            <Typography variant="h2" className="cmn_head cmn_head_compltd">
              <Typography variant="caption">Complete</Typography> your payment
            </Typography>
          </Container>
        </Box>
        <Programme />
        <ProgrammeBottomSec />
        <ProvideDelivery />
        <Faq />
      </CompletePaymentWrapper>
    </StepFormWrappersStyled>
  );
};

export default StepFormWrappersSeventeen;
