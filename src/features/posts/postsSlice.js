import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        const id = nanoid()
        return {
          payload: {
            id,
            title,
            content,
          },
        }
      },
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload
      const index = state.findIndex((post) => post.id === id)
      state[index] = { id, title, content }
    },
  },
})

export const { addPost, updatePost } = postsSlice.actions

export default postsSlice.reducer
