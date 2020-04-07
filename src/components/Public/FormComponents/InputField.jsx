import React from "react";

import { getIn } from "formik";
import { Input } from "reactstrap";

const InputField = ({ field, form, variant, label, ...props }) => {
  const { name } = field;
  const { errors } = form;

  const fieldError = getIn(errors, name);

  return (
    <>
      <Input
        onChange={e => form.setFieldValue(name, e.target.value)}
        name={name}
        {...props}
      />
      {fieldError && <div className="field-error">{fieldError}</div>}
    </>
  );
};

export default InputField;
