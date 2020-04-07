import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik/dist/index';
import { InputField } from '../../../components';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';
const ForgotPassword = () => {
  const dispatch = useDispatch();

  const statusFromDb = useSelector(state => state.ForgotPasswordReducer.status);

  useEffect(() => {
    document.title = 'Forgot Password ';
  }, []);

  if (process.env.COMING_SOON == 'YES') {
    return <Redirect to={`/comingsoon`} />;
  }

  const [publicCssLoaded, setPublicCssLoaded] = useState(false);
  const handleScriptInject = ({ linkTags }) => {
    if (linkTags && linkTags.length > 0) {
      const linkTag = linkTags[0];
      linkTag.onload = handleOnLoad;
    }
  };

  let PublicCssLoad = useSelector(state => state.common.publicCssLoad);
  const handleOnLoad = () => {
    setTimeout(async () => {
      dispatch(Actions.publicCssLoad());
    }, 2000);
    document.body.style.display = 'block';
  };

  useEffect(() => {
    if (PublicCssLoad == true) {
      setPublicCssLoaded(PublicCssLoad);
    }
  }, [PublicCssLoad]);
  return (
    <>
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) =>
          handleScriptInject(addedTags)
        }
      >
        <title>Forgot Password - Vonza</title>
        <html className="height-auto" />
        <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;display=swap"
          rel="stylesheet"
        ></link>
        <body className="header-less" />
      </Helmet>
      {publicCssLoaded == true && (
        <div id="wrapper" role="main">
          <div className="container h-100">
            <div className="row  h-100">
              <div className="col-lg-10 col-md-12 m-auto">
                <div
                  className="floating-widget forgot-password"
                  id="forgot-password"
                >
                  <div className="row h-100">
                    <div className="col-lg-5 col-md-6 col-12 left-panel h-100 equal-rows">
                      <div className="left-panel-header">
                        <div className="left-logo">
                          <a href="/" className="d-inline-block">
                            {' '}
                            <img
                              src="./images/logo-transparent.png"
                              alt="Vonza"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="left-panel-content">
                        <div className="text-holder">
                          <p>
                            Vonza gives you everything you need in one platform.
                            You can create, market and sell online courses,
                            products and services.{' '}
                          </p>
                        </div>
                      </div>

                      <div className="left-panel-footer">
                        <div className="mt-auto">
                          <img
                            src="./images/forgot-password/icon-security.png"
                            alt="Security Icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-12 right-panel h-100">
                      <div className="top-content-holder">
                        <div className="form-holder h-100 d-flex justify-content-center">
                          <div className="my-auto w-100">
                            <div
                              className="content-header"
                              style={{
                                textAlign: 'center',
                                maxWidth: 380,
                                margin: '0 auto 50px',
                                fontWeight: 'lighter'
                              }}
                            >
                              <img
                                style={{
                                  margin: '0 0 30px'
                                }}
                                className="head-icon"
                                src="./images/forgot-password/reset_forgot_password.png"
                                alt="icon"
                              />
                              <h2
                                className="heading"
                                style={{
                                  fontSize: 16,
                                  color: '#667284',
                                  lineHeight: 1.444,
                                  fontWeight: 'lighter'
                                }}
                              >
                                {statusFromDb !== undefined &&
                                statusFromDb !== null &&
                                statusFromDb !== ''
                                  ? ``
                                  : `Please enter your email address. You will
                                receive instructions to reset your password in
                                your inbox`}
                              </h2>
                            </div>
                            <Formik
                              initialValues={{
                                email: ''
                              }}
                              onSubmit={async (
                                values,
                                { setSubmitting, setStatus }
                              ) => {
                                setStatus('');
                                try {
                                  const userObject = {
                                    user_id: values.email
                                  };
                                  dispatch(
                                    Actions.SendMailForChangeUserPassword(
                                      userObject.user_id
                                    )
                                  );
                                } catch (error) {}
                              }}
                              validate={values => {
                                const errors = {};

                                if (!values.email) {
                                  errors.email = 'Email is Required';
                                } else if (
                                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                    values.email
                                  )
                                ) {
                                  errors.email = 'Invalid email address';
                                }
                                return errors;
                              }}
                            >
                              {props => {
                                const {
                                  touched,
                                  errors,
                                  isSubmitting,
                                  handleSubmit
                                } = props;
                                return statusFromDb !== undefined &&
                                  statusFromDb !== null &&
                                  statusFromDb !== '' ? (
                                  <h2
                                    className="heading"
                                    style={{
                                      fontSize: 16,
                                      color: '#667284',
                                      lineHeight: 1.444,
                                      fontWeight: 'lighter',
                                      textAlign: 'center'
                                    }}
                                  >
                                    Please check your inbox. You will receive an
                                    email with instructions on how to reset your
                                    password in a few minutes
                                  </h2>
                                ) : (
                                  <Form className="form w-380">
                                    <div className="form-row">
                                      <div className="form-control-holder col-12">
                                        <label
                                          htmlFor="email"
                                          style={{
                                            fontSize: 13,
                                            color: '#4e5a6b',
                                            margin: '0 0 5px'
                                          }}
                                        >
                                          Email Address
                                        </label>
                                        <Field
                                          style={{
                                            height: 50,
                                            borderRadius: 4,
                                            border: '1px solid #cecece',
                                            fontSize: '14px',
                                            color: '#2f3341'
                                          }}
                                          name="email"
                                          component={InputField}
                                          type="email"
                                          placeholder="Enter email Address"
                                          className={
                                            'form-control ' +
                                            (errors.email &&
                                              touched.email &&
                                              'error')
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row mb-0">
                                      <button
                                        disabled={statusFromDb}
                                        className="form-btn"
                                        type="submit"
                                      >
                                        Reset Password
                                      </button>
                                    </div>
                                  </Form>
                                );
                              }}
                            </Formik>
                          </div>
                        </div>
                      </div>
                      <div className="right-panel-footer">
                        <p>
                          {' '}
                          Don't have an account?{' '}
                          <Link to="/signup" className="action-link">
                            {' '}
                            Sign Up{' '}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ForgotPassword };
