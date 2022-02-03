import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //bul state ekranga render bolgon login page menen welcome back'ty render kyluuga berilgen logica

    useEffect(() => {
        const storedUserLoggedInfo = localStorage.getItem("isLoggedIn");
        if (storedUserLoggedInfo === "1") {
            setIsLoggedIn(true);
        }
    }, []); // bul hook ar bir obnovleniede ishteit, eger obnovlenie kylsa localda isloogedIn=1 saktalgan bolso welcome chygyp turaberet
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1"); //
        setIsLoggedIn(true);
    }; // submit click bolgondo ishtechu functsiya (click bolooru menen localga dannyi jiberet i isLoggedIn state'in true'ga ailandyrat truga ailansa render <Home> render bolot )

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };/* logout button click bolgondo ishteit  */

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> {/* bir state jana bir func props alat */}
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}{/* bul eki komponent'tin logicasy isLoggedIn state'ine bailangan */}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
