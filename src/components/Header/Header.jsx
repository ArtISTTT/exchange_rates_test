import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import BRAND_LINK from '../../assets/images/brand.png'

const Header = (props) => {
    return (
        <div className={classes.main_inner}>
            <div className={classes.container}>
                <div className={classes.header_inner}>
                    <NavLink to={''} className={classes.header__logo}>
                        <img src={BRAND_LINK} alt="brand" />
                    </NavLink>

                    <nav className={classes.nav}>
                        <NavLink to={'/Currency'} className={classes.nav__link}>Some link</NavLink>
                        <NavLink to={'/Currency'} className={classes.nav__link}>Some link</NavLink>
                        <NavLink to={'/Courses'} className={classes.nav__link}>Courses list</NavLink>
                        <NavLink to={'/Calculator'} className={classes.nav__link}>Exchange calculator</NavLink>
                    </nav>

                    <button onClick={props.status ? () => props.setBurgerStatus(false) : () => props.setBurgerStatus(true)} className={classes.burger} type="button">
                        <span className={classes.burger__item}>Menu</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Header
