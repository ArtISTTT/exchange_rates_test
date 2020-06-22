import {connect} from "react-redux";
import {compose} from "redux";
import Calculator from "./Calculator";
import {setCalculateResult} from "../../redux/calculator-reducer";


let mapStateToProps = (state) => {
    return {
        isFetching: state.currencyPage.isFetching,
        currencyData: state.currencyPage.currencyData,
        result: state.calculateorPage.result
    }
}


export default compose(connect(mapStateToProps, {setCalculateResult}))(Calculator)
