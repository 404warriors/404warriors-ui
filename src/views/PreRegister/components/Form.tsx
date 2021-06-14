import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import { Formik, Form as FormikForm } from "formik";
import { useFormStyles } from "./styles";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);
API.configure(awsconfig);

const Form = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useFormStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <Formik
      initialValues={{
        email: "",
        fullName: "",
        phone: "",
      }}
      onSubmit={(v) => {
        API.post("registerApi", "/register", {
          body: v,
        });
      }}
      validateOnBlur
      render={(formik) => (
        <FormikForm className={classes.form}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Full name
              </Typography>
              <TextField
                placeholder="Your full name"
                variant="outlined"
                size="medium"
                name="fullName"
                fullWidth
                type="text"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                E-mail
              </Typography>
              <TextField
                placeholder="Your e-mail address"
                variant="outlined"
                size="medium"
                name="email"
                fullWidth
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Phone Number
              </Typography>
              <MuiPhoneNumber
                name="phone"
                variant="outlined"
                fullWidth
                defaultCountry={"us"}
                onChange={(v) => formik.setFieldValue("phone", v)}
              />
            </Grid>
            <Grid item container justify="center" xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </FormikForm>
      )}
    />
  );
};

export default Form;
