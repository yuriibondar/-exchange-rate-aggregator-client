import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store, { fetchRates } from "./store/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App state={store.getState()} fetchRates={() => store.dispatch(fetchRates())}/>);
store.subscribe(() => root.render(<App state={store.getState()} fetchRates={() => store.dispatch(fetchRates())}/>));
// root.render(<App state={store.getState()} fetchRates={store.fetchRates.bind(store)}/>);

// store.subscribeForStateUpdates(() => root.render(<App state={store.getState()} fetchRates={store.fetchRates.bind(store)}/>));
// store.fetchRates();
