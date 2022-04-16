import { configureStore } from "@reduxjs/toolkit";

import citySlice from "./city-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { city: citySlice.reducer, ui: uiSlice.reducer },
});

export default store;
