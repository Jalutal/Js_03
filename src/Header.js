function Header() {
    const user = {
        firstname: "Jesse",
        lastname: "Granier",
        job: "Baby Dev (on commence un jour...)"
    }
    const userLogged = true
    const itemsInCart = 2 /* ou 0 pour tester la variable des items dans le panier */ 
    return (
        <header>
        <h1>Mon super Header qui déchire</h1>
        <nav>
            <ul>
            { userLogged ? 
                    (<li>Bonjour {user.firstname} {user.lastname} ! Tu es un {user.job} c'est ça ?</li>)
                :
                    (<li>Bonjour, connecte toi !</li>)
            }
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li>  

                {itemsInCart > 0 ?
                    (<li>Vous avez {itemsInCart} objets dans votre panier</li>)
                :
                    (<li>Votre panier est vide</li>)
                }             
                
            </ul>
        </nav>
        </header>
    )
}
export default Header;