import React from "react";
import classes from "./Calculator.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {AmountInput, ResultInput} from "../common/formControls/formControls";
import {setCalculateResult} from "../../redux/calculator-reducer";
import {requiredField} from "../../utils/validators/validators";


const CalculatorForm = (props) => {
    return (
        <form className={classes.main} onSubmit={props.handleSubmit}>

            <div className={classes.main_from_part}>
                <p className={classes.part_title}>Available currency</p>
                <Field component="select"
                       name={"availableType"}
                       className={classes.select}
                       validate={[requiredField]}>

                    <option>Choose</option>
                        {Object.keys(props.currencyData).map((keyName, i) =>
                            (<option key={keyName} value={keyName}
                                     className={classes.option}>{keyName}</option>)
                        )}
                </Field>
                <p className={classes.part_amount}>Amount</p>
                <Field component={AmountInput} validate={[requiredField]} name={"fromAmount"}/>
                <button className={classes.count_button}>Count</button>

            </div>
            <div className={classes.main_arrow}>To</div>
            <div className={classes.main_to_part}>
                <p className={classes.part_title}>Desired currency</p>
                <Field name={"desiredType"}
                       component="select"
                       className={classes.select}
                       validate={[requiredField]}>
                        <option>Choose</option>
                        {Object.keys(props.currencyData).map((keyName, i) =>
                            (<option key={keyName} value={keyName}
                                    className={classes.option}>{keyName}</option>)
                        )}
                </Field>
                <p className={classes.part_amount}>Result</p>
                <Field component={ResultInput} result={props.result} name={"toAmount"}/>

            </div>

        </form>
    )
}

const CalculatorReduxForm = reduxForm({form: 'calculate'})(CalculatorForm)

let Calculator = (props) => {

    let onSubmit = (formData) => {
        props.setCalculateResult(props.currencyData[formData.desiredType]*formData.fromAmount / props.currencyData[formData.availableType])
    }

    return (
        <div className={classes.intro}>

            <div className={classes.calc}>
                {props.isFetching
                        ? <Preloader/>
                        : <div className={classes.container}>
                            <div className={classes.title}>Calculator</div>
                            <CalculatorReduxForm onSubmit={onSubmit}  currencyData={props.currencyData} result={props.result}/>
                        </div>
                }

            </div>
        </div>

    );
}

export default Calculator
