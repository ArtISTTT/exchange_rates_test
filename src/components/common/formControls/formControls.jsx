import React from "react";
import classes from './formsControl.module.css'



export const AmountInput = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched
    return (
        <div className={classes.wrapper}>
            <input {...input} {...props} placeholder={"Amount"} type="number" className={classes.input} autoComplete="off"/>
            <p className={haveError ? classes.show_error : classes.hide_error}>Field is empty</p>
        </div>

    );
}

export const ResultInput = ({input, meta,  ...props}, result) => {
    return (
        <input {...input} {...props} placeholder={""} value={props.result} disabled={true} type="text" className={classes.input}/>
    );
}

/* Не получаю данные в formData если комп-та здесь
export const Select = ({input, meta,  ...props}, currencyData) => {
    const haveError = meta.error && meta.touched
    return (
        <select className={classes.select}>
            <option>Choose</option>
            {Object.keys(props.currencyData).map((keyName, i) =>
                (<option key={keyName}
                         value={keyName}
                         className={classes.option}>{keyName}</option>)
            )}
        </select>
    );
}*/
