import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', user: null },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: null,
  },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        const id = nanoid()
        return {
          payload: {
            id,
            title,
            content,
            user: userId,
          },
        }
      },
    },
    updatePost: (state, action) => {
      const { id, title, content, user } = action.payload
      const index = state.findIndex((post) => post.id === id)
      state[index] = { id, title, content, user }
    },
  },
})

export const { addPost, updatePost } = postsSlice.actions

export default postsSlice.reducer
