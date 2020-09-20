import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePost } from './postsSlice'
import { useHistory } from 'react-router-dom'

export const EditPost = ({ match }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
  console.log(post, postId)

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const onSave = (e) => {
    e.preventDefault()

    if (title && content) {
      dispatch(
        updatePost({
          id: post.id,
          title,
          content,
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h1>Edit Post</h1>
      <form>
        <label htmlFor='postTitle'>Title: </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          placeholder='edit title name'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='postContent'>Title: </label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='button' onClick={onSave}>
          Save
        </button>
      </form>
    </section>
  )
}
