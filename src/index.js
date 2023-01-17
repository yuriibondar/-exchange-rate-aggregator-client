import ReactDOM from "react-dom";
import App from "./App";
import state from "./store/state";

ReactDOM.render(<App state={state} />, document.getElementById("root"));