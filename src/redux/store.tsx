import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '@/redux/slice/loginSlice'
import { useDispatch } from "react-redux";

const defaultMiddlewareConfig = {
    serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.headers'],
        // Ignore these paths in the state
        ignoredPaths: [],
    }
};

export const store = configureStore({
    reducer: {
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(defaultMiddlewareConfig),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
