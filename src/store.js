import { createStore } from 'redux';

const initialState = {
    productList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_LIST':
            return { ...state, productList: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
