import assest from "@/json/assest";
import { StepperHeaderLogoStyled } from "@/styles/StyledComponents/StepperHeaderLogoStyled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StepperHeaderLogoInterface {
  children: React.ReactNode;
  backBtnHide?: boolean;
  backClick?: () => void;
}
function StepperHeaderLogo({
  backClick,
  backBtnHide,
  children
}: StepperHeaderLogoInterface) {
  return (
    <StepperHeaderLogoStyled>
      <Box className="stepper_back_heads">
        <Container fixed>
          <Box className="stepper_back_heads_inr">
            {backBtnHide ? (
              ""
            ) : (
              <Button className="stepper_bakcbg" onClick={backClick}>
                <i>
                  <Image
                    src={assest?.left_back_Arrow}
                    width={8}
                    height={12}
                    alt=""
                  />
                </i>
                Back
              </Button>
            )}

            <Link href="/" className="logosec_step">
              <Image src={assest?.logo} width={111} height={50} alt="" />
            </Link>
          </Box>
        </Container>
      </Box>

      <Box className="stepper_back_btm">{children}</Box>
    </StepperHeaderLogoStyled>
  );
}

export default StepperHeaderLogo;
