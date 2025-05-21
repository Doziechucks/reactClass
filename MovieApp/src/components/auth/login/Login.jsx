import React, { useState } from "react";
import CustomButton from "../../../reuseable/CustomButton";
import style from "./Login.module.css"
import { useLoginMutation } from "../../../service/userAuthApi"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const userDetails  = {
        email: "",
        password: "",
    }
    
    const [loginData, setLoginData] = useState(userDetails);

    const [login, { isLoading, isError}] = useLoginMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(pre =>({...pre, [name]: value}))
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData).unwrap();
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <div className={style.loginContainer}>
                <div id={style.form}>
                    <form onSubmit={submitHandler}>
                        <div className={style.inputGroup}>
                            <label htmlFor="email"></label>
                            <input type="text"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="password"></label>
                            <input type="text"
                                name="password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <CustomButton
                            type="submit"
                            text={isLoading ? "Loading..." : "Login"}/>
                        </div>
                        <div className={style.linkContainer}>
                            <Link to="/signup" className={style.signupLink}>
                            Don't have an account? Sign Up</Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )

}

export default Login;
 