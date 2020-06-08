

const initialState = {
    loading: false
};

const UIReducer = (state = initialState, action) => {
    Object.freeze(state)
    return state
}

export default UIReducer