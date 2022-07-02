import React from 'react'

export default function Filter(props) {
let date=props.date
  return (
    <div className='expenses-filter '>

<select>
  <option>
{date.toLocaleString('en-us', { year: "numeric" })}
</option>
</select>
    </div>
  )
}
