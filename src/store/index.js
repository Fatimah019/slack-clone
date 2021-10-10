import { configureStore } from "@reduxjs/toolkit";
import channelRoomReducer from "./channelrooms";

export default configureStore({
  reducer: {
    channelRoom: channelRoomReducer,
  },
});
