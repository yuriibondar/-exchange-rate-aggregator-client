import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";

const render = () => {
    ReactDOM.render(<App state={store.getState()} />, document.getElementById("root"));
}

store.subscribeForStateUpdates(render);
store.fetchRates();
render();

