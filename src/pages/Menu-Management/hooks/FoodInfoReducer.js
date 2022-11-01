export const INITIAL_STATE = {
    name: '',
    price: 0,
    description: '',
    ingredients: [],
};

export const postReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {};
        case 'CHANGE_INGREDIENTS':
            return {};
        default:
            return state;
    }
};