import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css"
import MediaBar from "../MediaBar";
import FormButton from "../FormButton";
import Keys from "../../Constants/Keys";
import LoginPopUpPage from "../../Components/PopupMessage/LoginPopUpPage";
import Popup from "../PopupMessage/Popup/Popup";
import SmallSizeFormButton from "../SmallSizeFormButton/SmallSizeFormButton";

const LoginForm = ({onFormSubmit}) => {
  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => (!prev));
  };

  const handleCancelClick = (text) => {
    setIsVisible(!isVisible);
  }
  const handleHomeClick = () => {
    navigate("/userProfileUpdate");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(`${Keys.base_url}/login`, {
        username,
        userpassword
      });
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("auth_token", token);

      
      //setIsLoggedIn(true);
      setIsLoading(false);
      handleCancelClick();
      // navigate("/userProfileUpdate");
      setUsername("");
      setPassword("");
      

      
      /*if (onFormSubmit) {
        onFormSubmit();
      } else {
        navigate("/dashboard");
      }*/
    } catch (error) {
      setIsLoading(false);
      console.error("Error logging in: ", error);
      setUsername("");
      setPassword("");
      setError("Invalid username or password");

    }
    
  };
  return (
    <div className="container">
      {isLoading && (
        <div className="loading">
          <center>Loading...</center>
        </div>
      )}
      <Popup isVisible={isVisible}
       handleCancelClick={handleCancelClick}
    text="Login Successful!"
    button={<SmallSizeFormButton name="User Profile" onClick={handleHomeClick}/>} />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="welcomeBack">
          <h3>Welcome Back</h3>
          <p className="welcomeMsg">Glad to see you again!</p>
        </div>
        <div className="formContainer">
          <label htmlFor="username">Enter your email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="enter your password"
            value={userpassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={showPassword ? faLockOpen : faLock}
            className="loginlockicon"
            onClick={togglePassword}
          />
          {error && <div className="error">{error}</div>} 
          <a href="/forgotPassword" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <FormButton type="submit" name="Login" />
        <MediaBar
          registerText="Or Login with"
          alreadyHaveAccountText="Don't have an account?"
          loginText="Create Account" />
      </form>
      {/* {isLoggedIn && (
        <div className="popupContainer">
          <LoginPopUpPage isOpen={isLoggedIn} />
        </div>
      )} */}
    </div>
  );
};
export default LoginForm;
