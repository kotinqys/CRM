import produce from "immer"

const initialState = {
    cards: [],
    loading:false
}

const cards = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_CARDS':
                draft.cards = action.data
                break
            case 'SET_LOADING':
                draft.loading = action.loading
                break
            default:
                return state
    }
    })
}


export default cards