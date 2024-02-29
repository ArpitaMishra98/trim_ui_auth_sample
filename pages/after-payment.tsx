/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-nested-ternary */
import PaymentStepWrapperEight from "@/components/PaymentStepWrapper/PaymentStepWrapperEight";
import PaymentStepWrapperFive from "@/components/PaymentStepWrapper/PaymentStepWrapperFive";
import PaymentStepWrapperFour from "@/components/PaymentStepWrapper/PaymentStepWrapperFour";
import PaymentStepWrapperNine from "@/components/PaymentStepWrapper/PaymentStepWrapperNine";
import PaymentStepWrapperOne from "@/components/PaymentStepWrapper/PaymentStepWrapperOne";
import PaymentStepWrapperSeven from "@/components/PaymentStepWrapper/PaymentStepWrapperSeven";
import PaymentStepWrapperSix from "@/components/PaymentStepWrapper/PaymentStepWrapperSix";
import PaymentStepWrapperThree from "@/components/PaymentStepWrapper/PaymentStepWrapperThree";
import PaymentStepWrapperTwo from "@/components/PaymentStepWrapper/PaymentStepWrapperTwo";
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
        backBtnHide={set === 0 ? true : set === 1 ? true : false}
        backClick={() => {
          if (set !== 0) {
            decreaseSetBtn();
          }
        }}
      >
        {set === 0 ? (
          <PaymentStepWrapperOne
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 1 ? (
          <PaymentStepWrapperTwo
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 2 ? (
          <PaymentStepWrapperThree
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 3 ? (
          <PaymentStepWrapperFour
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 4 ? (
          <PaymentStepWrapperFive
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 5 ? (
          <PaymentStepWrapperSix
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 6 ? (
          <PaymentStepWrapperSeven
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 7 ? (
          <PaymentStepWrapperEight
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 8 ? (
          <PaymentStepWrapperNine stepperButtonBack={decreaseSetBtn} />
        ) : (
          ""
        )}
      </StepperHeaderLogo>
    </WrapperSteps>
  );
}
