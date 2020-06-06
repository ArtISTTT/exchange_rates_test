import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {setBurgerStatus} from "../../../redux/header-reducer";
import Menu from "./Menu";


let mapStateToProps = (state) => {
    return {
        status: state.header.status
    }
}


export default compose(connect(mapStateToProps, {setBurgerStatus}))(Menu)
