import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

const FavouriteBeersDiv = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
min-height: 100vh;

h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.no-favourite {
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
}

.no-favourite h3 {
    margin-bottom: 1rem;
}

.link {
    color: #7FFFD4;
    font-size: 1.5rem
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    width: 80%;
    height: 15rem;
    margin: 1rem auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

li:hover {
    border-color: #fff;
}

.link-to-beer  {
    width: 100%;
    cursor: pointer;
}

li img {
    width: 10%;
    max-height: 15rem;
}

@media (min-width: 480px) {
    li img {
        height: 60%;
    }
}

@media (min-width: 576px) {
    li img {
        height: 50%;
    }
}

@media (min-width: 768px) {
    li {
        width: 60%;
    }
}

@media (min-width: 992px) {
    li {
        width: 40%;
    }
    li img {
        height: 50%;  
    }
}
`;

const FavouriteBeers = () => {
    const favItems = useSelector(state => state.fav.favItems);

    const amountFavItems = favItems.length === 0 ? (
        <div className="no-favourite">
            <h3>You don't have any favourite beers</h3>
            <p>Go to <Link to="/beer-app" className="link">Home</Link></p>
        </div>
    ) : (
        <p>Amount: {favItems.length}</p>
    );

    return (
        <FavouriteBeersDiv>
            <h2>Your Favourite Beers</h2>
            {amountFavItems}
            <ul>
                {favItems.map(({ id, name, image_url }) => (
                    <li key={id}>
                        <Link to={"/beer-app/beers/" + id} className="link-to-beer">
                            <h2 className="beer-name">{name}</h2>
                            <img src={image_url} alt={name} className="beer-img" />
                        </Link>
                    </li>
                ))}
            </ul>
        </FavouriteBeersDiv>
    )
}

export default FavouriteBeers
