
import React, { useState } from 'react';
import { prestations, categories, subcategories } from "../datas/prestations"

function DropdownExample() {
  const [show, setshow] = useState(false);
  const brushings = prestations.filter(element => element.subcategory == 'Brushing')


  return (
    <div>
      <h4>Brushing</h4>
      <button onClick={()=>setshow(!show)}> {show ? <span>voir moins</span> : <span>voir plus</span>} </button>
      {
        show ? 
        <ul>
          {brushings.map((brushing) => (
            <li key={brushing.id}>
              {brushing.name} <br />
              {brushing.getTextPrice()}
            </li>
          ))}
        </ul> 
        : null
      }
    </div>
  );
}

export default DropdownExample 