import React from "react";
import style from "./form.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Index = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [arr,setArr]=useState([])

  const handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log("formErrors", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("formValues", formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const contactRegex = /^(\+91-|\+91|0)?\d{10}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (!values.firstname) {
      errors.firstname = "First Name is required !";
    }else if(values.firstname.length<3 ){
      errors.firstname = "First Name should be greater than 3 !";
    }else if(values.firstname.length>10 ){
      errors.firstname = "First Name should be less than 10 !";
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is required !";
    }

    if (!values.email) {
      errors.email = "Email is required !";
    }else if(!emailRegex.test(values.email)){
      errors.email = "Email is Not Valid !";
    }

    if (!values.contact) {
      errors.contact = "Contact is required !";
    }else if(!contactRegex.test(values.contact)){
      errors.contact = "Contact is Invalid !";
    }

    if (!values.password) {
      errors.password = "Password is required !";
    }else if(!passRegex.test(values.password)){
      errors.password = "required, minimum 8 char, atleast one uppercase, one lowercase, one number and one special char required !";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required !";
    }else if(values.password !== values.confirmpassword){
      errors.confirmpassword = "Password and Confirm Password doesn't match !";
    }
    return errors;
  };

  // const a=()=>{
  //   setArr((prv)=>[...prv,"abc"])
  // }

  // const b=()=>{
  //   setArr((prv)=>[...prv,"xyz"])
  // }

  // console.log("arr",arr)

  return (
    <form className={style.form} onSubmit={handleSubmit}> 
      <span className={style.title}>Registration Page</span>
      <div className={style.divider}></div> 
      <div className={style.formContainer}>

        <div className={style.row}>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>FirstName :</label>
              <input
                name="firstname"
                className={style.input}
                type="text"
                placeholder="First Name"
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <p className={style.errmsg}>{formErrors.firstname}</p>
          </div>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>LastName :</label>
              <input
                name="lastname"
                className={style.input}
                type="text"
                placeholder="Last Name"
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
            <p className={style.errmsg}>{formErrors.lastname}</p>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>Email :</label>
              <input
                name="email"
                className={style.input}
                type="text"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className={style.errmsg}>{formErrors.email}</p>
          </div>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>Contact :</label>
              <input
                name="contact"
                className={style.input}
                type="text"
                placeholder="Contact"
                value={formValues.contact}
                onChange={handleChange}
              />
            </div>
            <p className={style.errmsg}>{formErrors.contact}</p>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>Password :</label>
              <input
                name="password"
                className={style.input}
                type="text"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className={`${style.errmsg} ${style.passerr}`}>{formErrors.password}</p>
          </div>
          <div className={style.formfield}>
            <div className={style.field}>
              <label className={style.label}>Confirm Password :</label>
              <input
                name="confirmpassword"
                className={style.input}
                type="text"
                placeholder="Confirm Password"
                value={formValues.confirmpassword}
                onChange={handleChange}
              />
            </div>
            <p className={style.errmsg}>{formErrors.confirmpassword}</p>
          </div>
        </div>

        <button className={style.submit}>Submit</button>
      </div>
      {/* <button onClick={()=>{
        a()
        b()
      }}>Click</button> */}
    </form>
  );
};

export default Index;
