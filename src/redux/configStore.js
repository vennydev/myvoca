//configStore.js
import { createStore, combineReducers } from "redux";
import voca from "./modules/vocabulary";

// 리듀서를 묶어 rootReducer 생성
const rootReducer = combineReducers({ voca });

// 스토어 생성
const store = createStore(rootReducer);

export default store;