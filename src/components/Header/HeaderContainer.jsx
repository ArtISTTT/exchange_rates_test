import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {setBurgerStatus} from "../../redux/header-reducer";

let mapStateToProps = (state) => {
    return {
        status: state.header.status
    }
}


export default compose(connect(mapStateToProps, {setBurgerStatus}))(Header)
