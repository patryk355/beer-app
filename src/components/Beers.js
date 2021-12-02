import { useState, useEffect } from "react";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { favActions } from "../store/fav-slice";

const Beers = () => {
    const dispatch = useDispatch();

    const favItems = useSelector(state => state.fav.favItems);

    const [beers, setBeers] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.punkapi.com/v2/beers');

                if (!res.ok) {
                    return new Error('Something went wrong!')
                }

                const data = await res.json();
                setBeers(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();

    }, []);

    const showDetailsPageHandler = (id) => {
        history.push("/beer-app/beers/" + id);
    }

    const handleInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    }

    // Search 
    const results = !searchTerm ?
        beers
        :
        beers.filter(({ name }) => name.toLowerCase().includes(searchTerm));

    // Add item to favourite items
    const addItemToFavHandler = (id) => {
        const index = beers.findIndex((beer) => beer.id === id);
        dispatch(favActions.addToFavItems({ newFavItem: beers[index] }));
    }

    // Remove item from favourite items
    const removeItemFromFavHandler = (id) => {
        const index = favItems.findIndex((fav) => fav.id === id);
        dispatch(favActions.removeFromFavItems({ index }));
    }

    return (
        <div className="beers">
            <div className="container">
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search..." onChange={handleInput} value={searchTerm} />
                </div>
                <div className="beers-container">
                    {results && results.map(({ id, name, description, image_url }) => (
                        <div className="beer" key={id}>
                            <img className="beer-img" src={image_url} alt={name} onClick={() => showDetailsPageHandler(id)} />

                            <div className="icon" data-value={id}>
                                {favItems.findIndex(fav => fav.id === id) !== -1 ? (
                                    <AiFillStar onClick={() => removeItemFromFavHandler(id)} />
                                ) : (
                                    <AiOutlineStar onClick={() => addItemToFavHandler(id)} />
                                )}
                            </div>

                            <h3 className="beer-name" onClick={() => showDetailsPageHandler(id)}>{name}</h3>
                            <p className="beer-description" onClick={() => showDetailsPageHandler(id)}>{description.split('', 100)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Beers
