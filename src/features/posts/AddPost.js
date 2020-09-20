import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from './postsSlice'

export const AddPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const handleAddPost = (e) => {
    if (title && content) {
      dispatch(addPost(title, content, userId))
      setTitle('')
      setContent('')
      setUserId('')
    }
  }

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const canAdd = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section>
      <h1>Add Post</h1>
      <form>
        <label htmlFor='title'>Title: </label>
        <input
          id='title'
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor='content'>Content: </label>
        <textarea
          id='content'
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <select
          id='postUsers'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ width: 150 }}
        >
          <option value='' />
          {userOptions}
        </select>
        <button type='button' onClick={handleAddPost} disabled={!canAdd}>
          Add post
        </button>
      </form>
    </section>
  )
}
