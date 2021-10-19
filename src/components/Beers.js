import { useState, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const Beers = () => {
    const [beers, setBeers] = useState(null);
    const [fav, setFav] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();


    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => {
                setBeers(data);
            })
            .catch(err => console.log(err));

    }, []);

    const handleClick = (id) => {
        history.push("/beer-app/beers/" + id)
    }

    const toggleFav = (e, id) => {
        console.log(id);
        console.log(fav);
        if (fav[id]) {
            fav[id] = false;
        } else {
            fav[id] = true;
        }
    }

    const handleInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    }

    const results = !searchTerm ?
        beers
        :
        beers.filter(beer => beer.name.toLowerCase().includes(searchTerm));

    return (
        <div className="beers">
            <div className="container">
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search..." onChange={(e) => handleInput(e)} value={searchTerm} />
                </div>
                <div className="beers-container">
                    {results && results.map((beer) => (
                        <div className="beer" key={beer.id} >
                            <img className="beer-img" src={beer.image_url} alt={beer.name} onClick={(id) => handleClick(beer.id)} />
                            {/* {fav[beer.id] ?
                            (<AiFillStar className="icon" onClick={(e, id) => toggleFav(e, beer.id)} />)
                            :
                            (<AiOutlineStar className="icon" onClick={(e, id) => toggleFav(e, beer.id)} />)} */}
                            {/* <AiOutlineStar className="icon" onClick={toggleFav} /> */}
                            {/* <AiFillStar className="icon"/> */}
                            <h3 className="beer-name" onClick={(id) => handleClick(beer.id)}>{beer.name}</h3>
                            <p className="beer-description" onClick={(id) => handleClick(beer.id)}>{beer.description.split('', 100)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Beers
