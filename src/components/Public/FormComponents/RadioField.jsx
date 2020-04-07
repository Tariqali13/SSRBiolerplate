import React from "react";

import { getIn } from "formik";
import { Input } from "reactstrap";

const RadioField = ({ field, form, variant, label, ...props }) => {
  const { name } = field;
  const { errors } = form;

  const fieldError = getIn(errors, name);

  return (
    <>
      <Input {...field} type={"checkbox"} /> {label}
      {fieldError && <div className="field-error">{fieldError}</div>}
    </>
  );
};

export default RadioField;
