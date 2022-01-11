import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { activereducer } from "./Reducers";


export const store = createStore(activereducer,applyMiddleware(thunk))