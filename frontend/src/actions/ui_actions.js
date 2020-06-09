export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = () => dispatch => {
    dispatch({
        type: SHOW_LOADER
    })
};

export const hideLoader = () => dispatch => {
    dispatch({
        type: HIDE_LOADER
    })
};