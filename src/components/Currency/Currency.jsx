import React from "react";
import classes from "./Currency.module.css";
import Preloader from "../common/Preloader/Preloader";
import CurrencyFlag from 'react-currency-flags';
import {getAllCountriesByCurrencyOrSymbol} from "iso-country-currency";
import getSymbolFromCurrency from 'currency-symbol-map'
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
let CurrencyFlagComponent = (props) => <CurrencyFlag currency={props.currency} size="sm"/>;
let getCurrency = require("country-currency-map").getCurrency;


const AddPairsForm = (props) => {
    return (
        <form className={classes.add_pair_form} onSubmit={props.handleSubmit}>
            <div className={classes.form_selects}>
                <Field name={"FromCurrency"}
                       component="select"
                       className={classes.select}
                       validate={[requiredField]}>
                    <option>Choose</option>
                    {Object.keys(props.currencyData).map((keyName, i) =>
                        (<option key={keyName} value={keyName}
                                 className={classes.option}>{keyName}</option>)
                    )}
                </Field>
                <Field name={"ToCurrency"}
                       component="select"
                       className={classes.select}
                       validate={[requiredField]}>
                    <option>Choose</option>
                    {Object.keys(props.currencyData).map((keyName, i) =>
                        (<option key={keyName} value={keyName}
                                 className={classes.option}>{keyName}</option>)
                    )}
                </Field>
            </div>

            <button className={classes.add_pair_accept_button}>Add</button>
        </form>
    )
}

const AddPairsReduxForm = reduxForm({form: 'addPairs'})(AddPairsForm)


let Currency = (props) => {

    let onSubmit = (formData) => {
        props.addPair(formData)
    }

    return (
        <div className={classes.intro}>

            <div className={classes.list}>
                {
                    props.isFetching
                        ? <Preloader/>
                        : <div className={classes.container}>
                            <div className={classes.title}>Currency Information on <span
                                className={classes.date}>{props.date}</span> (value for 1 EUR)</div>
                            <div className={classes.main_wrapper}>
                                <table cellSpacing="0" className={classes.table}>
                                    <tr>
                                        <th className={classes.table_column_name}>Code</th>
                                        <th className={classes.table_column_name}>Country</th>
                                        <th className={classes.table_column_name}>Currency name</th>
                                        <th className={classes.table_column_name}>Value</th>

                                    </tr>

                                    {Object.keys(props.currencyData).map((keyName, i) =>
                                        (
                                            <tr className={classes.table_line} key={keyName}>
                                                <td className={classes.table_column_value}>{keyName} <span className={classes.value}>{getSymbolFromCurrency(keyName)}</span></td>
                                                <td className={classes.table_column_value}><CurrencyFlagComponent
                                                    currency={keyName}/> {getAllCountriesByCurrencyOrSymbol('currency', keyName)[0]}
                                                </td>
                                                <td className={classes.table_column_value}>{getCurrency(keyName).name}</td>
                                                <td className={classes.table_column_value + " " + classes.value}>{props.currencyData[keyName] ?
                                                    props.currencyData[keyName].toFixed(2) :
                                                    "undefined"}</td>
                                            </tr>
                                        )
                                    )}
                                </table>
                                <div className={classes.pairs_wrapper}>
                                    <div className={classes.pairs_title}>Pairs</div>
                                    <div className={classes.pairs_scroll}>
                                            {props.pairsData.map(pair => (
                                                <div key={pair.id} className={classes.pairs_item}>
                                                    <div className={classes.item_cur_name}>{pair.FromCurrency}
                                                        <span className={classes.separator}> / </span>
                                                        {pair.ToCurrency}</div>
                                                    <div className={classes.item_cur_value}>
                                                        {(props.currencyData[pair.FromCurrency]/props.currencyData[pair.ToCurrency]).toFixed(3)}
                                                        <span className={classes.separator}> / </span>
                                                        {(props.currencyData[pair.ToCurrency]/props.currencyData[pair.FromCurrency]).toFixed(3)}
                                                    </div>
                                                    <button onClick={() => props.setDeletePair(pair.ID)} className={classes.button_delete_pair}>×</button>
                                                </div>
                                            ))}
                                    </div>
                                    <button onClick={props.doAddPairsOpened} className={props.addPairsOpened ? classes.add_button_pressed :classes.add_button}>Add custom pair</button>
                                    <div className={classes.popup_add_pair +" "+ (props.addPairsOpened ? "" : classes.display_none)}>
                                        <p className={classes.add_pair_title}>Choose custom pair</p>
                                        <AddPairsReduxForm onSubmit={onSubmit} currencyData={props.currencyData}/>
                                    </div>
                                </div>
                            </div>


                        </div>

                }

            </div>
        </div>

    );
}


export default Currency
