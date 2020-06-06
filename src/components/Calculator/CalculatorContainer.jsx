import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Calculator from "./Calculator";
import {setCalculateResult} from "../../redux/calculator-reducer";



class CalculatorContainer extends React.Component {



    render = () => {
        return (
            <Calculator
                {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.currencyPage.isFetching,
        currencyData: state.currencyPage.currencyData,
        result: state.calculateorPage.result
    }
}


export default compose(connect(mapStateToProps, {setCalculateResult}))(CalculatorContainer)
