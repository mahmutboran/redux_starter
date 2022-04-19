import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store =createStore(rootReducer, composeWithDevTools());
// let store;
// if (process.env.NODE_ENV === "development") {
//   store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// } else {
//   store = createStore(rootReducer, applyMiddleware(thunk));
// }

export default store;