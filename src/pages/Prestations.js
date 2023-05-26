import { prestations } from "../datas/prestations"


function Prestations() {
    const brushings = prestations.filter(element => element.subcategory == 'Brushing')

    /*for (let i = (brushings.length - 1); i >= 0; i--) {
        if (brushings[i].subcategory != 'Brushing'){
            brushings.splice(i,1)
        }
    }*/

    return (
        <div>
            <ul>
                {brushings.map((brushing) => (
					<li key={brushing.id}>
						{brushing.name} <br />
						{brushing.getTextPrice()}
					</li>
				))}
            </ul>
        </div>
    )
}

export default Prestations