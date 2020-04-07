import React, { useEffect, useState } from "react";
import * as Actions from "../../store/actions";
import { history } from "../../index";
import { useDispatch, useSelector } from "react-redux";
const RedirectUserSubDomain = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  useEffect(() => {
    if (id) {
      dispatch(Actions.redirectingToSubDomain(id));
    }
  }, []);

  const [tokenData, setTokenData] = useState();

  let UserSecureDataWithToken = useSelector(
    state => state.signUp.userSecureDataWithToken
  );
  let isLoadingRedirectingUserToSubDomain = useSelector(
    state => state.signUp.loadingRedirectingUserToSubDomain
  );
  useEffect(() => {
    if (UserSecureDataWithToken && UserSecureDataWithToken.code == "200") {
      setTokenData(UserSecureDataWithToken.data);
    }
  }, [UserSecureDataWithToken]);

  useEffect(() => {
    if (tokenData && tokenData != null && tokenData != undefined) {
      localStorage.setItem("vonza:token", tokenData.jwd_token);
      localStorage.setItem("user_id", tokenData.user_id);
      localStorage.setItem("user_name", tokenData.user_name);
      localStorage.setItem("platform_id", tokenData.platform_id);
      localStorage.setItem("sub_domain", tokenData.sub_domain);
      localStorage.setItem("user_expire", tokenData.user_expire);
      history.push("/admin/dashboard");
    }
  }, [tokenData]);

  return <div>Redirecting</div>;
};

export { RedirectUserSubDomain };
