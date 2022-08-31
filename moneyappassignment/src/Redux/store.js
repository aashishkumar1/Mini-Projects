import { legacy_createStore } from "redux";
import { productsReducer } from "./Products/reducer";


const store = legacy_createStore(productsReducer);

export {store};