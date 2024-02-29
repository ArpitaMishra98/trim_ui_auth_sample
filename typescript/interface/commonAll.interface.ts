import React from "react";

export interface StepperNextInterface {
  stepperButton?: any;
  stepperButtonBack?: any;
}

export interface ConsultWorkInterface {
  image: string;
  name: string;
  para?: string;
  paraShow?: boolean;
}

export interface RadioFieldGenderInterface {
  image: React.ReactNode;
  content: string;
  imageValues?: boolean;
}
