import app from '../../firebase'

export const setCards = (data) => ({
    type: 'SET_CARDS',
    data
});

export const getCards = () => {
    return dispatch => {
         const cards = [];
            app
            .firestore()
            .collection('cards')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                cards.push({ id: doc.id, ...doc.data() });
                });
                dispatch(setCards(cards));
            });
        }
}