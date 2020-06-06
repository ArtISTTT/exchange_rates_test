import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Currency from "./Currency";
import {getPairsData, setAddPairsOpened, setLocalStoragePairsData, setPair} from "../../redux/currency-reducer";



class CurrencyContainer extends React.Component {

    componentDidMount() {
            this.props.setLocalStoragePairsData(JSON.parse(localStorage.getItem("pairsData") || "[]"))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("pairsData", JSON.stringify(this.props.pairsData));
    }

    doAddPairsOpened = () =>{
        console.log(this.props.addPairsOpened)
        if (this.props.addPairsOpened === true){
            this.props.setAddPairsOpened(false)
        } else {
            this.props.setAddPairsOpened(true)
        }
    }

    addPair = (newPair) => {
        var _ = require('lodash');
        if (!~_.findIndex(this.props.pairsData, newPair) && newPair.FromCurrency != newPair.ToCurrency) {
            this.props.setPair(newPair);

        }
    }


    render = () => {
        return (
            <Currency
                {...this.props}
                doAddPairsOpened={this.doAddPairsOpened}
                addPair={this.addPair}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.currencyPage.isFetching,
        date: state.currencyPage.date,
        currencyData: state.currencyPage.currencyData,
        setPairs: state.currencyPage.setPairs,
        pairsData: state.currencyPage.pairsData,
        addPairsOpened: state.currencyPage.addPairsOpened
    }
}


export default compose(connect(mapStateToProps, {getPairsData, setAddPairsOpened, setPair,setLocalStoragePairsData}))(CurrencyContainer)
