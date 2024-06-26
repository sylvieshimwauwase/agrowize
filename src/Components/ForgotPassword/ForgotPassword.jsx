import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css';
import Keys from "../../Constants/Keys";
import FormButton from "../FormButton";

const ForgotPassword = () => {
    const [username, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const isEmailValid = (email) => {
        // Regular expression for validating email format
        const emailRegex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isEmailValid(username)) {
            setError("Invalid email format");
            return;
        }

        try {
            const forgotResponse = await axios.post(`${Keys.base_url}/forgotPass`, { username });
            console.log(forgotResponse.data);
            navigate("/otpVerification");

            /*if (forgotResponse.data.exists) {
                setMessage(forgotResponse.data.message);
                navigate("/otpVerification");
            } else {
                setError(forgotResponse.data.error);
            }*/
        } catch (error) {
            /*console.error("Error logging in: ", error);*/
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="forgotPasswordPage">
            
            <div className="forgotPasswordForm">
                <form onSubmit={handleSubmit}>
                    <h3 className="forgotPasswordTitle">Forgot Password</h3>
                    <p className="forgotPasswordSubtitle">Enter your account email below, and we'll send a reset link</p>
                    <div className="forgotPasswordInput">
                        <label htmlFor="email" className="lbl">Enter your email address</label>
                        <input
                            className="input"
                            value={username}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }}
                            required
                        />
                        
                        {error && <p className="error">{error}</p>}
                        
                    </div>
                    <a href="/login" className="forgot-password">
                        Back to login
                    </a>
                    <FormButton name="Continue" />
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;