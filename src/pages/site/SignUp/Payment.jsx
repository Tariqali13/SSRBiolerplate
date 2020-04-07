import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Inputmask from "inputmask";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { history } from "../../../index";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";
import { CDN_URL } from "../../../constants";
const add_payments = gql`
  mutation AddPayments(
    $token: String!
    $user_id: String!
    $user_email: String!
    $description: String!
    $planId: String!
    $planType: String!
    $plan_recurring_option: String!
  ) {
    AddPayment(
      token: $token
      user_id: $user_id
      user_email: $user_email
      description: $description
      planId: $planId
      planType: $planType
      plan_recurring_option: $plan_recurring_option
    ) {
      token
      user_id
      user_email
      description
      planId
      planType
      plan_recurring_option
      error
    }
  }
`;
const Payment = props => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("vonza:token");

  if (!token) {
    return <Redirect to={`/signup`} />;
  }

  const [disabledPaymentButton, setDisabledPaymentButton] = useState(false);
  const [billed, setbilled] = useState("");
  const [AddPayment] = useMutation(add_payments);
  const [state, setState] = useState({
    cvc: "",
    message: "",
    expMonth: "",
    formProcess: false,
    error_message: ""
  });
  const [CreditCardNo, setCreditCardNo] = useState("");

  useEffect(() => {
    loadStripe();
  }, []);

  let selector = document.getElementsByClassName("expiry");
  let im = new Inputmask("99/99");
  im.mask(selector);

  const ChangeHandleForCreditCardNo = e => {
    if (e.target.name == "CreditCardNo") {
      let cardno = new Inputmask("9999-9999-9999-9999");
      let cardno2 = new Inputmask("9999-999999-99999");
      if (
        e.target.value.indexOf("34") === 0 ||
        e.target.value.indexOf("37") === 0
      ) {
        cardno2.mask(e.target);
        setCreditCardNo(e.target.value);
      } else {
        cardno.mask(e.target);
        setCreditCardNo(e.target.value);
      }
    } else {
      setCreditCardNo(e.target.value);
    }
  };

  const handleChange = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  const pay = e => {
    e.preventDefault();
    setDisabledPaymentButton(true);
    setState({
      ...state,
      formProcess: true
    });
    let str = state.expMonth;
    let res = str.split("/");
    window.Stripe.card.createToken(
      {
        number: CreditCardNo,
        exp_month: res[0],
        exp_year: res[1],
        cvc: state.cvc
      },
      (status, response) => {
        if (status === 200) {
          setState({
            ...state,
            message: `Success! Card token ${response.card.id}.`,
            formProcess: false,
            token: response.id
          });
          AddPayment({
            variables: {
              token: response.id,
              user_email: localStorage.getItem("user_email"),
              user_id: localStorage.getItem("user_id"),
              description: `${localStorage.getItem(
                "user_id"
              )} subscribed for  ${localStorage.getItem("price")}`,
              planId: localStorage.getItem("planId"),
              planType: localStorage.getItem("price"),
              plan_recurring_option: localStorage.getItem("billed")
            }
          })
            .then(res => {
              if (res.data.AddPayment.error == "") {
                history.push("/questions");
                setDisabledPaymentButton(false);
              } else {
                setState({
                  ...state,
                  error_message:
                    "There's an error in payment process. Please try again!",
                  formProcess: false
                });
                setDisabledPaymentButton(false);
              }
            })
            .catch(error => {
              setState({
                ...state,
                error_message:
                  "There's an error in payment process. Please try again!",
                formProcess: false
              });
              setDisabledPaymentButton(false);
            });
        } else {
          setState({
            ...state,
            error_message: response.error.message,
            formProcess: false
          });
          setDisabledPaymentButton(false);
        }
      }
    );
  };

  const loadStripe = () => {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(process.env.StripeKey);
      };
      window.document.body.appendChild(s);
    }
  };

  const handleScriptInject = ({ linkTags }) => {
    if (linkTags && linkTags.length > 0) {
      const linkTag = linkTags[0];
      linkTag.onload = handleOnLoad;
    }
  };
  const handleOnLoad = () => {
    document.body.style.display = "block";
  };

  const handleToMonthlyPlan = () => {
    if (localStorage.getItem("price") == "Basic Plan") {
      localStorage.setItem("planId", process.env.MONTHLY_BASIC_PLAN);
      localStorage.setItem("plan", process.env.MONTHLY_BASIC_PRICE);
    }
    if (localStorage.getItem("price") == "Pro Plan") {
      localStorage.setItem("planId", process.env.MONTHLY_PRO_PLAN);
      localStorage.setItem("plan", process.env.MONTHLY_PRO_PRICE);
    }
    if (localStorage.getItem("price") == "Premium Plan") {
      localStorage.setItem("planId", process.env.MONTHLY_PREMIUM_PLAN);
      localStorage.setItem("plan", process.env.MONTHLY_PREMIUM_PRICE);
    }
    localStorage.setItem("billed", "Monthly");
    setbilled("Monthly");
  };

  const handleToYearlyPlan = () => {
    if (localStorage.getItem("price") == "Basic Plan") {
      localStorage.setItem("planId", process.env.YEARLY_BASIC_PLAN);
      localStorage.setItem("plan", process.env.YEARLY_BASIC_PRICE);
    }
    if (localStorage.getItem("price") == "Pro Plan") {
      localStorage.setItem("planId", process.env.YEARLY_PRO_PLAN);
      localStorage.setItem("plan", process.env.YEARLY_PRO_PRICE);
    }
    if (localStorage.getItem("price") == "Premium Plan") {
      localStorage.setItem("planId", process.env.YEARLY_PREMIUM_PLAN);
      localStorage.setItem("plan", process.env.YEARLY_PREMIUM_PRICE);
    }
    localStorage.setItem("billed", "Yearly");
    setbilled("Yearly");
  };
  useEffect(() => {
    document.title = "Payments ";
  }, []);

  useEffect(() => {
    setbilled(localStorage.getItem("billed"));
  }, []);
  return (
    <>
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) =>
          handleScriptInject(addedTags)
        }
      >
        <html className="height-auto" />
        <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
        <body className="header-less" />
      </Helmet>
      <div id="wrapper" role="main">
        <div className="container h-100">
          <div className="row  h-100">
            <div className="col-md-8 col-lg-6 m-auto">
              <div className="floating-widget h-auto" id="sign-up-3">
                <div className="row h-100">
                  <div className="col-12  right-panel h-100">
                    <div className="top-content-holder">
                      <div className="form-holder h-100 d-flex">
                        <div className="my-auto w-100">
                          <div className="text-center mb-5">
                            <Link to="/" className="d-inline-block">
                              {" "}
                              <img
                                src={`${CDN_URL}/assets/logo-transparent.png`}
                                alt="Vonza"
                              />{" "}
                            </Link>
                          </div>
                          <form
                            className="form w-380"
                            onSubmit={!disabledPaymentButton && pay}
                          >
                            <h3 className="payment-heading">
                              Complete Your Purchase
                            </h3>
                            {!!state.error_message && (
                              <div className="alert alert-danger" role="alert">
                                {state.error_message}
                              </div>
                            )}
                            <div className="form-row">
                              <div className="form-control-holder col-12">
                                <label htmlFor="card">Payment Method</label>
                                <div className="payment-methods readonly-input text-center">
                                  <img
                                    src={`${CDN_URL}/assets/stripe-logo.png`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-control-holder col-12">
                                <label htmlFor="CreditCardNo">
                                  Card Number
                                </label>
                                <div className="card-number-holder show">
                                  <input
                                    type="text"
                                    id="CreditCardNo"
                                    className="form-control"
                                    onChange={ChangeHandleForCreditCardNo}
                                    placeholder="____-____-____-____"
                                    maxLength="20"
                                    name="CreditCardNo"
                                    value={CreditCardNo}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-row mb-40">
                              <div className="col-lg-6 col-12">
                                <div className="form-control-holder">
                                  <label htmlFor="expiry">Expiry</label>
                                  <input
                                    type="text"
                                    id="expiry"
                                    name="expMonth"
                                    className="form-control expiry"
                                    onChange={handleChange}
                                    value={state.expMonth}
                                    placeholder="MM/YY"
                                    maxLength="5"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-12">
                                <div className="form-control-holder">
                                  <label htmlFor="cvv">CVV</label>
                                  <input
                                    type="password"
                                    id="cvv"
                                    name="cvv"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={state.cvv}
                                    placeholder="..."
                                    maxLength="3"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-row text-holder">
                              <h6
                                className="w-100"
                                style={{ textAlign: "center" }}
                              >
                                {localStorage.getItem("billed") === "Yearly" ? (
                                  <p
                                    onClick={handleToMonthlyPlan}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Switch to Monthly
                                  </p>
                                ) : (
                                  <p
                                    onClick={handleToYearlyPlan}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Switch to Yearly
                                  </p>
                                )}{" "}
                              </h6>
                              <p className="tnc-text">
                                You have chosen the{" "}
                                {localStorage.getItem("price")} and you will be
                                billed $
                                {localStorage.getItem("billed") === "Yearly"
                                  ? localStorage.getItem("plan") * 12
                                  : localStorage.getItem("plan")}{" "}
                                {billed} no risk. no contract. Cancel anytime.
                              </p>
                            </div>
                            <div className="form-row mb-0">
                              <button
                                className="form-btn mw-210"
                                disabled={disabledPaymentButton}
                              >
                                {`Pay $${
                                  localStorage.getItem("billed") === "Yearly"
                                    ? localStorage.getItem("plan") * 12
                                    : localStorage.getItem("plan")
                                }`}
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Payment };
