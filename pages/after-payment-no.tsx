/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-nested-ternary */
import PaymnetNoStepWrapperFive from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperFive";
import PaymnetNoStepWrapperFour from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperFour";
import PaymnetNoStepWrapperOne from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperOne";
import PaymnetNoStepWrapperSeven from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperSeven";
import PaymnetNoStepWrapperSix from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperSix";
import PaymnetNoStepWrapperThree from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperThree";
import PaymnetNoStepWrapperTwo from "@/components/PaymnetNoStepWrapper/PaymnetNoStepWrapperTwo";
import StepperHeaderLogo from "@/components/StepperHeaderLogo/StepperHeaderLogo";
import WrapperSteps from "@/layout/StepWrapper/StepWrapper";
import { useState } from "react";

export default function Home() {
  const [set, updateSet] = useState(0);
  const increaseSetBtn = () => {
    updateSet(set + 1);
  };
  const decreaseSetBtn = () => {
    updateSet(set - 1);
  };

  return (
    <WrapperSteps>
      <StepperHeaderLogo
        backBtnHide={set === 7 ? true : false}
        backClick={() => {
          if (set !== 0) {
            decreaseSetBtn();
          }
        }}
      >
        {set === 0 ? (
          <PaymnetNoStepWrapperOne
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 1 ? (
          <PaymnetNoStepWrapperTwo
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 2 ? (
          <PaymnetNoStepWrapperThree
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 3 ? (
          <PaymnetNoStepWrapperFour
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 4 ? (
          <PaymnetNoStepWrapperFive
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 5 ? (
          <PaymnetNoStepWrapperFive
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 6 ? (
          <PaymnetNoStepWrapperSix
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 7 ? (
          <PaymnetNoStepWrapperSeven stepperButtonBack={decreaseSetBtn} />
        ) : (
          ""
        )}
      </StepperHeaderLogo>
    </WrapperSteps>
  );
}
