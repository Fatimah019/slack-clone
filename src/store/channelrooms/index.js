import { createSlice } from "@reduxjs/toolkit";

export const channelRoomSlice = createSlice({
  name: "channelRoom",
  initialState: {
    channelRoomId: null,
  },
  reducers: {
    addChannelRoom: (state, action) => {
      state.channelRoomId = action.payload.channelRoomId;
    },
  },
});

export const { addChannelRoom } = channelRoomSlice.actions;

export const selectChannelRoomId = (state) => state.channelRoom.channelRoomId;

export default channelRoomSlice.reducer;
