import { legacy_createStore as createStore,applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// const initialState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}

const persistConfig = {
    key: 'root',
    whitelist: ['cart'],
    storage,
  }

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// store.subscribe(()=>{
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

const persistor = persistStore(store);

export {store, persistor}

// export default store;
