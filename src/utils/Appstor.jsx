import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
const Appstor= configureStore({
     reducer: {
         app: appReducer,
     },
});

export default Appstor;