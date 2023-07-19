import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "First Object",
    content: "This is the content of the first object.",
  },
  {
    id: 2,
    title: "Second Object",
    content: "This is the content of the second object.",
  },
  {
    id: 3,
    title: "Third Object",
    content: "This is the content of the third object.",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});
export default postsSlice.reducer;
export const { addPosts } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
