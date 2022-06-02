import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import voca from "./modules/vocabulary";

const middlewares = [thunk];

// reeducer + options 모아 놓은 것
const rootReducer = combineReducers({ voca });

// middleware의 모음
const enhancer = applyMiddleware(...middlewares);

// rootReducer를 한번에 모아 store 생성
const store = createStore(rootReducer, enhancer);

export default store;
