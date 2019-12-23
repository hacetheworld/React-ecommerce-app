import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './collection-overview.styles.scss';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionOverview);