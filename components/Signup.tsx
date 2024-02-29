import { useUserRegister } from "@/hooks/react-qurey/query-hooks/authQuery.hooks";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
// Define Yup schema for form validation
const schema = yup.object().shape({
  first_name: yup.string().trim().required("First name is required"),
  last_name: yup.string().trim().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Create password & confirm password is mismatch"
    )
    .required("Confirm password is required")
});

// Define form data interface
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function Signup({ stepWelcome, UpdateStepWelcome }: any) {
  //   const [stepWelcome, UpdateStepWelcome] = useState(0);
  const { mutate: userRegister, isLoading } = useUserRegister();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema) // Integrate Yup validation resolver
  });

  //   const onSubmit: SubmitHandler<FormData> = (data: any) => {
  //     // Handle form submission
  //     console.log(data);
  //   };

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    const { email, password, first_name, last_name, confirm_password } = data;
    const payLoad = {
      email,
      password,
      confirm_password,
      first_name,
      last_name
    };
    userRegister(payLoad, {
      onSuccess: () => {
        // alert("called");
        UpdateStepWelcome(1);
      },
      onError: (error: any) => {
        // console.log("error drfgrg", error);
      }
    });
  };

  return (
    <div>
      <Box className="consult_work_steps_wrpsd step3Wrap">
        <Box className="head_center_tps" style={{ marginBottom: "63px" }}>
          <Typography variant="h2" className="cmn_head">
            <Typography variant="caption">Let’s</Typography> get started
          </Typography>
        </Box>

        <Box className="lets_start_nameGrid">
          <Grid
            container
            rowSpacing={3.8}
            columnSpacing={{ xs: 2, sm: 5, md: 10 }}
            className="lets_start_nameGrid_row"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid item md={12} xs={12}>
                <Grid
                  container
                  rowSpacing={3.8}
                  columnSpacing={{ xs: 2, sm: 5, md: 10 }}
                  className="lets_start_nameGrid_row"
                >
                  <Grid item md={6} xs={12} className="lets_start_nameGrid_col">
                    <InputFieldCommon
                      placeholder="Your first name*"
                      {...register("first_name")}
                    />
                    <Typography variant="body2" color="error">
                      {errors.first_name?.message}
                    </Typography>
                  </Grid>

                  <Grid item md={6} xs={12} className="lets_start_nameGrid_col">
                    <InputFieldCommon
                      placeholder="Your Last name*"
                      {...register("last_name")}
                    />
                    <Typography variant="body2" color="error">
                      {errors.last_name?.message}
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={12}
                    xs={12}
                    className="lets_start_nameGrid_col"
                  >
                    <InputFieldCommon
                      placeholder="Email*"
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
                      placeholder="Create Password*"
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
                    className="lets_start_nameGrid_col password_field"
                  >
                    <InputFieldCommon
                      isPassword
                      placeholder="Confirm Password*"
                      {...register("confirm_password")}
                    />
                    <Typography variant="body2" color="error">
                      {errors.confirm_password?.message}
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={12}
                    xs={12}
                    className="lets_start_nameGrid_col password_field"
                  >
                    <Box className="already_account_text">
                      <Typography variant="body1">
                        By clicking below agree to our{" "}
                        <Link href="javascript:void(0)">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="javascript:void(0)">Privacy Policy.</Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                md={12}
                xs={12}
                className="lets_start_nameGrid_col custom_login_primary_btns"
              >
                <CustomButtonPrimary
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="next_arrow_btns"
                >
                  {isLoading ? (
                    <>Loading...</>
                  ) : (
                    <Typography variant="caption">
                      Sign Up
                      <i className="next_arr" />
                    </Typography>
                  )}
                </CustomButtonPrimary>

                <Box className="already_account_text gaptp">
                  <Typography variant="body1">
                    Already have an account ?
                    <Link
                      href="javascript:void(0)"
                      onClick={() => UpdateStepWelcome(1)}
                    >
                      Log in here
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </form>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
