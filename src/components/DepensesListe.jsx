import React, { useContext } from 'react'
import { addCtx } from '../store/AddDepenseContext'
import styles from './DepenseList.module.css'
import './Depenses.css'
import DepenseItem from './DepenseItem'
import Filter from './FilterDepense';

export default function DepensesListe() {

const ajoutCtx= useContext(addCtx)
let listDepenses= ajoutCtx.tabDepenses
if (listDepenses.length>0) 
  return (
  <div >
          {listDepenses.map((d)=>{
            return    <Filter key={d.id} date={d.date}></Filter>
          })}
        <ul className={styles.expenses_list} >
      
           <div className='expenses'>
        
            {listDepenses.map((d)=>{
                return <DepenseItem key={d.id} oneDepense={d}></DepenseItem>
            })}
            </div>
            
        </ul>
        </div>   
  )
}
