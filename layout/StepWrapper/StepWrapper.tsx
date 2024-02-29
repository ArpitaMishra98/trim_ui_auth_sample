/* eslint-disable no-undef */
import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import Box from "@mui/material/Box";
import StepWrapperHeader from "../StepWrapperHeader/StepWrapperHeader";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const WrapperSteps = (props: wrapperProps) => {
  const { children } = props;

  return (
    <WrapperStyle>
      <StepWrapperHeader />
      <Box className="body_content_stepper">{children}</Box>
    </WrapperStyle>
  );
};

export default WrapperSteps;
