import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState(""); // twoWDB input email
    const [emailIsValid, setEmailIsValid] = useState(false); // input email jaraktuulugutuuraluu belgi(signal) ushul jaka kelet
    const [enteredPassword, setEnteredPassword] = useState(""); //twoWDB input password
    const [passwordIsValid, setPasswordIsValid] = useState(false); // input password jaraktuulugutuuraluu belgi(signal) ushul jaka kelet
    const [formIsValid, setFormIsValid] = useState(false); //form talapka joop berebi? ture/false

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("VALID");
            setFormIsValid(
                enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
        }, 2500);
        /* jogorudagy functsiya ar 2.5 sekundada FormIsValid'di ozgortup turat */

        return () => {
            console.log("clean up");
            clearTimeout(identifier);
        }; /* Arbir onChange bolgond murdagy setTime'dy ochurup akyrky setTime'dy kaltyryp koiot */
    }, [setFormIsValid, enteredEmail, enteredPassword]); //inputtarga bailangan alarda ar bir onchange jurgon saiyn ichindegi anonym func ishteit(anyn kandai ishteshi function ichinde )

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }; // two way data binding

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }; // two way data binding

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@")); // emailIsValid'din value'sin ozgortobuz (includes('@') methodu arkyluu true je false'ka ozgortup koiobuz)
    }; // two way data binding

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }; // two way data binding

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    }; //submit functsiyasy

    return (
        <Card className={classes.login}>
            {/* obertka  */}
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailIsValid === false ? classes.invalid : ""
                    }`}
                >
                    {/* user tuura emes tolturgan bolso input kyzyl boluusu uchun logica */}
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={
                            validateEmailHandler
                        } /* Onblur event'i  focus butkondon kiin ishteit(bir input'ka focus bolup, focus bolgon inputtan chygyp je bashka inputka focus bolgondo) tagyraak aitkanda user inputka dannyilaryn jazyp butup al input talaasyn tashtap chygyp jatkanda ishteit. */
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}// formIsValid false bolgon uchurda button kapkara bolup ishtebei turaberet kachan true bolso anan ishteit
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
