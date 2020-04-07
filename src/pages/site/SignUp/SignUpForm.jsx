import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { signUp, loadingStart, clearError } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import Select from "react-select";
import { Op1 } from "./Options";
import { InputField, SelectField, RadioField } from "../../../components";

const add_users = gql`
  mutation AddUsers(
    $full_name: String!
    $user_id: String!
    $password: String!
    $role_id: String!
    $phone_number: String!
    $platform_id: String
    $is_primary_owner: String!
    $verification_token: String
  ) {
    AddUser(
      full_name: $full_name
      user_id: $user_id
      password: $password
      role_id: $role_id
      phone_number: $phone_number
      platform_id: $platform_id
      is_primary_owner: $is_primary_owner
      verification_token: $verification_token
    ) {
      token
      full_name
      _id
      user_id
      role_id
      phone_number
      is_primary_owner
      verification_token
      msg
    }
  }
`;

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, "Kindly enter at-least 5 character")
    .required("Full Name is Required"),
  email: Yup.string()
    .email("Kindly enter valid email address")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  // gender: Yup.string().required("Gender is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Please enter at-least 8 chars...")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Password does not match"),
  terms: Yup.boolean()
    .oneOf([true], "Kindly accept Terms of Use and Privacy Policy")
    .required("Kindly accept Terms of Use and Privacy Policy")
});
const SignUpForm = props => {
  const dispatch = useDispatch();
  const [AddUser] = useMutation(add_users);

  const msg = useSelector(state => state.signUp.user.msg);
  const loading = useSelector(state => state.signUp.signUpLoading);
  const [status, setStatus] = useState();

  useEffect(() => {
    if (msg) {
      setStatus(msg);
    }
  }, [msg]);
  const emailTransfer = useSelector(state => state.signUp.emailTransfer);
  const EmailFoundByPreviewsComponent =
    (props.location.state && props.location.state.email) || "";
  const NameFoundByPreviewsComponent =
    (props.location.state && props.location.state.name) || "";

  useEffect(() => {
    dispatch(clearError());
    Redirect("/signup");
    setStatus(null);
  }, []);
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        // gender: "",
        password: "",
        confirmPassword: "",
        terms: ""
      }}
      onSubmit={values => {
        const userObject = {
          full_name: values.fullName,
          user_id: values.email,
          phone_number: values.phoneNumber,
          is_primary_owner: "true",
          // gender: values.gender,
          password: values.password,
          role_id: "OP"
        };

        dispatch(loadingStart());

        AddUser({
          variables: { ...userObject }
        }).then(res => {
          dispatch(signUp(res.data));
        });
      }}
      validationSchema={SignupSchema}
    >
      {props => {
        const { touched, errors, isSubmitting } = props;

        return (
          <Form className="form w-380">
            {!!status && (
              <div className="alert alert-danger" role="alert">
                {status}
              </div>
            )}
            <div className="form-row">
              <div className="form-control-holder  col-12">
                <label htmlFor="fullName">Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  autoFocus
                  defaultValue={NameFoundByPreviewsComponent}
                  component={InputField}
                  placeholder="Enter Full Name"
                  className={
                    "form-control " +
                    (errors.fullName && touched.fullName && "error")
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="email">Email Address</label>
                <Field
                  name="email"
                  type="text"
                  component={InputField}
                  defaultValue={EmailFoundByPreviewsComponent}
                  placeholder="Enter Email"
                  className={
                    "form-control " + (errors.email && touched.email && "error")
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="email">Phone Number</label>
                <Field
                  name="phoneNumber"
                  type="text"
                  component={InputField}
                  placeholder="Enter Phone Number"
                  className={
                    "form-control " +
                    (errors.phoneNumber && touched.phoneNumber && "error")
                  }
                />
              </div>
            </div>
            {/* <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="gender">Gender</label>
                <Field
                  id="gender"
                  name="gender"
                  component={SelectField}
                  options={Op1}
                  placeholder="Select Gender"
                />
              </div>
            </div> */}
            <div className="form-row password-row">
              <div className="col-lg-6 col-12">
                <div className="form-control-holder">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    component={InputField}
                    type="password"
                    placeholder="........."
                    className={
                      "form-control " +
                      (errors.password && touched.password && "error")
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-control-holder">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    component={InputField}
                    type="password"
                    placeholder="........."
                    className={
                      "form-control " +
                      (errors.confirmPassword &&
                        touched.confirmPassword &&
                        "error")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12">
                <div className="toggle-holder text-center">
                  <label className="switch">
                    <Field
                      name="terms"
                      id="terms"
                      component={RadioField}
                      type="radio"
                      className={
                        "form-control slider round " +
                        (errors.terms && touched.terms && "error")
                      }
                    />
                    <span className="slider round"></span>
                    <span className="toggle-txt">
                      {" "}
                      I agree to the{" "}
                      <a href="/terms" target="_blank">
                        Terms of Use{" "}
                      </a>{" "}
                      and{" "}
                      <a href="/privacypolicy" target="_blank">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  {errors.terms && touched.terms && (
                    <div className="field-error">{errors.terms}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-row mb-0">
              <button className="form-btn" type="submit">
                Get Started
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default withRouter(SignUpForm);
