import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import './App.css'

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
