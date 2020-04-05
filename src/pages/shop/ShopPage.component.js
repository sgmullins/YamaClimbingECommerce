import React, { useState } from 'react';
import TEMP_SHOP_DATA from './TempShopData';
import { CollectionPreview } from '../../components/Collection-Preview/CollectionPreview.component';
export const ShopPage = () => {
  const [collections, setCollections] = useState(TEMP_SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};
