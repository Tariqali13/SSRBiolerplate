import React, { Component,createElement } from "react";

import Select from "react-select";
import { getIn } from "formik";

const SelectField = ({ field, form, options, ...props }) => {
  const { name } = field;
  const { errors } = form;

  const fieldError = getIn(errors, name);

  const selection = options.find(option => option.value === field.value);
  return (
    <>
      <Select
        name={name}
        value={selection}
        onChange={value => form.setFieldValue(name, value.value)}
        options={options}
        {...props}
      />
      {fieldError && <span className="field-error">{fieldError}</span>}
    </>
  );
};

export default SelectField;
