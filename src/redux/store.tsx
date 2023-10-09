import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '@/redux/slice/loginSlice'
import { useDispatch } from "react-redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'

const defaultMiddlewareConfig = {
    serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.headers', 'register', 'rehydrate'],
        // Ignore these paths in the state
        ignoredPaths: [],
    }
};

const userPersistConfig = {
    storage: storage,
    key: 'user',
    blacklist: ['isLoading', 'isError']
};

export const store = configureStore({
    reducer: {
        login: persistReducer(userPersistConfig, loginReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(defaultMiddlewareConfig),
});

export let persistor = persistStore(store)

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

