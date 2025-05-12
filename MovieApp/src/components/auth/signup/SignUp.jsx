import React, { useState } from "react";
import CustomButton from "../../../reuseable/CustomButton";
import style from "./SignUp.module.css"
import { useSignUpMutation } from "../../service/userAuthApi.jsx"
import {Link, useNavigate} from "react-router"

const SignUp = () => {
``
    const navigate = useNavigate()

    const [signUp, isLoading, isError] = useSignUpMutation();



    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData((prev) =>({ ...prev, [name]: value.trim() }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(userData).unwrap();
            if (response.status == 201) {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div onSubmit={submitHandler} className={style}>
                <div id={style.form}>
                    <form action="">
                        <label htmlFor="email">
                        <input type="text"
                            name="email"
                            onChange={handleInput}
                            required
                        />
                        <label htmlFor="firstname"></label>
                        <input type="text"
                            name="firstname"
                            onChange={handleInput}
                            required
                        />
                        <label htmlFor="lastname"></label>
                        <input type="text"
                            name="lastname"
                            onChange={handleInput}
                            required
                        />
                        <label htmlFor="password"></label>
                        <input type="text"
                            name="password"
                            onChange={handleInput}
                            required
                        />
                            <CustomButton type="submit" text={"SignUp"}/>
                            <Link to={"/login"}>Login</Link>     
                        </label>
                    </form>
                </div>
            </div>
        </>
        
    )

}