import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: null,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: null,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
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
            date: new Date().toISOString(),
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
