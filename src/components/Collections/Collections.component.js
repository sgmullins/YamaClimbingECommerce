import React from 'react';
import './Collections.styles.scss';
import { CollectionPreview } from '../Collection-Preview/CollectionPreview.component';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

const Collections = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(Collections);
