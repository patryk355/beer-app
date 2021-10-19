import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Beer = () => {
    const [beer, setBeer] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/' + id)
            .then(res => res.json())
            .then(data => setBeer(data[0]))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            {beer && <div className="beer-details">
                <h2 className="beer-name">{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name} className="beer-img" />
                <p className="beer-tagline">"{beer.tagline}"</p>
                <p className="beer-description">{beer.description}</p>
                <p className="beer-tips"><b>Brewer's tips:</b> {beer.brewers_tips}</p>
                <p className="beer-author"><b>Contributed by:</b> {beer.contributed_by}</p>
                <p className="beer-food">Food Pairing:</p>
                <ul>
                    {beer.food_pairing.map((pair) => <li>{pair}</li>)}
                </ul>
                <p className="beer-date">First brewed in {beer.first_brewed}</p>
            </div>}
        </div>
    )
}

export default Beer
