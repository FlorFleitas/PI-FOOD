import React from "react";
import { Link } from "react-router-dom"
import styles from "../landing page/landingPage.css"


export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <h1>WELCOME TO THE #1 RECIPES WEBPAGE IN AMERICA!</h1>
            <Link to="/home">
                <button className="landingbutton">Home »</button>
            </Link>
        </div>
    )
}
