import React from "react";
import classes from './Menu.module.css'
import {NavLink} from "react-router-dom";
import {setBurgerStatus} from "../../../redux/header-reducer";

const Menu = (props) => {
    if (props.status){
        return (
            <div className={classes.menu}>
                <nav className={classes.nav}>
                    <NavLink to={'/Courses'} onClick={ () => props.setBurgerStatus(false)} className={classes.nav__link}>Courses list</NavLink>
                    <NavLink to={'/Calculator'} onClick={ () => props.setBurgerStatus(false)} className={classes.nav__link}>Exchange calculator</NavLink>
                    <NavLink to={'/Currency'} onClick={ () => props.setBurgerStatus(false)} className={classes.nav__link}>Some link</NavLink>
                    <NavLink to={'/Currency'} onClick={ () => props.setBurgerStatus(false)} className={classes.nav__link}>Some link</NavLink>
                </nav>
            </div>
        )
    } else {
        return <div className={classes.display_none}/>
    }

}

export default Menu
