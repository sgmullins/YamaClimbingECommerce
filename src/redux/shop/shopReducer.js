import YAMA_SHOP_DATA from '../../pages/shop/YamaShopData';

const INITIAL_STATE = {
  collections: YAMA_SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
