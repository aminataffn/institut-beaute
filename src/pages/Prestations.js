import { categories } from "../datas/prestations";
import React, { useState } from 'react';
import '../styles/Prestations.css'
import NewElement from "../components/PrestationNewElement";


function Prestations() {
    const [show, setShow] = useState(0);
    return (
        <div>
            <div className="navbar-prestations">
                {categories.map((category, i) => (
                    <h4 onClick={() => setShow(i)} key={category.id}>{category.name}</h4>
                ))}
            </div>
            <h3 className="title-prestation">{categories[show].name}</h3>
            <div className="all-prestations">
                {categories[show].prestations.map((prestation, i) => (
                    <NewElement element = {prestation} key={i}/>
                ))}
            </div>
        </div>

    )
}

export default Prestations