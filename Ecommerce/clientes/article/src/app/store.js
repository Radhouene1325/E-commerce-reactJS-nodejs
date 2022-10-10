import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import productesReducer from '../features/counter/productSlice';

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storageSession from 'redux-persist/lib/storage/session'



const reduces = combineReducers({
  articleproduct: productesReducer,
})
/************configure persist******** */
const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
  whitelist: ['articleproduct'],
}
/************************* */
// reducers

const persistedReduces = persistReducer(persistConfig, reduces)

// export const store =configureStore({
//   reducer: persistedReduces
// });



export const store = configureStore({
  reducer: persistedReduces,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
