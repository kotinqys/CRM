import app from '../../firebase'

export const setCards = (data) => ({
    type: 'SET_CARDS',
    data
});

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    loading
});

export const getCards = () => {
  return dispatch => {
      dispatch(setLoading(true))
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
              dispatch(setLoading(false))
            });
        }
}

export const updateCard = (card, val) => {
  return dispatch => {
      dispatch(setLoading(true))
    let data = app.firestore().collection('cards').doc(`${card.id}`);
    return data
      .update({ category: val })
      .then(() => {
        dispatch(getCards());
        dispatch(setLoading(false))
      })
      .catch((err) => {
        alert(err);
        dispatch(setLoading(false))
      });
    }
}

export const createCard = (fullName, email,number,age,study,course,history) => {
     app
        .firestore()
        .collection('cards')
        .add({
          fullName: fullName.value,
          email: email.value,
          number: number.value,
          age: age.value,
          study: study.value,
          class: course.value,
          category: 'contacts',
        })
        .then(() => {
          alert('Контакт создан!');
          history.push('/');
        })
        .catch((err) => {
          alert(err);
        });
}
