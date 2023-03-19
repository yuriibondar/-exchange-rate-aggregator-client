import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App state={store.getState()} fetchRates={store.fetchRates.bind(store)}/>);

store.subscribeForStateUpdates(() => root.render(<App state={store.getState()} fetchRates={store.fetchRates.bind(store)}/>));
store.fetchRates();
