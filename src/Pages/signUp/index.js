import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/Logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
   const [formfields, setFormfields] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    conformPassword: "",
    isAdmin: false,
  });

  const onChangeInput = (e) => {
      setFormfields(() => ({
        ...formfields,
        [e.target.name]: e.target.value,
      }));
    };
    const signUp = (e) => {
      e.preventDefault();
      if (formfields.name === "") {
        alert("Please Enter Name");
      }
      if (formfields.email === "") {
        alert("Please Enter email");
      }
      if (formfields.password === "") {
        alert("Please Enter password");
      }
      if (formfields.conformPassword === "") {
        alert("Please Enter conformPassword");
      }
      if (formfields.conformPassword !== formfields.password) {
        alert("Password Not Match");
       
      }
      postData("/api/v1/signup", formfields)
        .then((res) => {
          alert("Registered Successfully!");
          setTimeout(() => {
            navigate("/signIn");
          }, 500);
        })
        .catch((err) => {
          alert("Something went wrong. Please try again.");
        });
    };
  
  const context = useContext(MyContext);
  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="section signInPage signUpPage">
        <div className="container">
          <div className="box shadow-2xl">
            <div className="text-center">
              <img class="rounded mx-auto d-block " alt="logo" src={Logo} />
            </div>
            <form onSubmit={signUp}>
              <h2 className="mb-2">Sign Up</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      className="w-100"
                      label="Enter Your Name"
                      variant="standard"
                      type="text"
                      name="name"
                      onChange={onChangeInput}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <TextField
                    className="w-100"
                    label="Contact No."
                    variant="standard"
                    type="text"
                    name="phone"
                    onChange={onChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  className="w-100"
                  label="Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onChange={onChangeInput}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-11">
                  <div className="form-group">
                    <TextField
                      id="standard-basic"
                      className="w-100"
                      label="Password"
                      variant="standard"
                      name="password"
                      onChange={onChangeInput}
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      required
                    />
                  </div>
                </div>
                <span
                  className="mt-3 "
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="row">
                <div className="col-md-11">
                  <div className="form-group">
                    <TextField
                      id="standard-basic"
                      className="w-100"
                      label="Password"
                      variant="standard"
                      name="conformPassword"
                      onChange={onChangeInput}
                      type={`${isShowConfirmPassword === true ? "text" : "password"}`}
                      required
                    />
                  </div>
                </div>
                <span
                  className="mt-3"
                  onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                >
                  {isShowConfirmPassword === true ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="m-2 d-flex align-items-center row ">
                <div className="row w-100">
                  <div className="col-md-6">
                    <Button className="btn-blue w-100 bg-blue btn-big btn-lg"  type="submit">
                      Sign in
                    </Button>
                  </div>
                  <div className="col-md-6 pr-0">
                    <Link to="/" className="d-block w-100">
                      <Button
                        className="bg-red btn-big w-100 btn-lg "
                        onClick={() => context.setisHeaderFooterShow(true)}
                      >
                        Cancle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mt-3">
                If you already register?{" "}
                <Link to="/signIn" className="border-effect">
                  Sign In
                </Link>
              </p>
              <h6 className=" text-center font-weight-bold">
                Or continue with social account
              </h6>
              <Button className="loginwithGoogle w-100 mt-3" variant="outlined">
                <FcGoogle /> Login with Google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
