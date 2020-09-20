import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const PostsList = () => {
  //   const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  const renderPosts = () =>
    posts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    ))

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}
