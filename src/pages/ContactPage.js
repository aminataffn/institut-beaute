import timeToRelax from '../assets/time_to_relax.png'
import '../styles/ContactPage.css'

function ContactPage() {
    return (
        <div className='contact-page'>
            <div className="contact-page-header">
                <div className='contact-page-header-background'></div>
                <div className="contact-page-header-text">
                    <h3> RESERVEZ VOTRE PRESTATION </h3>
                    <p>Pour réserver vos prestations dans votre institut, commander vos cartes cadeaux cliquer ici. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Lorem ipsum dolor sit amet.</p>
                    <button className='button'> RESERVATION </button>
                </div>
            </div>

            <div className="contact-page-contacts">
                <div className="contact-page-contacts-contacts">
                    <h4>CONTACTS</h4>
                    <p>09 86 32 94 95<br/><a>INSTAGRAM</a></p>
                </div>
                <div className="contact-page-contacts-horaires">
                    <h4>HORAIRES</h4>
                    <p>LUNDI : Fermé<br/>MARDI - DIMANCHE : 11H-20H</p>
                </div>
                <div className="contact-page-contacts-adresse">
                    <h4>ADRESSE</h4>
                    <p>10 Bd du Maréchal Joffre,<br/>92500 Rueil-Malmaison</p>
                </div>
            </div>

            <div className="contact-page-acces">
                <div className="contact-page-acces-text">
                    <h4>ACCÈS À L'INSTITUT</h4>
                    <p>Pour vous faciliter l'accès, voici quelques indications pour nous rejoindre en utilisant les transports en commun ou les routes environnantes. <br/>
                        Transports en commun :<br/>
                            Bus et RER : <br/>
                        <ul> 
                            <li>Arrêt "Mairie de Rueil" (lignes 144, 467, 565)</li>
                            <li>Arrêt "Rueil-Ville" (ligne 244)</li>
                            <li>Arrêt "Albert 1er - Rueil-Ville" (ligne 27)</li>
                            <li>Arrêt "Le Gué" (lignes 241, 244)</li>
                            <li>RER A : station "Rueil-Malmaison".</li>
                        </ul>
                            Routes :<br/>
                        En voiture : Si vous choisissez de venir en voiture, nous sommes situés près de la N13, la D913 et la D39. 
                    </p>
                </div>
                <div className="contact-page-acces-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.547071138133!2d2.164928255419922!3d48.879435099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405b926723c47533%3A0x1b742494da5a3566!2sBeauty%20%26%20Care!5e0!3m2!1sfr!2sfr!4v1683217769900!5m2!1sfr!2sfr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="contact-page-message">
                <p>Nous espérons que ces indications vous seront utiles pour vous rendre à notre institut de beauté. Si vous avez besoin de plus d'informations ou d'une assistance supplémentaire, n'hésitez pas à nous contacter. Nous sommes impatients de vous offrir une expérience de beauté exceptionnelle à l'Institut Beauty & Care de Rueil-Malmaison !</p>
                <img src={timeToRelax} className='time-to-relax-img' />
            </div>
        </div>
    )
}

export default ContactPage