import { favActions } from "./fav-slice";

export const putItemsToFav = (favItems) => {
    return async (dispatch) => {
        const putItemsToFirebase = async () => {
            const response = await fetch('https://beer-app-4cb9c-default-rtdb.firebaseio.com/favItems.json', {
                method: 'PUT',
                body: JSON.stringify(
                    favItems
                ),
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        }
        try {
            await putItemsToFirebase();
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchFavItems = () => {
    return async (dispatch) => {
        const fetchFavItems = async () => {
            const response = await fetch('https://beer-app-4cb9c-default-rtdb.firebaseio.com/favItems.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            console.log(data);
            dispatch(favActions.uploadFavItems({ favItems: data || [] }));
        }
        try {
            await fetchFavItems();
        } catch (err) {
            console.log(err);
        }
    }
}