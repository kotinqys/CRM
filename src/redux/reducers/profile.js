import produce from "immer"

const initialState = {
    profile: null,
}

const profile = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_PROFILE':
                draft.profile = action.profile
            default:
                return state
    }
    })
}


export default profile