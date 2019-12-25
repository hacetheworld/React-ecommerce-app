import ShopActionType from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
export const fetchCollectionsStart = () => ({
    type: ShopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionType.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap

});


export const fetchCollectionsFailure = (erorrMessage) => ({
    type: ShopActionType.FETCH_COLLECTION_FAILURE,
    payload: erorrMessage

});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        try {
            const collectionRef = firestore.collection('collections');
            dispatch(fetchCollectionsStart());
            collectionRef.onSnapshot(async snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionMap));

            })
        } catch (error) {
            dispatch(fetchCollectionsFailure(error.message))
        }
    }


}

