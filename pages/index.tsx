/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-nested-ternary */
import StepFormWrappersEight from "@/components/StepFormWrappers/StepFormWrappersEight";
import StepFormWrappersEleven from "@/components/StepFormWrappers/StepFormWrappersEleven";
import StepFormWrappersFive from "@/components/StepFormWrappers/StepFormWrappersFive";
import StepFormWrappersFour from "@/components/StepFormWrappers/StepFormWrappersFour";
import StepFormWrappersFourteen from "@/components/StepFormWrappers/StepFormWrappersFourteen";
import StepFormWrappersNine from "@/components/StepFormWrappers/StepFormWrappersNine";
import StepFormWrappersOne from "@/components/StepFormWrappers/StepFormWrappersOne";
import StepFormWrappersSeven from "@/components/StepFormWrappers/StepFormWrappersSeven";
import StepFormWrappersSeventeen from "@/components/StepFormWrappers/StepFormWrappersSeventeen";
import StepFormWrappersSix from "@/components/StepFormWrappers/StepFormWrappersSix";
import StepFormWrappersSixteen from "@/components/StepFormWrappers/StepFormWrappersSixteen";
import StepFormWrappersTen from "@/components/StepFormWrappers/StepFormWrappersTen";
import StepFormWrappersThirteen from "@/components/StepFormWrappers/StepFormWrappersThirteen";
import StepFormWrappersThree from "@/components/StepFormWrappers/StepFormWrappersThree";
import StepFormWrappersTwelve from "@/components/StepFormWrappers/StepFormWrappersTwelve";
import StepFormWrappersTwo from "@/components/StepFormWrappers/StepFormWrappersTwo";
import StepperHeaderLogo from "@/components/StepperHeaderLogo/StepperHeaderLogo";
import WrapperSteps from "@/layout/StepWrapper/StepWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const LoginFormSchema = yup.object().shape({
  isWelcome: yup.boolean(),
  // .required('You must accept the terms and conditions'),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().when(["firstName", "lastName"], {
    is: (firstName: any, lastName: any) => firstName || lastName,
    then: yup
      .string()

      .email("Invalid email address"),
    otherwise: yup.string()
  }),
  month: yup
    .string()
    // .matches(/^(0[1-9]|1[0-2])$/, "Invalid month")
    .nullable(),

  day: yup
    .string()
    // .matches(/^(0[1-9]|[1-2][0-9]|3[01])$/, "Invalid day")
    .nullable(),

  year: yup
    .string()
    // .matches(/^\d{4}$/, "Invalid year")
    .nullable(),
  height: yup.number().positive("Height must be a positive number"),
  // .integer("Height must be an integer")
  // .min(1, "Height must be greater than 0"),
  weightKg: yup
    .number()
    .positive("Weight must be a positive number")
    .max(999, "Weight must be less than or equal to 999"), // Adjust the maximum value as needed

  checkbox: yup
    .array()
    .min(1, "Please select at least one ethnicity")
    .of(yup.string())
});

export default function Home() {
  const [set, updateSet] = useState(0);
  const [hookData, sethookData] = useState("");
  const router = useRouter();
  const { query } = router;

  const { redirected } = query;
  const {
    register,
    watch,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(LoginFormSchema)
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    sethookData(data);
    console.log("🚀 ~ Home ~ dataasdasdas:", data);
    updateSet(set + 1);
    console.log(data);
  };
  console.log(watch("month"), "asddsaaAA");

  const decreaseSetBtn = () => {
    updateSet(set - 1);
  };
  // const decreaseSetBtn = () => {
  //   if (set === 5 && watch("month") === undefined) {
  //     setValue("month", ""); // Replace 'yourFieldName' with the actual name of your input field
  //   } else {
  //     updateSet(set - 1);
  //   }
  // };

  const increaseSetBtn = () => {
    updateSet(set + 1);
  };

  useEffect(() => {
    const clearLocalStorageOnRefresh = () => {
      localStorage.clear();
    };
    window.addEventListener("beforeunload", clearLocalStorageOnRefresh);
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnRefresh);
    };
  }, []);
  useEffect(() => {
    console.log("insode");

    if (redirected) {
      updateSet(2);
    }
  }, []);

  return (
    <WrapperSteps>
      <>
        {set === 0 ? (
          <StepperHeaderLogo>
            <StepFormWrappersOne
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 1 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersTwo
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 2 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersThree
              redirected={redirected ? true : false}
              watch={watch}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              stepperButton={increaseSetBtn}
            />
          </StepperHeaderLogo>
        ) : set === 3 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersFour
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              watch={watch}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 4 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersFive
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 5 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersSix
              updateSet={updateSet}
              set={set}
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 6 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersSeven
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 7 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersEight
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 8 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersNine
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              control={control}
              setValue={setValue}
            />
          </StepperHeaderLogo>
        ) : set === 9 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersTen
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              control={control}
              setValue={setValue}
            />
          </StepperHeaderLogo>
        ) : set === 10 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersEleven
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              hookData={hookData}
            />
          </StepperHeaderLogo>
        ) : set === 11 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersTwelve
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 12 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersThirteen
              watch={watch}
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </StepperHeaderLogo>
        ) : set === 13 ? (
          <StepperHeaderLogo backClick={decreaseSetBtn}>
            <StepFormWrappersFourteen
              stepperButton={increaseSetBtn}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              watch={watch}
            />
          </StepperHeaderLogo>
        ) : set === 14 ? (
          // <StepFormWrappersFiveteen stepperButton={increaseSetBtn} />
          <StepFormWrappersSixteen
            stepperButton={increaseSetBtn}
            register={undefined}
            errors={undefined}
            handleSubmit={undefined}
            onSubmit={undefined}
            watch={undefined}
          />
        ) : set === 15 ? (
          <StepFormWrappersSeventeen />
        ) : (
          ""
        )}
      </>
    </WrapperSteps>
  );
}
