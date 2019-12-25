import { connect } from 'react-redux';
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';

import withSpinner from '../with-spinner/with-spinner.component';

import CollectionOverview from './collection-overview.components';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});



const CollectionOverviewContainer = compose(
    connect(mapStateToProps), WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;