import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="title">
                    <h1>BeerApp </h1>
                    <FaBeer className="beer-icon" />
                </div>
                <div className="links">
                    <Link to="/beer-app">Home</Link>
                    <Link to="/beer-app/favourite">Favourite Beers</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
