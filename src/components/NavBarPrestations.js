import '../styles/NavBarPrestations.css'
import '../styles/Prestations.css';

function NavBarPrestations(){
    return (
        <div className="navbar-prestations">
            {categories.map((category, i) => (
                <h4 onClick={() => setShow(i)} key={category.id}>{category.name}</h4>
            ))}
        </div>
    )
}

export default NavBarPrestations