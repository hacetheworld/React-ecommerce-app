import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'
import CollectionOverview from '../../components/collection-overview/collection-overview.components'
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollection(collectionMap);
            this.setState({ loading: false });
            // console.log(collectionMap);


        });

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route exact
                        path={match.path}
                        render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                    />
                    <Route
                        exact
                        path={`${match.path}/:collectionId`}
                        render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                    />



                </Switch>

            </div>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);