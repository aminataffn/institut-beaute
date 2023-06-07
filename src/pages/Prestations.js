import { categories } from "../datas/prestations"
import DropdownExample from "../components/TestDropDown"
import React, { useState } from 'react';


function Prestations() {
    const [show, setShow] = useState(0);
    console.log(categories[1].prestations)
    return (
        <div>
            <ul>
                {categories.map((category, i) => (
                    <button onClick={() => setShow(i)} key={category.id}>{category.name}</button>
                ))}
            </ul>
            <ul>
                {categories[show].prestations.map((prestation, i) => (
                    <li key={i}>
                        {prestation.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Prestations