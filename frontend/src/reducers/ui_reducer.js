import { SHOW_LOADER, HIDE_LOADER} from "../actions/ui_actions"

const initialState = {
    loading: false
};

const UIReducer = (state = initialState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case SHOW_LOADER:
            return Object.assign({}, state, { loading: true })
        case HIDE_LOADER:
            return Object.assign({}, state, { loading: false })
        default:
            return state;
    }
}

export default UIReducer