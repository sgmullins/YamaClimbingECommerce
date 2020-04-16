import React from 'react';
import Collections from '../../components/Collections/Collections.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/CollectionPage.component';

const ShopPage = ({ match }) => {
  // const [collections, setCollections] = useState(YAMA_SHOP_DATA);
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={Collections} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
