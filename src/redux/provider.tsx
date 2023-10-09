"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        {/* //PersistGate delays the rendering of UI until the persisted state has been retrrieved and saved to redux */}
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
}

export default ReduxProvider;