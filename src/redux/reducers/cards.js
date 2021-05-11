import produce from "immer"

const initialState = {
    cards:[]
}

const cards = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_CARDS':
                draft.cards = action.data
                break
            default:
                return state
    }
    })
}


export default cards