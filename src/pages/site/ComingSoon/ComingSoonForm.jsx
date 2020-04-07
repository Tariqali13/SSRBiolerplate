import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik/dist/index";
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useDispatch, useSelector } from "react-redux";
import {emailSubscirbe, clearError} from "../../../store/actions";
import { InputField } from "../../../components";
import * as Actions from "../../../store/actions";

const Email_Subscribe = gql`
  mutation EmailSubscribe($user_id: String!) {
    EmailSubscribe(user_id: $user_id) {
      user_id
      msg
    }
  }
`;
const ComingSoonForm = () => {
   
  let dispatch = useDispatch();
  const [EmailSubscribe] = useMutation(Email_Subscribe);
  let msg = useSelector(state => state.user && state.user.msg);
  useEffect(() => {
    dispatch(clearError());
    setStatus(null);
  }, []);

  const [status, setStatus] = useState();
  useEffect(() => {
    if (msg) {
      setStatus(msg);
    }
  }, [msg]);

  return (

    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setStatus("");
        const userObject = {
          user_id: values.email
        };
        try {
          const { data } = await EmailSubscribe({
            variables: {
              ...userObject
            }
          });
          dispatch(emailSubscirbe(data));
        } catch (error) {
          setSubmitting(false);
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter valid email address")
          .required("Email is Required")
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
                  component={InputField}
                  type="text"
                  placeholder="Enter Email"
                  className={
                    "form-control " + (errors.email && touched.email && "error")
                  }
                />
              </div>
              <div className="form-control-holder col-12 mt-3">
                <span className="field-info">
                  It's going to be amazing! We will notify you when it's ready. Subscribe and win exciting gifts.
                </span>
              </div>
            </div>
            <div className="form-row mb-0">
              <button className="form-btn" type="submit">
                Subscribe
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>

  );
};

export { ComingSoonForm };
