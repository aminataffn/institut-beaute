import { categories } from "../datas/prestations";
import React, { useState } from 'react';
import '../styles/Prestations.css';
import NavBarPrestations from "../components/NavBarPrestations";

function Element(props) {
    return(
        <div className="display-prestation">
            <div className="informations-prestation">
                <h4 className="name-prestation">{props.element.name}</h4>
                <p className="duration-price-prestation">{props.element.duration} | {props.element.getTextPrice()}</p>
                <p className="description-prestation">{props.element.description}</p>
            </div>
            <div className="links-prestation">
                <a href="https://www.planity.com/beauty-and-care-92500-rueil-malmaison" target="_blank" className="button-prestation"><button> Reserver </button></a>
            </div>
        </div>
    )
}


function Prestations() {
    const [show, setShow] = useState(0);
    console.log(categories[1].prestations)
    return (
        <div>
            <NavBarPrestations />
            <h3 className="title-prestation">{categories[show].name}</h3>
            <div className="all-prestations">
                {categories[show].prestations.map((prestation, i) => (
                    <Element element = {prestation} key={i}/>
                ))}
            </div>
        </div>

    )
}

export default Prestations