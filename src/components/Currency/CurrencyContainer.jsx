import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Currency from "./Currency";
import {
    getPairsData,
    setDeletePair,
    setLocalStoragePairsData,
    setPair
} from "../../redux/currency-reducer";



class CurrencyContainer extends React.Component {

    componentDidMount() {
            this.props.setLocalStoragePairsData(JSON.parse(localStorage.getItem("pairsData") || "[]"))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("pairsData", JSON.stringify(this.props.pairsData));
    }

    addPair = (newPair) => {
        var _ = require('lodash');
        if (!~_.findIndex(this.props.pairsData, newPair) && newPair.FromCurrency !== newPair.ToCurrency) {
            if (this.props.pairsData.length === 0){
                newPair["ID"] = 0
            } else {
                newPair["ID"] = this.props.pairsData[this.props.pairsData.length-1].ID + 1

            }
            this.props.setPair(newPair);
            this.props.setAddPairsOpened(false)

        }
    }



    render = () => {
        return (
            <Currency
                {...this.props}
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


export default compose(connect(mapStateToProps, {getPairsData, setPair,setLocalStoragePairsData, setDeletePair}))(CurrencyContainer)
