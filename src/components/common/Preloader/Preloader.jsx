import classes from "./Preloader.module.css"
import preloader from "../../../assets/images/preloader_2.svg";
import React from "react";

let Preloader = () => {
    return <div className={classes.preloader_wrapper}><img alt={"preloader"} src={preloader} className={classes.preloader}/></div>
}

export default Preloader
