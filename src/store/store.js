import { configureStore } from "@reduxjs/toolkit";
import counterStore from "../slice/counterSlice";

const store = configureStore({
  reducer: {
    loginSlice,
  },
});

export default store;
