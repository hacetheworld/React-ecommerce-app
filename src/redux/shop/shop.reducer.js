import ShopActionType from './shop.types';

const INTIAL_STATE = {
    collections: null,
    isFetching: false
}


const shopReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionType.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: undefined
            }

        case ShopActionType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopActionType.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}




export default shopReducer;