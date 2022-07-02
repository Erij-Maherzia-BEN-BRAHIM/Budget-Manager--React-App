import React from "react";
import styles from "./DepenseItem.module.css";
import DepenseDate from "./DepenseDate";

export default function DepenseItem(props) {
  let title = props.oneDepense.title;
  let amount = props.oneDepense.amount;
  console.log(typeof(props.oneDepense.date));

  return (

      <div className={styles.expense_item}>
        <DepenseDate date_d={props.oneDepense.date} ></DepenseDate>
        <div className={styles.expense_item__description}><h2>{title}</h2> </div>
        <div className={styles.expense_item__price}>{amount}$</div>
      </div>

  
  );
}
