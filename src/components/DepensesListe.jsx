import React, { useContext, useState } from "react";
import { addCtx } from "../store/AddDepenseContext";
import styles from "./DepenseList.module.css";
import "./Depenses.css";
import "./FilterDepense.css";
import DepenseItem from "./DepenseItem";
import Chart from "./Chart";
import FilterDate from './FilterDate';

export default function DepensesListe() {
  const ajoutCtx = useContext(addCtx);
  let listDepenses = ajoutCtx.tabDepenses;

  if (listDepenses.length > 0)
    return (
      <div className="expenses">
        <div className="expenses-filter">
          <div className="expenses-filter__control">
      <label>Filter By Year</label>
        <select name="date" id="date">
        
        {listDepenses.map((d)=>{
            return    <FilterDate key={d.id} date={d.date}></FilterDate>
          })}
         
     
        </select>
        </div>
        </div>
        <Chart></Chart>
        <ul className={styles.expenses_list}>
            {listDepenses.map((d) => {
              return <DepenseItem key={d.id} oneDepense={d}></DepenseItem>;
            })}
        </ul>
      </div>
    );
}
