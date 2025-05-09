import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import Logo from "../../assets/Logo.png";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api";

const SignIn = () => {
  const navigate = useNavigate();
  const [formfields, setFormfields] = useState({
      email: "",
      password: "",
      isAdmin: true,
    });

    const onChangeInput = (e) => {
        setFormfields(() => ({
          ...formfields,
          [e.target.name]: e.target.value,
        }));
      };
      const signIn = (e) => {
        e.preventDefault();
    
        if (formfields.email === "") {
          alert("Please Enter email");
          return;
        }
        if (formfields.password === "") {
          alert("Please Enter password");
          return;
        }
    
        postData("/api/v1/signin", formfields)
          .then((res) => {
            try {
              console.log("Response received:", res);
              localStorage.setItem("token", res.token);
              const user = {
                name: res.existUser?.name,
                email: res.existUser?.email,
                userID:res.existUser._id
              }
              localStorage.setItem("user",JSON.stringify(user));
              
              context.setUser({
                name: res.existUser?.name,
                email: res.existUser?.email,
                
              });
              alert("Login Successfully!");
              window.location.href='/'
            } catch (error) {
              console.log("Error in try block:", error);
            }
          })
          .catch((err) => {
            console.log("API Error:", err);
            alert("Something went wrong. Please try again.");
          });
        }
  const context = useContext(MyContext);
  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="section signInPage">
        <div className="container">
          <div className="box shadow-2xl">
            <div className="text-center">
              <img class="rounded mx-auto d-block" alt="logo" src={Logo} />
            </div>
            <form onSubmit={signIn}>
              <h2>Sign In</h2>  
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
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  className="w-100"
                  label="Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={onChangeInput}
                  required
                />
              </div>
              <a>Forgot Password?</a>
              <div className="m-2 d-flex align-items-center row ">
              <div className="row w-100">
                  <div className="col-md-6">
                    <Button className="btn-blue w-100 bg-blue btn-big btn-lg "  type="submit">
                      Sign in
                    </Button>
                  </div>
                  <div className="col-md-6 ">
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
              <p className="mt-3">Not Register? <Link to='/signUp' className="border-effect">Sign Up</Link></p>
              <h6 className=" text-center font-weight-bold">Or continue with social account</h6>
              <Button className="loginwithGoogle w-100 mt-3" variant="outlined"><FcGoogle/> Login with Google</Button>
             </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
