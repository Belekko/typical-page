import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
    return (
        <header className={classes["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation
                isLoggedIn={props.isAuthenticated}// isLoggedIn'ge jarasha navigation render bolot false bolso navigation chykpai kalat
                onLogout={props.onLogout} // props ichinde functsiya bar onLogouot baskanda isLoggedIn true/false 'ka almashat
            />
        </header>
    );
};

export default MainHeader;
