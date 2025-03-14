import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "redux";

// Import slices
import cartSlice from "./reducers/cartSlice";
import registrationSlice from "./reducers/registrationSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import compareSlice from "./reducers/compareSlice";
import stepSlice from "./reducers/stepSlice";
import filterReducer from "./reducers/filterReducer";
import productSlice from "./reducers/productSlice";

// Configure persist for each slice separately
const persistConfigCart = { key: "cart", storage };
const persistConfigRegistration = { key: "registration", storage };
const persistConfigWishlist = { key: "wishlist", storage };
const persistConfigCompare = { key: "compare", storage };
const persistConfigStep = { key: "step", storage };
const persistConfigFilter = { key: "filter", storage };
const persistConfigProduct = { key: "product", storage };

// Wrap each reducer with persistReducer
const persistedCartReducer = persistReducer(persistConfigCart, cartSlice);
const persistedRegistrationReducer = persistReducer(
  persistConfigRegistration,
  registrationSlice
);
const persistedWishlistReducer = persistReducer(
  persistConfigWishlist,
  wishlistSlice
);
const persistedCompareReducer = persistReducer(
  persistConfigCompare,
  compareSlice
);
const persistedStepReducer = persistReducer(persistConfigStep, stepSlice);
const persistedFilterReducer = persistReducer(
  persistConfigFilter,
  filterReducer
);

const persistedProductReducer = persistReducer(persistConfigProduct, productSlice);

// Combine reducers
const rootReducer = combineReducers({
  cart: persistedCartReducer,
  registration: persistedRegistrationReducer,
  wishlist: persistedWishlistReducer,
  compare: persistedCompareReducer,
  step: persistedStepReducer,
  filter: persistedFilterReducer,
  product: persistedProductReducer,
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persistor
export const persistor = persistStore(store);

// // Combine all reducers
// const rootReducer = combineReducers({
//   cart: cartSlice,
//   step: stepSlice,
//   wishlist: wishlistSlice,
//   compare: compareSlice,
//   registration: registrationSlice,
//   filter: filterReducer,
// });

// // Persist configuration for the entire root reducer
// const persistConfig = {
//   key: "root", // Key to store the whole state in localStorage
//   storage, // Use localStorage
// };

// // Wrap the rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure the Redux store
// export const store = configureStore({
//   reducer: persistedReducer,
// });

// // Types for RootState and AppDispatch
// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// // Persistor for the store
// export const persistor = persistStore(store);

// // export const store = configureStore({
// //   reducer: {
// //     cart: persistedCartReducer,
// //     step: stepSlice,
// //     wishlist: wishlistSlice,
// //     compare: compareSlice,
// //     registration: registrationSlice,
// //     filter: filterReducer,
// //   },
// // });

// // export type RootState = ReturnType<typeof store.getState>;

// // export type AppDispatch = typeof store.dispatch;

// // Create persistor
// // export const persistor = persistStore(store);
