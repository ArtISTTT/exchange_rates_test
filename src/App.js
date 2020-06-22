import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {setLocalStoragePairsData} from "./redux/currency-reducer";
import {setBurgerStatus} from "./redux/header-reducer";
import {MenuContainer, HeaderContainer, CalculatorContainer, CurrencyContainer, Preloader} from "./components";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp(this.props.currency)

        if (JSON.parse(localStorage.getItem('pairsData')) === null) {
            localStorage.setItem("pairsData", JSON.stringify(this.props.pairsData));
        }
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="App">
                <div className="container">
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <MenuContainer/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to="/courses"/>}/>
                                <Route path='/courses' render={() => <CurrencyContainer/>}/>
                                <Route path='/calculator' render={() => <CalculatorContainer/>}/>
                            </Switch>

                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    currency: state.currencyPage.currency,
    pairsData: state.currencyPage.pairsData,
    statusBurger: state.header.status
})

export default connect(mapStateToProps, {initializeApp, setLocalStoragePairsData, setBurgerStatus})(App)
