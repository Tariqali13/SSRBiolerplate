import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik/dist/index";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";
import { InputField } from "../../../components";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const dispatch = useDispatch();
  let InquiryEmailStatus = useSelector(
    state => state.inquiryEmail.status
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [show, setShow] = useState("none");

  // //  all handles here
  const handleMessage = (e) => {
    setMessage(e)
  }
  const handleFirstName = (e) => {
    setFirstName(e)
  }
  const handleLastName = (e) => {
    setLastName(e)
  }
  const handleEmail = (e) => {
    setEmail(e)
  }
  const handlePhone = (e) => {
    setPhone(e)
  }
  const handleMessageBlur = (e) => {
    if (e == "") {
      setMessageError(true)
    }else{
      setMessageError(false)
    }
  }
  const resetFormValues = () => {
    setMessage("")
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
  }
  useEffect(() => {
    if (InquiryEmailStatus) {
      if (InquiryEmailStatus.code == 201) {
        setShow("block");
        setTimeout(() => {
          setShow("none");
        }, 2500);
        resetFormValues()
        
      }
    };
  }, [InquiryEmailStatus]);
  return (
    <main id="main" className="main main-contact">
      <div className="container d-flex justify-content-center">
        <Formik
          enableReinitialize={true}
          initialValues={{ firstName: firstName, lastName: lastName, email: email, phone: phone, comment: message }}

          onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {

            setStatus("");
            if(!values.comment){
              setMessageError(true)
            }else{
              const inquiryObject = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone,
                message: values.comment,
              };
              dispatch(Actions.sendInquiryEmail(inquiryObject));
            }      
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("First Name is Required"),
            lastName: Yup.string().required("Last Name is Required"),
            email: Yup.string()
              .email("Please enter valid email address")
              .required("Email is Required"),
            phone: Yup.number().required("Phone number is Required"),
          })}
        >
          {props => {
            const { touched, errors, isSubmitting, handleSubmit, handleBlur, values, handleChange } = props;
            return (
              <Form className="contact-form">
                <div id= "alert" className="alert alert-success" role="alert" style={{display: show}}>Your message has been received</div>
                <h3>Send a message</h3>
                <fieldset className="text-left">
                  <legend className="sr-only">Contact Us Form</legend>
                  <div className="row mb-50">
                    <div className="col-12 col-lg-6">
                      {errors.firstName && touched.firstName ? (
                        <label className="label" style={{ color: "red" }}>
                          {errors.firstName}
                        </label>
                      ) : (
                          <label htmlFor="first-name" className="label">
                            First Name
                            </label>
                        )}
                      <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        className={"form-control " + (errors.firstName && touched.firstName && "error")}
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={e => handleFirstName(e.target.value)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      {errors.lastName && touched.lastName ? (
                        <label className="label" style={{ color: "red" }}>
                          {errors.lastName}
                        </label>
                      ) : (
                          <label htmlFor="lat-name" className="label">
                            Last Name
                            </label>
                        )}
                      <input
                        type="text"
                        id="lat-name"
                        name="lastName"
                        className={"form-control " + (errors.lastName && touched.lastName && "error")}
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={e => handleLastName(e.target.value)}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div className="col-12 col-lg-6">
                      {errors.email && touched.email ? (
                        <label className="label" style={{ color: "red" }}>
                          {errors.email}
                        </label>
                      ) : (
                          <label htmlFor="email" className="label">
                            Email
                            </label>
                        )}
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className={"form-control " + (errors.email && touched.email && "error")}
                        placeholder="Enter email address"
                        value={email}
                        onChange={e => handleEmail(e.target.value)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      {errors.phone && touched.phone ? (
                        <label className="label" style={{ color: "red" }}>
                          Please enter a valid Phone Number
                        </label>
                      ) : (
                          <label htmlFor="phone" className="label">
                            Phone Number
                            </label>
                        )}
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className={"form-control " + (errors.phone && touched.phone && "error")}
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={e => handlePhone(e.target.value)}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div className="col-12 col-lg-12">
                      {messageError ? (
                        <label className="label" style={{ color: "red" }}>
                          Comment or Message is required
                        </label>
                      ) : (
                          <label htmlFor="message" className="label">
                            Comment or Message
                              </label>
                        )}
                      <textarea
                        name="comment"
                        id="message"
                        cols="30"
                        rows="7"
                        className={"form-control " + (errors.message && touched.message && "error")}
                        placeholder="Enter Your Comment or Message here..."
                        value={message}
                        onChange={e => handleMessage(e.target.value)}
                        onBlur={e => handleMessageBlur(e.target.value)}
                      />
                    </div>
                  </div>
                </fieldset>
                <button className="btn btn-primary radius" type="submit">
                  <span>Submit</span>
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
};

export { ContactForm };


