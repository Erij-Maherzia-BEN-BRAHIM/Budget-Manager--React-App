import React, { useContext } from "react";
import { addCtx } from "../store/AddDepenseContext";
import styles from "./DepenseList.module.css";
import "./Depenses.css";
import "./FilterDepense.css";
import DepenseItem from "./DepenseItem";
import Chart from "./Chart";
import { filterCtx } from './../store/FilterYearProvider';
export default function DepensesListe() {
  const ajoutCtx = useContext(addCtx);
  let listDepenses = ajoutCtx.tabDepenses;
  const yearCtx=useContext(filterCtx)
  let listYears=[]
  for (const dep of listDepenses) {
    listYears.push(dep.date.getFullYear().toString())
  }
  let listUniqueYears=[...new Set(listYears)]
  function selectHandler(d) {
    yearCtx.setYear(Number(d.target.value))
  }

  if (listDepenses.length > 0)
    return (
      <div className="expenses">
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>Filter By Year</label>

            <select id="year" onChange={selectHandler}>
              {listUniqueYears.map((d) => {
                return (
                  <option key={d} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Chart></Chart>
        <ul className={styles.expenses_list}>
        {listDepenses.map((d) => {
            if (yearCtx.cYear === 0) {
              yearCtx.setYear(d.date.getFullYear());
            } else {
              if (d.date.getFullYear() === yearCtx.cYear)
                return <DepenseItem key={d.id} oneDepense={d}></DepenseItem>;
            }
          })}
        </ul>
      </div>
    );
}
