import '../styles/Prestations.css'

function NewElement(props) {
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

export default NewElement