import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { userReducer } from './user/userReducer';
import { cartReducer } from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //reducers that you want to persist. we have user and cart(see below) but user localstorage is handled by firebase
};
const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
