import StepperHeaderLogo from "@/components/StepperHeaderLogo/StepperHeaderLogo";
import { useUserLogin } from "@/hooks/react-qurey/query-hooks/authQuery.hooks";
import WrapperSteps from "@/layout/StepWrapper/StepWrapper";
import { setCookieClient } from "@/lib/functions/storage.lib";
import { StepFormWrappersStyled } from "@/styles/StyledComponents/StepFormWrappersStyled";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

// Define Yup schema for form validation
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required")
});

// Define form data interface
interface FormData {
  email: string;
  password: string;
}

export default function index({ stepWelcome, UpdateStepWelcome }: any) {
  const router = useRouter();

  const { query } = router;
  const { redirected } = query;

  const { mutate: userLogin, isLoading } = useUserLogin();
  // Initialize useForm hook inside the component
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema) // Integrate Yup validation resolver
  });

  // Define your form submission handler
  //   const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
  //     // Handle form submission
  //     console.log(data);
  //     // You can perform further actions here, such as making API requests
  //   };

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    const { email, password } = data;
    const payLoad = {
      email,
      password
    };
    userLogin(payLoad, {
      onSuccess: (response: any) => {
        console.log("🚀 ~ Login ~ response:", response?.data?.data);
        // alert("called");
        UpdateStepWelcome(1);
        const { data, token } = response?.data?.data ?? {};
        if (typeof window != "undefined" && !!token) {
          //   localStorage.setItem("trim_token", token ?? "");
          setCookieClient("trim_token", token ?? "");
          router.push("https://trim-static-ui.dedicateddevelopers.us/");
          //   router.push("/admin/dashboard");
        }
      },
      onError: (error: any) => {
        // console.log("error drfgrg", error);
      }
    });
  };

  return (
    <>
      <WrapperSteps>
        <StepFormWrappersStyled>
          <StepperHeaderLogo backBtnHide>
            <Box className="consult_wrap_gap shape_backs auth_pages">
              <Box className="shape_backs_imgs step3" />
              <Box className="consult_work_steps step_relative_main">
                <Container fixed>
                  <Box className="consult_work_steps_wrpsd step1Wrap">
                    <Box className="head_center_tps">
                      <Typography variant="h2" className="cmn_head">
                        <Typography variant="caption">Welcome</Typography> back
                      </Typography>
                    </Box>
                    <Box className="lets_start_nameGrid">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid
                          container
                          rowSpacing={3.8}
                          columnSpacing={{ xs: 2, sm: 5, md: 10 }}
                          className="lets_start_nameGrid_row"
                        >
                          <Grid
                            item
                            md={12}
                            xs={12}
                            className="lets_start_nameGrid_col"
                          >
                            <InputFieldCommon
                              placeholder="Email"
                              {...register("email")}
                            />
                            <Typography variant="body2" color="error">
                              {errors.email?.message}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            md={12}
                            xs={12}
                            className="lets_start_nameGrid_col password_field"
                          >
                            <InputFieldCommon
                              isPassword
                              placeholder="Password"
                              {...register("password")}
                            />
                            <Typography variant="body2" color="error">
                              {errors.password?.message}
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            md={12}
                            xs={12}
                            className="lets_start_nameGrid_col"
                          >
                            <CustomButtonPrimary
                              type="submit" // Change type to "submit"
                              variant="contained"
                              color="primary"
                              className="next_arrow_btns gap_btms_nextar"
                            >
                              {isLoading ? (
                                <>
                                  Loading...
                                  {/* <CircularProgress /> */}
                                </>
                              ) : (
                                <Typography variant="caption">
                                  Login
                                  <i className="next_arr" />
                                </Typography>
                              )}
                            </CustomButtonPrimary>
                          </Grid>

                          <Grid
                            item
                            md={12}
                            xs={12}
                            className="lets_start_nameGrid_col"
                          >
                            <Box className="forgot_pass">
                              <Typography variant="body1">
                                <Link
                                  href="javascript:void(0)"
                                  onClick={() => UpdateStepWelcome(2)}
                                >
                                  Forgot your Password?
                                </Link>
                              </Typography>
                            </Box>
                            <Box className="already_account_text">
                              <Typography variant="body1">
                                Don’t have an account ?
                                <Link
                                  href="/auth/signup"
                                  // onClick={() => UpdateStepWelcome(3)}
                                >
                                  Sign Up
                                </Link>
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </form>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </StepperHeaderLogo>
        </StepFormWrappersStyled>
      </WrapperSteps>
    </>
  );
}
