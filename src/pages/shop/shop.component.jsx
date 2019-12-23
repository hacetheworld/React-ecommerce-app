import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.components'
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Switch>
                <Route exact
                    path={match.path}
                    component={CollectionOverview}
                />

                <Route
                    exact path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                />

            </Switch>

        </div>
    )
}



export default ShopPage;