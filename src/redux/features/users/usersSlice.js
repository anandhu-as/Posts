import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 0, name: "roberto carlos" },
  { id: 1, name: "pepe" },
  { id: 2, name: "messi" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllusers = (state) => state.users;
export default usersSlice.reducer;
