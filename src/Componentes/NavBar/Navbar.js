import Cartwidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav>
            <h2>Good Sneakers</h2>
            <div>
                <button>Novedades</button>
                <button>Stock Diario</button>
                <button>Seleccion de lujo</button>
            </div>
           <Cartwidget/>
        </nav>
    )
}

export default NavBar;