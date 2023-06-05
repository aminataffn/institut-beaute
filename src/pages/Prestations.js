import { prestations, categories, subcategories } from "../datas/prestations"
import DropdownExample from "../components/TestDropDown"


function Prestations() {
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category}</li>
                ))}
            </ul>
            <DropdownExample />
        </div>

    )
}

export default Prestations