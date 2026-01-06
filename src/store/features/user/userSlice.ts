import { TUser } from "@/lib/types";
import userApi from "@/store/services/userApi";
import { createSlice } from "@reduxjs/toolkit";

type InitialstateProps = {
  user: TUser | null;
};

const initialState: InitialstateProps = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUserById.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

//export const {} = userSlice.actions;

export default userSlice.reducer;
