import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { useMutation } from "react-query";

//signup
const userRegister = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.signup, body);
  return res;
};

export const useUserRegister = () => useMutation(userRegister);

//login

const userLogin = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.login, body);
  return res;
};

export const useUserLogin = () => useMutation(userLogin);

//forgorpassword
const userForgotPassword = async (body: object) => {
  const res = await axiosInstance.post(endpoints.auth.login, body);
  return res;
};

export const useForgotPassword = () => useMutation(userForgotPassword);
