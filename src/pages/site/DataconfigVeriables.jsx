import React, { useEffect, useState } from "react";

const DataconfigVeriables = ({ history }) => {
  const values = new URLSearchParams(history.location.search);
  const params = values.get("password");

  const {
    REACT_APP_API_URI,
    REACT_APP_GRAPHQL_URI,
    StripeKey,
    MONTHLY_BASIC_PRICE,
    MONTHLY_PRO_PRICE,
    MONTHLY_PREMIUM_PRICE,
    MONTHLY_BASIC_PLAN,
    MONTHLY_PRO_PLAN,
    MONTHLY_PREMIUM_PLAN,
    YEARLY_BASIC_PRICE,
    YEARLY_PRO_PRICE,
    YEARLY_PREMIUM_PRICE,
    YEARLY_BASIC_PLAN,
    YEARLY_PRO_PLAN,
    YEARLY_PREMIUM_PLAN,
    COMING_SOON
  } = process.env;

  return (
    <>
      {params !== null && params === "Temp/123" ? (
        <div>
          REACT_APP_API_URI ==== {REACT_APP_API_URI} <br />
          <br />
          REACT_APP_GRAPHQL_URI ==== {REACT_APP_GRAPHQL_URI} <br />
          <br />
          StripeKey ==== {StripeKey} <br />
          <br />
          MONTHLY_BASIC_PRICE ==== {MONTHLY_BASIC_PRICE} <br />
          <br />
          MONTHLY_PRO_PRICE ==== {MONTHLY_PRO_PRICE} <br />
          <br />
          MONTHLY_PREMIUM_PRICE ==== {MONTHLY_PREMIUM_PRICE} <br />
          <br />
          MONTHLY_BASIC_PLAN ==== {MONTHLY_BASIC_PLAN} <br />
          <br />
          MONTHLY_PRO_PLAN ==== {MONTHLY_PRO_PLAN} <br />
          <br />
          MONTHLY_PREMIUM_PLAN ==== {MONTHLY_PREMIUM_PLAN} <br />
          <br />
          YEARLY_BASIC_PRICE ==== {YEARLY_BASIC_PRICE} <br />
          <br />
          YEARLY_PRO_PRICE ==== {YEARLY_PRO_PRICE} <br />
          <br />
          YEARLY_PREMIUM_PRICE ==== {YEARLY_PREMIUM_PRICE} <br />
          <br />
          YEARLY_BASIC_PLAN ==== {YEARLY_BASIC_PLAN} <br />
          <br />
          YEARLY_PRO_PLAN ==== {YEARLY_PRO_PLAN} <br />
          <br />
          YEARLY_PREMIUM_PLAN ==== {YEARLY_PREMIUM_PLAN} <br />
          <br />
          COMING_SOON ==== {COMING_SOON} <br />
          <br />
        </div>
      ) : (
        "Please Enter Password in query params like password=yourpassword"
      )}
    </>
  );
};

export { DataconfigVeriables };
