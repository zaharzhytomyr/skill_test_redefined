import {GET_AUTH_USER} from "../types";

const handlers = {
    DEFAULT: state => state,
    [GET_AUTH_USER]: (state, {payload}) => ({...payload})
};
export const userReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
