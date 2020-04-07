import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik/dist/index";
import { InputField } from "../../../components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  verifyUserTokenVonzaSitePage,
  checkVerifyTokenAndForgotPassword
} from "../../../store/actions";
import { Link, withRouter } from "react-router-dom";

const LoginForm = ({ history }) => {
  let dispatch = useDispatch();
  const queryParams = new URLSearchParams(history.location.search);
  const verification_code = queryParams.get("verification_code");
  useEffect(() => {
    dispatch(clearError());
    dispatch(verifyUserTokenVonzaSitePage(verification_code));
  }, []);
  const user_id = localStorage.getItem("user_forgot_password");

  const passwordStatus = useSelector(
    state => state.ForgotPasswordReducer.passwordStatus
  );

  const UserIdFromServerAfterVerfiyToken = useSelector(
    state => state.ForgotPasswordReducer.userIdForVonzaChangePassword
  );

  const ErrorVerifyTokenForVonzaChangePassword = useSelector(
    state => state.ForgotPasswordReducer.ErrorVerifyTokenForVonzaChangePassword
  );
  const statusCode = useSelector(state => state.ForgotPasswordReducer.code);

  useEffect(() => {
    setTimeout(() => {
      if (statusCode == "201") {
        history.push("/login");
      }
    }, 1500);
  });

  return (
    <Formik
      initialValues={{ new_password: "", confirmpassword: "" }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setStatus("");
        try {
          if (user_id) {
            const userObject = {
              user_id: user_id,
              new_password: values.new_password
            };

            dispatch(checkVerifyTokenAndForgotPassword(userObject));
          }
        } catch (error) {}
      }}
      validate={values => {
        const errors = {};
        if (values.new_password.length < 8) {
          errors.new_password = "Must be exactly 8 characters";
        }
        if (values.confirmpassword.length < 8) {
          errors.confirmpassword = "Must be exactly 8 characters";
        } else if (values.new_password !== values.confirmpassword) {
          errors.confirmpassword = "Confirm Password not Match";
        }
        return errors;
      }}
    >
      {props => {
        const { touched, errors, isSubmitting, handleSubmit } = props;
        return user_id && !ErrorVerifyTokenForVonzaChangePassword ? (
          <Form className="form w-380">
            {passwordStatus && (
              <div className="alert alert-success" role="alert">
                {passwordStatus}
              </div>
            )}
            <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="new_password">New Password</label>
                <Field
                  name="new_password"
                  autoFocus
                  component={InputField}
                  type="password"
                  placeholder=".........."
                  className={
                    "form-control " +
                    (errors.new_password && touched.new_password && "error")
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="confirmpassword">Confirm New Password</label>
                <Field
                  name="confirmpassword"
                  component={InputField}
                  type="password"
                  placeholder=".........."
                  className={
                    "form-control " +
                    (errors.confirmpassword &&
                      touched.confirmpassword &&
                      "error")
                  }
                />
              </div>
            </div>
            <div className="form-row mb-0">
              <button className="form-btn" type="submit">
                {" "}
                Save
              </button>
            </div>
          </Form>
        ) : (
          <div>{ErrorVerifyTokenForVonzaChangePassword}</div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginForm);
