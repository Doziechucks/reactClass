import React, { useState } from "react";
import CustomButton from "../../../reuseable/CustomButton";
import style from "./Login.module.css"
import { useLoginMutation } from "../../service/userAuthApi.jsx"
import {Link, useNavigate} from "react-router"

const Login = () => {

    const navigate = useNavigate()

    const userDetails  = {
        email: "",
        password: "",
    }
    
    const [loginData, setLoginData] = useState(loginData);

    const [login, { isLoading, isError}] = useLoginMutation(loginData);

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
            <div onSubmit={submitHandler} className={style}>
                <div id={style.form}>
                    <form action="">
                        <label htmlFor="email"></label>
                        <input type="text"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">
                        <input type="text"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        
                            <CustomButton type="submit" text={"Login"} />
                            <Link to={"/signup" }>SignUp</Link>
                        </label>
                    </form>
                    
                </div>
            </div>
        </>
    )

}

export default Login;
 