import { createStore } from "redux";
import { activereducer } from "./Reducers";


export const store = createStore(activereducer)