import { categories } from "../datas/prestations"
import React, { useState } from 'react';

function Element(props) {
    return(
        <div>
            <div>
                <h4>{props.element.name}</h4>
                <p>{props.element.duration} | {props.element.getTextPrice()}</p>
                <p>{props.element.description}</p>
            </div>
            <div>
                <a href="https://www.planity.com/beauty-and-care-92500-rueil-malmaison" target="_blank"><button> Reserver </button></a>
                <p>En savoir plus</p>
            </div>
        </div>
    )
}


function Prestations() {
    const [show, setShow] = useState(0);
    console.log(categories[1].prestations)
    return (
        <div>
            <div>
                {categories.map((category, i) => (
                    <h4 onClick={() => setShow(i)} key={category.id}>{category.name}</h4>
                ))}
            </div>
            <h3>{categories[show].name}</h3>
            <div>
                {categories[show].prestations.map((prestation, i) => (
                    <Element element = {prestation} key={i}/>
                ))}
            </div>
        </div>

    )
}

export default Prestations