import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "./../../store/actions";

const Verifyingauth = ({ history, match }) => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(history.location.search);
  const platform_id = params.get("state");
  const stripe_code = params.get("code");
  useEffect(() => {
    if (platform_id) {
      dispatch(
        Actions.getParamsandVerifyingPayment({ platform_id, stripe_code })
      );
    }
  }, []);

  const [tokenData, setTokenData] = useState();

  let responceFromServerStripe = useSelector(
    state => state.PlatformPaymentReducer.responceFromServerStripe
  );
  useEffect(() => {
    if (responceFromServerStripe && responceFromServerStripe.code == "200") {
      setTokenData(responceFromServerStripe.data);
    }
  }, [responceFromServerStripe]);

  useEffect(() => {
    if (tokenData && tokenData != null && tokenData != undefined) {
      localStorage.setItem("user_name", tokenData.platform_name);
      localStorage.setItem("stripe_id", tokenData._id);
      localStorage.setItem("platform_id", tokenData._id);
      localStorage.setItem("sub_domain", tokenData.domain);
      if (localStorage.getItem("stripe_id") !== null) {
        document.querySelector(".domain_name_sub_domain").click();
      }
    }
  }, [tokenData]);

  const sub_domain = localStorage.getItem("sub_domain");
  return (
    <>
      <div>Verifying Stripe Account...</div>
      <a
        className="domain_name_sub_domain"
        href={`http://${sub_domain}/admin/payment`}
      ></a>
    </>
  );
};

export { Verifyingauth };
