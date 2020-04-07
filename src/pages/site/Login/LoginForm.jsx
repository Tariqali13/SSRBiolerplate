import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik/dist/index";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../../store/actions";
import { InputField } from "../../../components";
import { Link } from "react-router-dom";

const Log_in = gql`
  mutation Login($user_id: String!, $password: String!) {
    Login(user_id: $user_id, password: $password) {
      token
      _id
      full_name
      user_id
      role_id
      phone_number
      platform_id
      sub_domain
      verification_token
      msg
    }
  }
`;

const LoginForm = ({ history }) => {
  let dispatch = useDispatch();
  const [Login] = useMutation(Log_in);
  let msg = useSelector(state => state.signUp.user.msg);

  useEffect(() => {
    dispatch(clearError());
    setStatus(null);
  }, []);

  const [status, setStatus] = useState();
  useEffect(() => {
    if (msg) {
      setStatus(msg);
      if (msg == "Invalid Email/Password") {
        dispatch(clearError());
      }
    }
  }, [msg]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        setStatus("");
        const userObject = {
          user_id: values.email,
          password: values.password
        };

        try {
          const { data } = await Login({
            variables: {
              ...userObject
            }
          });
          dispatch(login(data));
        } catch (error) {
          setSubmitting(false);
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter valid email address")
          .required("Email is Required"),
        password: Yup.string().required("Password is Required")
      })}
    >
      {props => {
        const { touched, errors, isSubmitting, handleSubmit } = props;
        return (
          <Form className="form w-380">
            {!!status && (
              <div className="alert alert-danger" role="alert">
                {status}
              </div>
            )}
            <div className="form-row">
              <div className="form-control-holder col-12">
                <label htmlFor="email">Email Address</label>
                <Field
                  name="email"
                  autoFocus
                  component={InputField}
                  type="text"
                  placeholder="Enter Email"
                  className={
                    "form-control " + (errors.email && touched.email && "error")
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-control-holder col-12">
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
            <div className="form-row row">
              <div className="col-lg-6 col-12">
                {/* <div className="toggle-holder">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="Remember Me"
                    />
                    <span className="slider round"></span>
                    <span className="toggle-txt"> Remember Me</span>
                  </label>
                </div> */}
              </div>
              <div className="col-12 col-lg-6 text-right">
                <Link to="/forgot-password" className="form-link">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="form-row mb-0">
              <button className="form-btn" type="submit">
                {" "}
                Log into Vonza
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
