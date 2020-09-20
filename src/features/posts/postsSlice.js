import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
  ],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
