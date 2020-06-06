import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import BRAND_LINK from '../../assets/images/brand.png'

const Header = () => {
    return (
        <div className={classes.main_inner}>
            <div className={classes.container}>
                <nav className={classes.navbar}>
                    <NavLink to={''} className={classes.navbar_brand}><img src={BRAND_LINK} alt=""/></NavLink>
                    <div className={classes.navbar_collapse}>
                        <ul className={classes.navbar_nav}>
                            <li className={classes.nav_item}><NavLink to={'/Currency'} className={classes.nav_link}>Some link</NavLink></li>
                            <li className={classes.nav_item}><NavLink to={'/Currency'} className={classes.nav_link}>Some link</NavLink></li>
                            <li className={classes.nav_item}><NavLink to={'/Courses'} className={classes.nav_link}>Courses list</NavLink></li>
                            <li className={classes.nav_item}><NavLink to={'/Calculator'} className={classes.nav_link}>Exchange calculator</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header