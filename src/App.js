import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Header from "./components/Header/Header";
import CurrencyContainer from "./components/Currency/CurrencyContainer";
import Preloader from "./components/common/Preloader/Preloader";
import CalculatorContainer from "./components/Calculator/CalculatorContainer";
import {setLocalStoragePairsData} from "./redux/currency-reducer";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp(this.props.currency)

    if (JSON.parse(localStorage.getItem('pairsData')) === null) {
      localStorage.setItem("pairsData", JSON.stringify(this.props.pairsData));
    }
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

        <div className="App">
          <div className="container">
            <div className="app-wrapper">
              <Header/>
              <div className="app-wrapper-content">
                <Route path='/courses' render={() => <CurrencyContainer/>}/>
                <Route path='/calculator' render={() => <CalculatorContainer/>}/>
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
  pairsData: state.currencyPage.pairsData
})

export default connect(mapStateToProps, {initializeApp, setLocalStoragePairsData})(App)
