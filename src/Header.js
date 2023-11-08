function Header() {
    const userLogged = true /* ou false, variable pour tester l'user */
    return (
        <header>
        <h1>Mon super Header qui déchire</h1>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li>               
                { userLogged ? 
                    (<li>Bonjour User !</li>)
                :
                    (<li>Bonjour, connecte toi !</li>)
                }
            </ul>
        </nav>
        </header>
    )
}
export default Header;