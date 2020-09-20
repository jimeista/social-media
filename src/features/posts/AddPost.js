import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'

export const AddPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleAddPost = (e) => {
    if (title && content) {
      dispatch(addPost(title, content))
    }
  }

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
        <button type='button' onClick={handleAddPost}>
          Add post
        </button>
      </form>
    </section>
  )
}
